import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMood } from '../../utilities/moods-api';

export default function MoodTrackerForm({mood, setMood}) {
  const [step, setStep] = useState(1);
  const [feeling, setFeeling] = useState('');
  const [emotions, setEmotions] = useState([]);
  const [triggers, setTriggers] = useState([]);
  const [reflection, setReflection] = useState('');
  const navigate = useNavigate();

  const handleFeelingChange = (e) => {
    console.log(e.target.value)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMood = {
      feeling,
      emotions,
      triggers,
      reflection, 
    };
    console.log('newMood:', newMood);
    try {
      const response = await createMood(newMood);
      console.log('response:', response);
      console.log('Mood saved to database');
      setMood(newMood);
      localStorage.setItem('mood', JSON.stringify(newMood));
      navigate('/moods');
    } catch (error) {
      console.error(error);
    }
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="rounded-lg shadow-lg p-8 bg-yellow-200">
            <h2 className="text-3xl font-bold mb-4">What mood best fits your current mood?</h2>
            <div className="flex flex-col mb-4">
            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
            <input
              type="radio"
              name="feeling"
              value="Happy"
              checked={feeling === 'Happy'}
              onChange={handleFeelingChange}
              className="hidden"
            />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full bg-white dark:bg-gray-700">
                {feeling === 'Happy' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </span>
              <span>Happy</span>
            </div>
            </label>
            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
            <input
              type="radio"
              name="feeling"
              value="Sad"
              checked={feeling === 'Sad'}
              onChange={handleFeelingChange}
              className="hidden"
            />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full bg-white dark:bg-gray-700">
                {feeling === 'Sad' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </span>
              <span>Sad</span>
            </div>
            </label>
            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
            <input
              type="radio"
              name="feeling"
              value="Neutral"
              checked={feeling === 'Neutral'}
              onChange={handleFeelingChange}
              className="hidden"
            />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full bg-white dark:bg-gray-700">
                {feeling === 'Neutral' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </span>
              <span>Neutral</span>
            </div>
            </label>
            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
            <input
              type="radio"
              name="feeling"
              value="Mad"
              checked={feeling === 'Mad'}
              onChange={handleFeelingChange}
              className="hidden"
            />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full bg-white dark:bg-gray-700">
                {feeling === 'Mad' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </span>
              <span>Mad</span>
            </div>
            </label>
            <button
                className="px-4 py-2 bg-yellow-500 text-white rounded-md text-xl font-bold hover:bg-yellow-600"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </div>
        );
        case 2:
          return (
            <div className="rounded-lg shadow-lg p-8 bg-blue-200">
              <h2 className="text-3xl font-bold mb-4">Select the emotions that relate to your current mood:</h2>
              <div className="grid w-full gap-6 md:grid-cols-3">
              <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${emotions.includes('Joy') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Joy"
                name="emotion"
                checked={emotions.includes('Joy')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
              />
              Joy
              </label>
              <label className={`inline-flex items-center justify-between w-full p-5 text-black  bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${emotions.includes('Anger') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Anger"
                name="emotion"
                checked={emotions.includes('Anger')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
              />
              Anger
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${emotions.includes('Fear') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Fear"
                name="emotion"
                checked={emotions.includes('Fear')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
              />
              Fear
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black  bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${emotions.includes('Sadness') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Sadness"
                name="emotion"
                checked={emotions.includes('Sadness')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Sadness
            </label>
            </div>
            <div className='flex justify-center items-center'>
            <button
                className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md text-xl font-bold hover:bg-blue-600"
                onClick={() => setStep(3)}
              >
                Next
              </button>
            </div>
          </div>
        );
        case 3:
          return (
            <div className="rounded-lg shadow-lg p-8 bg-pink-200">
              <h2 className="text-3xl font-bold mb-4">
                You are doing great! Select the reasons below that are causing the way you are currently feeling.
              </h2>
              <div className="grid w-full gap-6 md:grid-cols-3">
              <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Family') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                    type="checkbox"
                    value="Family"
                    name="triggers"
                    checked={triggers.includes('Family')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  Family
                </label>
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Work') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                    type="checkbox"
                    value="Work"
                    name="triggers"
                    checked={triggers.includes('Work')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  Work
                </label>
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('School') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                   type="checkbox"
                   value="School"
                   name="triggers"
                    checked={triggers.includes('School')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  School
                </label>
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Social Media') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                    type="checkbox"
                    value="Social Media"
                    name="triggers"
                    checked={triggers.includes('Social Media')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  Social Media
                </label>
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Breakup') ? 'bg-blue-500 text-white' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                    type="checkbox"
                    value="Breakup"
                    name="triggers"
                    checked={triggers.includes('Breakup')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  Breakup
                </label>
                </div>
                <div className='flex justify-center items-center'>
                <button 
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => setStep(4)}
                >
                Next
                </button>
            </div>
          </div>
        );
        case 4:
  return (
    <div className="rounded-lg shadow-lg p-8 bg-green-200">
      <h2 className="text-3xl font-bold mb-4">Write your reflections based on the previous questions:</h2>
      <div className='flex justify-center'>
      <textarea
        value={reflection}
        onChange={handleReflectionChange}
        placeholder='Write some notes about your feelings here'
        className="border-2 border-gray-500 rounded-lg p-2 mb-4 text-lg text-gray-700 font-medium "
        style={{resize: "none", minHeight: "200px"}}
      />
      </div>
      <div className='flex justify-center'>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md text-xl font-bold hover:bg-green-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
      </div>
    </div>
  );

        default:
          return null;
      }
    };
    
    return <div className="flex justify-center items-center h-screen">{renderStep()}</div>;  
  }
    