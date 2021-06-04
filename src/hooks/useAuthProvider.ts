import {useState} from "react";
import fakeAuth, {IValidateResult} from "../api/fakeAuth";

export interface IUseAuthProvider {
    signIn: (cb: () => IValidateResult) => void;
    signOut: (cb: () => void) => void;
    user: null | string;
    isAuthenticated: boolean;
    error: boolean;
}

const useAuthProvider = (): IUseAuthProvider => {
    const [user, setUser] = useState<null | string>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const signIn = (cb: () => IValidateResult) => {
        fakeAuth.signIn(() => {
            const result = cb();
            setUser(result.login);
            setIsAuthenticated(result.isValid);
            setError(!result.isValid);
        });
    };

    const signOut = (cb: () => void) => {
        fakeAuth.signOut(() => {
            setUser(null);
            setIsAuthenticated(false);
            cb();
        });
    };

    return {
        user,
        signIn,
        signOut,
        isAuthenticated,
        error
    };
};

export default useAuthProvider;