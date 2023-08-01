import React from 'react'
import { useEffect,useState } from 'react'
import API_KEY from './keys';

const CONTEXT_KEY="c0d66aad5e0964337";//it will tell google which search engine to use i.e the one i created
const useGoogleSearch=(term)=> {

    /*Basically useGoogleSearch will act as a custom hook */

    const [data,setData]=useState(null);

    
    useEffect(()=>{

        const fetchData=async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response=>response.json())
            .then(result=>{
                setData(result)
            })

            

            

        }
        fetchData();
        console.log('Dataaaa',data)
        
    },[term])

    return {data}
}

export default useGoogleSearch

  /* End point that will connect to google's custom search 
                api
                cx=CONTEXT_KEY
                q=query

                */
                 
