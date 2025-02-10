import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../context/AuthContext.types";

const useAuthContext = (): AuthContextType => {  
    const context = useContext(AuthContext);  
    if (!context) {  
        throw new Error("useAuthContext must be used within an AuthContextProvider");  
    }  
    return context;  
};

export {useAuthContext};