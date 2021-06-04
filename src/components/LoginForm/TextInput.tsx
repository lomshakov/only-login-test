import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Path, UseFormRegister} from "react-hook-form";

const Container = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.input<{ isError?: boolean }>`
  display: block;
  width: 100%;
  height: 60px;
  border: ${props => (props.isError ? "1px solid #E26F6F" : "none")};
  border-radius: 8px;
  background-color: #F5F5F5;
  padding-left: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  line-height: 19px;
`;

const Error = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #E26F6F;
`;

interface IFormValues {
    login: string;
    password: string;
    rememberMe: boolean;
}

type InputProps = {
    field: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
    type: string;
    label: string;
    error: string | undefined;
};

export const TextInput: React.FC<InputProps> = ({ field, register, required, type, label, error }) => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        error
            ? setIsError(true)
            : setIsError(false)
    }, [error])

    return (
        <Container>
            <Label>{label}</Label>
            <Input {...register(field, { required })} type={type} isError={isError} />
            {isError && <Error>{error}</Error>}
        </Container>
    )
};