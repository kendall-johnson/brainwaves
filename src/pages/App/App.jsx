import { useState } from 'react'
import './App.css'
import MoodTrackingPage from '../MoodTrackingPage/MoodTrackingPage'
import MoodPage from '../MoodPage/MoodPage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';

export default function App() {

  const [user, setUser] = useState(getUser())

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/moods/" element={<MoodPage />} />
            <Route path="/moods/new" element={<MoodTrackingPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

