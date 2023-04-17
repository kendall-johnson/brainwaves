import React from 'react'
import MoodList from '../../components/MoodList/MoodList'

export default function MoodPage({moods, setMoods}) {

  
  return (
    <>
      <MoodList moods={moods} setMoods={setMoods} />
    </>
  )
}
