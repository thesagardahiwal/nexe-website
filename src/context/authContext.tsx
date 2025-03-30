"use client";

import { createContext, useState, ReactNode, useEffect, useContext, useCallback } from 'react';
import { Models, Query } from "appwrite";
import { account, databaseId, databases, userCollectionId } from '@/libs/appwrite/config';

interface ContextProps {
    session: Models.Session | null;
    user: Models.Document | undefined;
    updateUser: (user: Models.Document) => void;
    updateSession: (session: Models.Session) => void;
    isLoading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<ContextProps>({
    session: null,
    user: undefined,
    updateSession: () => {},
    updateUser: () => {},
    isLoading: true,
    logout: async () => {}
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Models.Document | undefined>(undefined);
    const [session, setSession] = useState<Models.Session | null>(null);
    const [isLoading, setLoading] = useState(true);

    const updateSession = (session: Models.Session) => {
        setSession(session);
    };

    const updateUser = (user: Models.Document) => {
        setUser(user);
    };
    
    const logout = async () => {
        try {
            await account.deleteSession("current");
            setUser(undefined);
            setSession(null);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const fetchSession = useCallback(async () => {
        setLoading(true);
        try {
            const session = await account.getSession("current");
            if (!session) return;
            setSession(session);

            const userSnap = await databases.listDocuments(
                databaseId,
                userCollectionId,
                [Query.equal('id', session.userId)]
            );
            if (userSnap.total > 0) {
                setUser(userSnap.documents[0]);
            }
        } catch (error) {
            console.error("Error fetching session:", error);
        } finally {
            setLoading(false);
        }
    }, []);
    
    useEffect(() => {
        fetchSession();
    }, [fetchSession]);

    return (
        <AuthContext.Provider value={{ user, isLoading, logout, updateSession, updateUser, session }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth, AuthContext };