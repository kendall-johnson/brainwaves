import React from 'react'
import MoodTrackingForm from '../../components/MoodTrackingForm/MoodTrackingForm'

export default function MoodTrackingPage({mood, setMood}) {
  
  return (
  <>
  <MoodTrackingForm mood={mood} setMood={setMood} />
  </>
  )
}
