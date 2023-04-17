import { useState } from "react";
import { editMood, deleteMood } from "../../utilities/moods-api";

import MoodEditForm from "../MoodEditForm/MoodEditForm.";

export default function Mood({ mood, moods, setMoods, id }) {
  const [editing, setEditing] = useState(false);

  function handleEdit(newMood) {
    setEditing(false);
    if (newMood) {
      editMood(id, { mood: newMood })
        .then(updatedMood => {
          const updatedMoods = moods.map(mood => {
            if (mood._id === updatedMood._id) {
              return updatedMood;
            }
            return mood;
          });
          setMoods(updatedMoods);
        })
        .catch(error => console.log(error));
    }
  }

  function handleDelete() {
    const confirmed = window.confirm("Are you sure you want to delete your mood?");
    if (confirmed) {
      deleteMood(id)
        .then(() => setMoods([]))
        .catch(error => console.log(error));
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Your Current Mood is:</h1>
      {editing ? (
        <MoodEditForm onSubmit={handleEdit} mood={mood}/>
      ) : (
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-lg font-semibold mb-2 text-center">{mood}</h2>
          <div className="flex">
            <button className="mr-2 px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={() => setEditing(true)}>Edit Mood</button>
            <button className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800" onClick={handleDelete}>Delete Mood</button>
          </div>
        </div>
      )}
    </>
  );
}
