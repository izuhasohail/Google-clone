import React,{useContext,useReducer,createContext} from "react";


//preparing the data layer
export const StateContext=createContext();

export const StateProvider=({reducer,initialState,children})=>(

    <StateContext.Provider value={useReducer(reducer,initialState)}>

        {children}

    </StateContext.Provider>
)
//Hook which will allow us to pull the information
export const useStateValue=()=>useContext(StateContext);