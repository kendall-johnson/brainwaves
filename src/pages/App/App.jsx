import { useState, useEffect } from 'react'
import './App.css'
import MoodTrackingPage from '../MoodTrackingPage/MoodTrackingPage'
import MoodPage from '../MoodPage/MoodPage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import { index as fetchMoods } from '../../utilities/moods-api';
import Sidebar from '../../components/NavBar/Sidebar'



export default function App() {

  const [user, setUser] = useState(getUser())
  const [mood, setMood] = useState({});
  

  function updateUser(userState) {
    setUser(userState);
  }

  useEffect(() => {
    async function getMoods() {
      try {
        const moodsData = await fetchMoods();
        setMood(moodsData);
      } catch (error) {
        console.log(error);
      }
    }
    getMoods();
  }, []);

  return (
    <>
    <main className="App">
  <div className="bg-gradient-to-br from-purple-400 to-blue-500 h-screen flex flex-row">
    <Sidebar user={user} updateUser={updateUser} className="w-64" />
    <div className="flex-1">
      {user ?
        <Routes>
          <Route path="/moods/" element={<MoodPage mood={mood} setMood={setMood}/>} />
          <Route path="/moods/new" element={<MoodTrackingPage mood={mood} setMood={setMood}/>} />
        </Routes>
        :
        <AuthPage setUser={updateUser} />
      }
    </div>
  </div>
</main>

    </>
  )
}

