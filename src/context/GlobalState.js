import React, { useEffect, useState, useReducer, createContext } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    characters: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [url, setUrl] = useState(null);
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true);

    return (
        <GlobalContext.Provider  value={{
            url,
            setUrl,
            isLoading,
            setLoading,
          }}>
            {children}
        </GlobalContext.Provider>
    )
}