import {supabase} from "../supabase"
import React, {createContext, useContext, useEffect, useState} from "react";
import {UserIdentity} from "@supabase/gotrue-js/src/lib/types";
import {User} from "@supabase/gotrue-js/src/lib/types";
import {AuthChangeEvent} from "@supabase/gotrue-js/src/lib/types";

export interface Game {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

export type GameType = {
    login: () => void;
    updateTodo: () => void;
};


const authContext = createContext<GameType | null>(null);

export const AuthProvider: React.FC<React.ReactNode> = ({children}) => {
    const auth = useProviderAuth()
    // @ts-ignore
    return <authContext.Provider value={auth}>  {children} </authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

const useProviderAuth = () => {
    const [user, setUser] = useState<User | null>(null)

    const login =  async (email: string) => {
        const {error, user} = await supabase.auth.signIn({email})

        if(error) {
            console.log(error)
        }

        return {error, user}
    }
    const logout = async () => {
        const {error} = await supabase.auth.signOut()

        if(error) {
            console.log(error)
        }

        setUser(null)
    }

    useEffect(() => {
        const currentUser = supabase.auth.user()
        setUser(currentUser)

        const auth = supabase.auth.onAuthStateChange((e, session) => {
            if (session && e === 'SIGNED_IN') {
                setUser(session.user)
            } else {
                setUser(null)
            }
        })
        // @ts-ignore
        return () => auth?.data.unsubscribe()

    }, [])
    return {user, login, logout}
}

