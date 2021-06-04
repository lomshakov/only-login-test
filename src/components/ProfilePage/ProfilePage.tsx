import React from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 48px;
  color: #000000;
  text-align: center;
`;

const Greeting = styled.div`
  font-size: 40px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const ButtonLogout = styled.button`
  margin-top: 50px;
  width: 200px;
  height: 60px;
  border: none;
  background: #F5F5F5;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  outline: none;
`;

export const ProfilePage:React.FC = () => {
    const auth = useAuth();

    const handleLogout = () => {
        auth?.signOut(() => {
            // push logout
        })
    };

    const logout = () => {
        handleLogout()
    };

    return (
        <Container>
            <Greeting>
                {"Здравствуйте, "}
                <Name>{auth?.user}</Name>
            </Greeting>
            <ButtonLogout onClick={logout}>Выйти</ButtonLogout>
        </Container>
    );
};