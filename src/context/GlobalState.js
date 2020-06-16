import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial State
const initialState = {
    transactions: [
        {id: 1, text: "Laptop", amount: -30000},
        {id: 2, text: "Salary", amount: 50000},
        {id: 3, text: "Books", amount: -200} 
    ] 
}

//Create Context

export const GlobalContext = createContext (initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);

}