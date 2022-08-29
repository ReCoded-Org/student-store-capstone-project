import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});
// localStorage.setItem(JSON.stringify())

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    useEffect(() => {
        if (auth === null) return;
        localStorage.setItem("user", JSON.stringify(auth));
    }, [auth]);
    useEffect(() => {
        const data =
            localStorage.getItem("user") === "undefined"
                ? {}
                : JSON.parse(localStorage.getItem("user"));
        setAuth(data);
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
