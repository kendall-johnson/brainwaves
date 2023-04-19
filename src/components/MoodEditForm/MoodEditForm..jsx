import React, { useState } from 'react';
import { editMood } from '../../utilities/moods-api';
import { useNavigate } from 'react-router-dom';

export default function MoodEditForm({ mood, setMoods, onSubmit }) {
  const [editedMood, setEditedMood] = useState({ mood: mood.mood });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const id = mood._id;
    editMood(id, editedMood).then(() => {
      const updatedMoods = moods.map(m => m._id === id ? editedMood : m);
      setMoods(updatedMoods);
      navigate('/moods');
      onSubmit(editedMood.mood); // Add this line to call the onSubmit prop
    }).catch(error => console.log(error));
  }
  
  function handleChange(event) {
    const { name, value } = event.target;
    setEditedMood({ ...editedMood, [name]: value });
  }

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-bold text-gray-700">Which choice best describes your current mood?</label>
        <div className="inline-block relative w-full">
          <select name="mood" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={editedMood.mood} onChange={handleChange}>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Mad">Mad</option>
            <option value="Neutral">Neutral</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"/></svg>
          </div>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Update Mood
        </button>
      </form>
    </div>
  );
}
