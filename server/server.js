const { ApolloServer, SchemaDirectiveVisitor, PubSub, AuthenticationError, UserInputError, ApolloError } = require('apollo-server')
const gql = require('graphql-tag')
const { defaultFieldResolver, GraphQLString } = require('graphql')

class LogDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition (field) {
        const resolver = field.resolve || defaultFieldResolver
        // const { message } = this.args // <- args on schema level
        field.args.push({
            type: GraphQLString,
            name: "message"
        }) // args on query level
        field.resolve = (root, { message, ...rest }, ctx, info) => {
            const { message: schemaMessage } = this.args
            console.log('Hi', message || schemaMessage)
            return resolver.apply(this, root, rest, ctx, info)
        }
    }
}

const pubsub = new PubSub()
const NEW_ITEM = 'NEW_ITEM'

const typeDefs = gql`

directive @log(message: String = "my message") on FIELD_DEFINITION

# tell where you want the directive to be which level (Type, Field, Query )

type User {
    id: ID! @log(message: "Just overrided your message cuz...")
    error: String! @deprecated(reason: "Use other field")
    username: String!
    createdAt: String!
}

type Settings {
    user: User!
    theme: String!
}

type Item {
    task: String!
}

input NewSettingsInput {
    user: ID!
    theme: String!
}

type Query {
    me: User!
    settings(user: ID!): Settings!
}

type Mutation {
    settings( input: NewSettingsInput!): Settings!
    createItem(task: String!) : Item!
}

type Subscription {
    newItem: Item
}


`



const resolvers = {
    Query: {
        me () {
            return {
                id: 1,
                username: 'joeTheMost',
                createdAt: 392383738
            }
        },
        settings (_, { user }) {
            return {
                user,
                theme: 'light'
            }
        },
    },

    Mutation: {
        settings (_, { input }) {
            return input
        },
        createItem (_, { task }) {
            const item = { task }
            pubsub.publish(NEW_ITEM, { newItem: item })
            return item
        }
    },
    Subscription: {
        newItem: {
            subscribe: () => pubsub.asyncIterator(NEW_ITEM)
        }
    },

    Settings: {
        user () {
            return {
                id: 1,
                username: 'joeTheMost',
                createdAt: 392383738
            }
        }
    },
    User: {
        error: () => {
            return 'dajskldjflkajsd'
        }
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives: {
        log: LogDirective
    },
    // formatError: (e) => {
    //     // add error tracking services here
    //     // e instanceof AuthencationError 
    //     console.log(e)
    //     return e
    // },
    context: ({ connection }) => {
        if (connection) return { ...connection.context }
    },
    subscriptions: {
        onConnect (params) {

        }
    }
})

server.listen().then(({ url }) => console.log(`server is running at ${url}`))