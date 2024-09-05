import { useContext, useState } from "react";
import { createContext } from "react";

const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

export const ContexProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    // const [token, _setToken] = useState(1234);

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }
        else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    return (
        <stateContext.Provider value={{
            user, token, setUser, setToken
        }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext);
