import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const logIn = (newToken) => {
    localStorage.setItem('buena-onda-token', newToken)
    setUser(newToken)
    setIsAuth(true)
  }
  
  const logOut = () => {
    localStorage.removeItem('buena-onda-token')
    setUser({})
    setIsAuth(false)
  }
  
  useEffect(() => {
    const localToken = localStorage.getItem('buena-onda-token')
    if (localToken) {
      setUser(localToken)
      setIsAuth(true)
    }
  }, [])
  
  console.log(isAuth, 'context')
  
  return (
    <AuthContext.Provider value={{ isAuth, user, logIn, logOut }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
