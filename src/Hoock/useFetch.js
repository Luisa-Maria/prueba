import React, { useEffect, useState } from 'react'

export const useFetch = () => {
    const [mains , setMains] = useState(null)

useEffect(() => {
    console.log('useEffect')
   obtenerDatos()
   
}, [])

 const obtenerDatos = async ()=> {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    //console.log(response.status)
    const responseJSON= await response.json()
    //setMains(responseJSON)
    console.log(responseJSON)
 }
 
    return (
        <div>
           <h1>hay algo</h1>
        </div>
    )
}




// const fetchApi= async ()=> {
//     const response = await fetch(url)
//     //console.log(response.status)
//     const responseJSON= await response.json()
//     setMains(responseJSON)
//     //console.log(responseJSON)
//   }