import React from "react";
import styled from "styled-components";
import { Path, UseFormRegister } from "react-hook-form";
import {IFormValues} from "../LoginPage/LoginPage";

const Container = styled.div`
  text-align: start;
  position: relative;
`;

const InputCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  
  &+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  
  &+label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
    vertical-align: center;
    margin-right: 14px;
  }

  &:checked+label::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 3px;
    width: 14px;
    height: 14px;
    background: #4A67FF;
    border-radius: 2px;
  }
`;

const Label = styled.label`
  white-space: pre-wrap;
  font-size: 14px;
  display: inline-block;
`;

const Text = styled.div`
  font-size: 16px;
`;

type InputProps = {
    field: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
};

export const CheckBox: React.FC<InputProps> = ({ register, field }) => {
    return (
        <Container>
            <InputCheckbox {...register(field)} id='idCheck' type='checkbox' />
            <Label htmlFor='idCheck'>
                <Text>Запомнить пароль</Text>
            </Label>
        </Container>
    );
};