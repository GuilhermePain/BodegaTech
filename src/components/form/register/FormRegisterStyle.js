import styled from "styled-components";

export const MainContainer = styled.div`
    max-width: 900px;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.300);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Aside = styled.aside`
    width: 60%;

    img {
        width: 100%;
        border-radius: 30px;
    }
`;

export const FormContainer = styled.div`
    width: 40%;
    animation: fadeIn 0.5s ease-in-out forwards;
`;

export const FormContent = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 8px;
    padding: 24px;

    h1 {
        text-align: center;
    }

    hr {
        margin: auto;
        border: 2px solid #239FD0;
        border-radius: 30px;
        width: 150px;
    }

    p {
        text-align: center;
    }
`;

export const FormFields = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: ${({$primary}) => ($primary ? 'row' : 'column')};
`;

export const Inputs = styled.input`
    border: 2px solid transparent;
    outline: 0;
    border-radius: 30px;
    background-color: #E2E2E2;
    padding: 10px;

    &:hover{
        border: 2px solid #239FD0;
    }

    &:focus{
        border: 2px solid #239FD0;
    }

`;

export const Button = styled.button`
    width: 200px;
    background-color: #239FD0;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 30px;
    outline: 0;
    padding: 10px;
    cursor: pointer;
    margin: 0 auto;
`;