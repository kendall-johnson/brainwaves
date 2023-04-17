import React from 'react'
import MoodTrackingForm from '../../components/MoodTrackingForm/MoodTrackingForm'

export default function MoodTrackingPage({moods, setMoods}) {
  
  return (
  <>
  <MoodTrackingForm moods={moods} setMoods={setMoods} />
  </>
  )
}
