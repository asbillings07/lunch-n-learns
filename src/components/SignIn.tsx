import { useState, useEffect } from 'react'
import { Button, Card, Input } from "../elements";
import styled from 'styled-components/macro'
import bluePic from '../images/blue.png'


const Container = styled.div` 
margin-top: 25px;
display: flex;
flex-direction: column;
align-items: center;
`
const InputContainer = styled.div`

margin: 25px 0;

`
const ButtonContainer = styled.div` 
display: flex;
`



export const SignIn = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    })

    return (
        <Container>
            {width > 900 && (
                <Card title="SignIn" image={bluePic} />
            )}
            <InputContainer>
                <Input label='email' domID='email' name='email' onChange={() => false} />
                <Input label='password' domID='email' name='email' onChange={() => false} />
            </InputContainer>
            <ButtonContainer>
                <Button name='Sign In' onClick={() => false} />
                <Button name='Sign Up' onClick={() => false} />
            </ButtonContainer>
        </Container>
    )
}
