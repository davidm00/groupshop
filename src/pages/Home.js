import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../utils/firebase'
import 'firebase/firestore'

const Home = () => {
  const firebase = useContext(FirebaseContext)
  const [list, setList] = useState(null)
  const ref = firebase.firestore().collection('fakeUsers')

  useEffect(() => {
    ref
      .get()
      .then((snapshot) => {
        if (!snapshot) {
          setList((l) => [])
        } else {
          let people = []
          snapshot.forEach((person) => {
            people.push({ key: person.id, ...person.data() })
          })
          setList((l) => people)
        }
      })
      .catch((error) => {
        // Handle the error
      })
  }, [])
  let listToDisplay
  if (list === null) {
    listToDisplay = <li>Loading people...</li>
  } else if (list.length === 0) {
    listToDisplay = <li>No people found</li>
  } else {
    listToDisplay = list.map((person) => {
      return <li key={person.key}>{person.email}</li>
    })
  }
  return <ol>{listToDisplay}</ol>

  // return <div>Home Component</div>
}

export default Home
