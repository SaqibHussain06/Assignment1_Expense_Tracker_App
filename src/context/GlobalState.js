import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial State
const initialState = {
    transactions: [
        //{id: 1, text: "Laptop", amount: -30000},
        //{id: 2, text: "Salary", amount: 50000},
        //{id: 3, text: "Books", amount: -200},
        //{id: 4, text: "Flowers", amount: 50}
    ] 
}

//Create Context

export const GlobalContext = createContext (initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
//Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION', 
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION', 
            payload: transaction
        });
    }
    
    
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);

}