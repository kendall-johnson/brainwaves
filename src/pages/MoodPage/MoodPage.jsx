import React from 'react'
import MoodList from '../../components/MoodList/MoodList'
import RandomQuote from '../../components/RandomQuote/RandomQuote';

export default function MoodPage({mood, setMood}) {
  const date = new Date();
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfMonth = date.toLocaleDateString('en-US', { day: 'numeric' });
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  return (
    <>
     <div className="flex py-4">
  <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg px-6 py-4">
    <h1 className="text-lg font-bold text-gray-800 text-left">
      Today <br></br> 
    </h1>
  <h2>{dayOfWeek}, {month} {dayOfMonth}</h2>
    </div>
  </div>
      <MoodList mood={mood} setMood={setMood} />
    </>
  )
}
