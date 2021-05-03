import styled from "styled-components/macro";

interface IProps {
    image: string;
    imageDesc?: string;
    title: string;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    style?: any;
}

const StyledCard = styled.div`
    max-height: 200px;
    max-width: 250px;
    border-radius: 15px;
    text-align: center;
    background: var(--purple);
    padding: 20px;
    color: white;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
    h3 {
        margin-top: 0;
        font-size: 2rem;
    }
    img {
        width: 100%;
        height: 165px;
    }
`;

export const Card = ({ title, image, imageDesc = "" }: IProps) => {
    return (
        <StyledCard>
            <h3>{title}</h3>
            <img src={image} alt={imageDesc} />
        </StyledCard>
    );
};
