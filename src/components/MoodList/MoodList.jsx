import { Link } from 'react-router-dom';
import Mood from '../../components/Mood/Mood'

export default function MoodPage({ mood, setMood }) {
  return (
    <>
      {mood ? (
        <Mood mood={mood} setMood={setMood} />
      ) : (
        <div className="mt-4 flex justify-center">
        <Link
          to="/moods/new"
          className="px-4 py-2 flex justify-center items-center text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Add a Mood
        </Link>
      </div>
      )}
    </>
  );
}
