import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { FirebaseContext } from './firebase'
import 'firebase/firestore'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const firebase = useContext(FirebaseContext)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({ loggedIn: false })

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
