import React, { useContext, useEffect, useState, useCallback } from 'react'
import { FirebaseContext } from '../utils/firebase'
import 'firebase/auth'
import { useGlobalContext } from '../utils/context'

const Login = () => {
  const LoginView = ({ onClick }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
      <div>
        <input
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          type='password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button
          onClick={() => {
            onClick(username, password)
          }}
        >
          Login
        </button>
      </div>
    )
  }

  const LogoutView = ({ onClick }) => {
    return (
      <div>
        <span>You are logged in</span>
        <button onClick={onClick}>Logout</button>
      </div>
    )
  }

  const firebase = useContext(FirebaseContext)
  const { user, setUser } = useGlobalContext()

  function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback({ loggedIn: true })
      } else {
        callback({ loggedIn: false })
      }
    })
  }

  function login(username, password) {
    firebase.auth().signInWithEmailAndPassword(username, password)
  }
  function logout() {
    firebase.auth().signOut()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser)
    return () => {
      unsubscribe()
    }
  }, [])

  const requestLogin = useCallback((username, password) => {
    login(username, password)
  })
  const requestLogout = useCallback(() => {
    logout()
  }, [])

  if (!user.loggedIn) {
    return <LoginView onClick={requestLogin} />
  }
  return <LogoutView onClick={requestLogout} />
}

export default Login
