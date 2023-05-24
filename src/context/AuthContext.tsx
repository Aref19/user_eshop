import { SetStateAction } from "react";
import { Dispatch } from "react";
import { createContext, useState } from "react";


export interface Auth {
    access_Token: string,
    username: string,
    password: string,
    refresh_token?: string
}

export type AuthType = {
    setAuth: Dispatch<SetStateAction<Auth | null>>
    auth: Auth | null
}


export const userAuthContext = createContext<AuthType | null>(null);


export const UserContext = ({ children }: { children: JSX.Element[] }) => {
    const [auth, setAuth] = useState<Auth | null>(null);

    return (
        <userAuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </userAuthContext.Provider>
    )

}
