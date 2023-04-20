import { useState, useEffect } from "react";
import { editMood, deleteMood } from "../../utilities/moods-api";
import { index as fetchMoods } from '../../utilities/moods-api';

import MoodEditForm from "../MoodEditForm/MoodEditForm.";

export default function Mood({ mood, setMood }) {
  const [editing, setEditing] = useState(false);

  function handleCancelEdit() {
    setEditing(false);
  }

  function handleSaveEdit(newMood) {
    editMood(mood._id, newMood)
      .then(updatedMood => {
        setMood(updatedMood);
        setEditing(false);
      })
      .catch(error => console.log(error));
  }

  function handleDelete() {
    const confirmed = window.confirm("Are you sure you want to delete your mood?");
    if (confirmed) {
      deleteMood(mood._id)
        .then(() => setMood(null))
        .catch(error => console.log(error));
    }
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
      {editing ? (
        <MoodEditForm
          mood={mood}
          onCancelEdit={handleCancelEdit}
          onSaveEdit={handleSaveEdit}
        />
      ) : (
        <>
          <h1 className="text-2xl text-center font-bold mb-4">Your Current Mood is:</h1>
          {mood ? (
            <div className="flex flex-col items-center mb-4">
              <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg overflow-hidden shadow-lg bg-gray-200">
                <div className="bg-gradient-to-br from-green-400 to-blue-500 px-4 py-2">
                  <h2 className="text-4xl font-semibold mb-2 text-center text-white">
                    {mood.feeling}
                  </h2>
                </div>
                <div className="p-4">
                  {mood.emotions && mood.emotions.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Emotions:</h3>
                      <div className="flex flex-wrap">
                        {mood.emotions.map((emotion) => (
                          <div
                            key={emotion}
                            className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full mr-2 mb-2"
                          >
                            {emotion}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {mood.triggers && mood.triggers.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Triggers:</h3>
                      <div className="flex flex-wrap">
                        {mood.triggers.map((trigger) => (
                          <div
                            key={trigger}
                            className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full mr-2 mb-2"
                          >
                            {trigger}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {mood.reflection && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Reflection:</h3>
                <p className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full mr-2 mb-2">{mood.reflection}</p>
              </div>
            )}
                  <div className="flex justify-between">
                    <button
                      className="px-4 py-2 rounded-md text-white font-semibold bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
                      onClick={() => setEditing(true)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 rounded-md text-white font-semibold bg-red-600 hover:bg-red-500 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-lg font-semibold mb-2 text-center">
                No mood set yet.
              </h2>
            </div>
          )}
        </>
      )}
    </>
  );
          }