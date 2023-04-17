import { Link } from 'react-router-dom';
import Mood from '../../components/Mood/Mood'

export default function MoodPage({moods, setMoods}) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Your Moods</h1>
      {moods.length === 0 ? (
        <p>You have no moods yet.</p>
      ) : (
        moods.map(mood => (
          <Mood
            key={mood._id}
            mood={mood.mood}
            id={mood._id}
            moods={moods}
            setMoods={setMoods}
          />
        ))
      )}
      <div className="mt-4">
        <Link
          to="/moods/new"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Add a Mood
        </Link>
      </div>
    </>
  );
}