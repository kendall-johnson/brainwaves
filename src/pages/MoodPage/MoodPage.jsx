import React from 'react'
import MoodList from '../../components/MoodList/MoodList'

export default function MoodPage({moods, setMoods}) {
  const date = new Date();
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfMonth = date.toLocaleDateString('en-US', { day: 'numeric' });
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  return (
    <>
     <div className="bg-gray-200 py-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg px-6 py-4">
        <h1 className="text-lg font-bold text-gray-800">
          Today is {dayOfWeek}, {month} {dayOfMonth}
        </h1>
      </div>
    </div>
      <MoodList moods={moods} setMoods={setMoods} />
    </>
  )
}
