import React, { useState } from 'react';

export default function MoodEditForm({ mood, onCancelEdit, onSaveEdit }) {
  const [feeling, setFeeling] = useState(mood.feeling);
  const [emotions, setEmotions] = useState(mood.emotions);
  const [triggers, setTriggers] = useState(mood.triggers);
  const [reflection, setReflection] = useState(mood.reflection);

  const handleFeelingChange = (e) => {
    setFeeling(e.target.value);
  };

  const handleEmotionChange = (e) => {
    const emotion = e.target.value;
    if (emotions.includes(emotion)) {
      setEmotions(emotions.filter((e) => e !== emotion));
    } else {
      setEmotions([...emotions, emotion]);
    }
  };

  const handleTriggerChange = (e) => {
    const trigger = e.target.value;
    if (triggers.includes(trigger)) {
      setTriggers(triggers.filter((t) => t !== trigger));
    } else {
      setTriggers([...triggers, trigger]);
    }
  };

  const handleReflectionChange = (e) => {
    setReflection(e.target.value);
  };

  const handleCancelEdit = () => {
    onCancelEdit();
  };

  const handleSaveEdit = () => {
    const editedMood = {
      feeling,
      emotions,
      triggers,
      reflection,
    };
    onSaveEdit(editedMood);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Edit Mood</h2>
  <div className="bg-white rounded shadow-lg p-8 w-full md:w-3/4 lg:w-1/2">
    <div className="mb-6">
      <label className="text-gray-900 font-bold mb-2 block">
        Feeling:
      </label>
      <div className="relative inline-flex">
  <svg
    className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
    viewBox="0 0 412 232"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 116C1.5 57.165 57.165 1.5 116 1.5H296C354.835 1.5 410.5 57.165 410.5 116V173.5"
      stroke="#E5E7EB"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <select
    className="w-full appearance-none rounded-lg py-3 pl-10 pr-3 text-gray-900 font-semibold focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-white border border-gray-400 hover:border-gray-500"
    value={feeling}
    onChange={handleFeelingChange}
  >
    <option value="Fantastic">Fantastic</option>
    <option value="Good">Good</option>
    <option value="Neutral">Neutral</option>
    <option value="Bad">Bad</option>
    <option value="Awful">Awful</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg
      className="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M14.35 7.56a1 1 0 0 0-1.41 0L10 10.3 6.06 7.56a1 1 0 1 0-1.1 1.64l4 3.86a1 1 0 0 0 1.1 0l4-3.86a1 1 0 0 0 .3-.7 1 1 0 0 0-.3-.7z"
      />
    </svg>
  </div>
</div>

    </div>
    <div className="mb-6">
      <label className="text-gray-900 font-bold mb-2 block">
        Emotions:
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Joy"
            name="emotion"
            checked={emotions.includes('Joy')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Joy</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Anger"
            name="emotion"
            checked={emotions.includes('Anger')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-red-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Anger</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Fear"
            name="emotion"
            checked={emotions.includes('Fear')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-yellow-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Fear</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Sadness"
            name="emotion"
            checked={emotions.includes('Sadness')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Sadness</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Nervous"
            name="emotion"
            checked={emotions.includes('Nervous')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Nervous</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Calm"
            name="emotion"
            checked={emotions.includes('Calm')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Calm</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Tired"
            name="emotion"
            checked={emotions.includes('Tired')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Tired</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Loved"
            name="emotion"
            checked={emotions.includes('Loved')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Loved</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Distant"
            name="emotion"
            checked={emotions.includes('Distant')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Distant</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Regretful"
            name="emotion"
            checked={emotions.includes('Regretful')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Regretful</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Embarrassed"
            name="emotion"
            checked={emotions.includes('Embarrassed')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Embarrassed</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Trusted"
            name="emotion"
            checked={emotions.includes('Trusted')}
            onChange={handleEmotionChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Trusted</span>
        </label>

      </div>
    </div>
    <div className="mb-6">
      <label className="text-gray-900 font-bold mb-2 block">
        Triggers:
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Family"
            name="triggers"
            checked={triggers.includes('Family')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-red-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Family</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Work"
            name="triggers"
            checked={triggers.includes('Work')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-purple-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Work</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="School"
            name="triggers"
            checked={triggers.includes('School')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-900 font-medium">School</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Social Media"
            name="triggers"
            checked={triggers.includes('Social Media')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="ml-2 text-gray-900 font-medium">
            Social Media
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Breakup"
            name="triggers"
            checked={triggers.includes('Breakup')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-yellow-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Breakup</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Friends"
            name="triggers"
            checked={triggers.includes('Friends')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-yellow-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Friends</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Self Esteem"
            name="triggers"
            checked={triggers.includes('Self Esteem')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-yellow-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Self Esteem</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Bullying"
            name="triggers"
            checked={triggers.includes('Bullying')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-yellow-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Bullying</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Weather"
            name="triggers"
            checked={triggers.includes('Weather')}
            onChange={handleTriggerChange}
            className="form-checkbox h-5 w-5 text-yellow-500"
          />
          <span className="ml-2 text-gray-900 font-medium">Weather</span>
        </label>
      </div>
    </div>
    <div className="mb-6">
      <label className="text-gray-900 font-bold mb-2 block">
        Reflection:
      </label>
      <textarea
        className="block w-full rounded-lg bg-gray-100 border-transparent text-gray-900 border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
        value={reflection}
        onChange={handleReflectionChange}
      />
    </div>
    <div className="flex justify-end">
      <button
        className="bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-all duration-200"
        onClick={() => handleCancelEdit()}
      >
        Cancel
      </button>
  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full ml-4 transition-all duration-200" onClick={() => handleSaveEdit({ feeling, emotions, triggers, reflection })}>
    Save
  </button>
</div>
</div>
</div>

)}
