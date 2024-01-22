import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
  const {dispatch} = useAuthContext()
  const [error, setError] = useState(null)

  const login = async (username, password) => {
    const response = await fetch('http://localhost:4000/api/users/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    const json = await response.json();
    if (!response.ok) {
      setError(json.err)
      console.log(json.err)
    } 
    if(response.ok){
      localStorage.setItem('user',JSON.stringify(json))
      dispatch({type:'LOGIN', payload:json})
    } 
  }


  return {login, error}
}