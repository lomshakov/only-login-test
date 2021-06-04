import React from "react";
import styled from "styled-components";

const Button = styled.button<{ disabled: boolean }>`
  margin-top: 40px;
  width: 100%;
  height: 60px;
  border: none;
  background: ${props => (props.disabled ? "#99A9FF" : "#4A67FF")};
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;
  outline: none;
`;

interface IButtonSubmit {
    disabled: boolean;
}

export const ButtonSubmit:React.FC<IButtonSubmit> = ({ disabled }) => {
    return (
        <Button type='submit' disabled={disabled}>
            Войти
        </Button>
    );
};