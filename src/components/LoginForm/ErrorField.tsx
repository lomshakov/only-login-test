import React from "react";
import styled from "styled-components";

const Error = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #F5E9E9;
  border: 1px solid #E26F6F;
  border-radius: 8px;
  margin-bottom: 27px;
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Icon = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #FFC8C8;
  margin-right: 14px;
  
  &::after {
    position: absolute;
    content: "!";
    font-size: 14px;
    color: #EE6565;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Message = styled.div`
  display: inline-block;
  font-size: 14px;
  line-height: 17px;
`;

interface IErrorField {
    user: string | null;
}

export const ErrorField:React.FC<IErrorField> = ({ user }) => {
    return (
        <Error>
            <MessageWrapper>
                <Icon />
                <Message>
                    {`Пользователя ${user} не существует`}
                </Message>
            </MessageWrapper>
        </Error>
    );
};