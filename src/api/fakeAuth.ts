import {IFormValues} from "../components/LoginPage/LoginPage";

const registeredUser = {
    login: "steve.jobs@example.com",
    password: "password"
};

export interface IValidateResult {
    login: string;
    isValid: boolean;
}

export const validateUser = (data: IFormValues): IValidateResult => {
    const isValid = data.login === registeredUser.login && data.password === registeredUser.password;
    return {login: data.login, isValid};
};

const fakeAuth = {
    isAuthenticated: false,
    signIn(cb: () => void) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 1500);
    },
    signOut(cb: () => void) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 300);
    }
};

export default fakeAuth;