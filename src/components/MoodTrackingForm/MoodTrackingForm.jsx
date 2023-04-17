import React from 'react'

export default function MoodTrackingForm() {
    function handleSubmit() {

    }
  
  return (
    <>
    <div className="py-4">
   <form onSubmit={handleSubmit}>
     <label className="block mb-2 font-bold text-gray-700">Which choice best describes your current mood?</label>
     <div className="inline-block relative w-full">
       <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
         <option value="happy">Happy</option>
         <option value="sad">Sad</option>
         <option value="mad">Mad</option>
         <option value="neutral">Neutral</option>
       </select>
       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
         <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"/></svg>
       </div>
     </div>
     <button type="submit" className="mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
   Set Mood
 </button>
   </form>
 </div>
 </>
  )
}
