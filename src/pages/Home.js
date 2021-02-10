import React, { useContext, useEffect, useState, useCallback } from 'react'
import { FirebaseContext } from '../utils/firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { useGlobalContext } from '../utils/context'

const Home = () => {
  return <h1>Home Component</h1>
}

export default Home
