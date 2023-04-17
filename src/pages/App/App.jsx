import { useState, useEffect } from 'react'
import './App.css'
import MoodTrackingPage from '../MoodTrackingPage/MoodTrackingPage'
import MoodPage from '../MoodPage/MoodPage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import { index as fetchMoods } from '../../utilities/moods-api';


export default function App() {

  const [user, setUser] = useState(getUser())
  const [moods, setMoods] = useState([]);

  function updateUser(userState) {
    setUser(userState);
  }

  useEffect(() => {
    async function getMoods() {
      try {
        const moodsData = await fetchMoods();
        setMoods(moodsData);
      } catch (error) {
        console.log(error);
      }
    }
    getMoods();
  }, []);

  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/moods/" element={<MoodPage moods={moods} setMoods={setMoods}/>} />
            <Route path="/moods/new" element={<MoodTrackingPage moods={moods} setMoods={setMoods}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

