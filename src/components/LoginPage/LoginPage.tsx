import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {SubmitHandler, useForm} from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import {useHistory} from "react-router-dom";
import {TextInput} from "../LoginForm/TextInput";
import {CheckBox} from "../LoginForm/CheckBox";
import {ButtonSubmit} from "../LoginForm/ButtonSubmit";
import {validateUser} from "../../api/fakeAuth";
import {ErrorField} from "../LoginForm/ErrorField";

const Form = styled.form`
  width: 640px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export interface IFormValues {
    login: string;
    password: string;
    rememberMe: boolean;
}

export const LoginPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {register, formState: {errors}, handleSubmit} = useForm<IFormValues>();
    const auth = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (auth && auth?.isAuthenticated) {
            setIsLoading(false);
            history.push("/profile");
        }
        if (auth && auth.user) setIsLoading(false);
    }, [auth])

    const onSubmit: SubmitHandler<IFormValues> = data => {
        setIsLoading(true);
        auth?.signIn(() => validateUser(data));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {auth && auth.error && <ErrorField user={auth?.user} />}
            <TextInput field="login"
                       register={register}
                       required type="text"
                       label="Логин"
                       error={errors.login && "Обязательное поле"}
            />
            <TextInput field="password"
                       register={register}
                       required
                       type="password"
                       label="Пароль"
                       error={errors.password && "Обязательное поле"}
            />
            <CheckBox field="rememberMe" register={register}/>
            <ButtonSubmit disabled={isLoading} />
        </Form>
    );
};