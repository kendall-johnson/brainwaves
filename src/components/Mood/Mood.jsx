import { useState } from "react";

export default function MoodDisplay() {
  const [mood, setMood] = useState("Happy");

  function handleEdit() {
    const newMood = prompt("Enter a new mood:");
    if (newMood) {
      setMood(newMood);
    }
  }

  function handleDelete() {
    const confirmed = window.confirm("Are you sure you want to delete your mood?");
    if (confirmed) {
      setMood("");
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Your Current Mood is:</h1>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-lg font-semibold mb-2 text-center">{mood}</h2>
        <div className="flex">
          <button className="mr-2 px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={handleEdit}>Edit Mood</button>
          <button className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800" onClick={handleDelete}>Delete Mood</button>
        </div>
      </div>
    </>
  );
}
