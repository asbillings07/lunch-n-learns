import { useState, useEffect, ChangeEvent } from "react";
import { useWindowWidth } from "../Hooks/useWindowWidth";
import { Button, Card, Input } from "../elements";
import styled from "styled-components/macro";
import bluePic from "../images/blue.png";

const Container = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const InputContainer = styled.div`
    margin: 25px 0;
`;
const ButtonContainer = styled.div`
    display: flex;
`;

export const SignIn = () => {
    const [name, setName] = useState("");
    const width = useWindowWidth();
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <Container>
            {width > 900 && <Card title='Type Something to begin' image={bluePic} />}
            <InputContainer>
                <Input
                    value={name}
                    label='name'
                    domID='name'
                    name='name'
                    onChange={onInputChange}
                />
            </InputContainer>
            <ButtonContainer>
                <Button name='Sign In' onClick={() => false} />
                <Button name='Sign Up' onClick={() => false} />
            </ButtonContainer>
        </Container>
    );
};
