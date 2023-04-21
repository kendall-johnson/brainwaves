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
          <div className="rounded-lg shadow-lg p-8 bg-gray-200">
            <h2 className="text-3xl font-bold mb-4">What mood best fits your current mood?</h2>
            <div className="flex flex-col mb-4">
            <label className="inline-flex items-center justify-between w-full p-5 text-xl font-bold text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-blue-500 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
            <input
              type="radio"
              name="feeling"
              value="Fantastic"
              checked={feeling === 'Fantastic'}
              onChange={handleFeelingChange}
              className="hidden"
            />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full bg-white dark:bg-gray-700">
                {feeling === 'Fantastic' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </span>
              <span>Fantastic</span>
            </div>
            </label>
            <label className="inline-flex items-center justify-between w-full p-5 text-xl font-bold text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-blue-300 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
            <input
              type="radio"
              name="feeling"
              value="Good"
              checked={feeling === 'Good'}
              onChange={handleFeelingChange}
              className="hidden"
            />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full bg-white dark:bg-gray-700">
                {feeling === 'Good' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </span>
              <span>Good</span>
            </div>
            </label>
            <label className="inline-flex items-center justify-between w-full p-5 text-xl font-bold text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
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
            <label className="inline-flex items-center justify-between w-full p-5 text-xl font-bold text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-red-300 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
            <input
              type="radio"
              name="feeling"
              value="Bad"
              checked={feeling === 'Bad'}
              onChange={handleFeelingChange}
              className="hidden"
            />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full bg-white dark:bg-gray-700">
                {feeling === 'Bad' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </span>
              <span>Bad</span>
            </div>
            </label>
            <label className="inline-flex items-center justify-between w-full p-5 text-xl font-bold text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-red-500 dark:bg-gray-800 dark:hover:bg-gray-700 my-2">
            <input
              type="radio"
              name="feeling"
              value="Awful"
              checked={feeling === 'Awful'}
              onChange={handleFeelingChange}
              className="hidden"
            />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full bg-white dark:bg-gray-700">
                {feeling === 'Awful' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </span>
              <span>Awful</span>
            </div>
            </label>
            <button
                className="px-4 py-2 mt-2 bg-yellow-500 text-black rounded-md text-xl font-bold hover:bg-yellow-600"
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
              <h2 className="text-3xl font-bold mb-4">Select the emotions that relate to your current mood: </h2>
              <div className="grid w-full gap-6 md:grid-cols-3">
              <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-blue-400 dark:border-blue-300 ${emotions.includes('Joy') ? 'bg-blue-500 text-black' : 'hover:text-blue-400 dark:text-blue-300 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
              <label className={`inline-flex items-center justify-between w-full p-5 text-black  bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-red-400 dark:border-red-400 ${emotions.includes('Anger') ? 'bg-blue-500 text-black' : 'hover:text-red-400 dark:text-red-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-yellow-400 dark:border-yellow-400 ${emotions.includes('Fear') ? 'bg-blue-500 text-black' : 'hover:text-yellow-400 dark:text-yellow-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-red-400 dark:border-red-400 ${emotions.includes('Sadness') ? 'bg-blue-500 text-black' : 'hover:text-red-400 dark:text-red-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-yellow-400 dark:border-yellow-400 ${emotions.includes('Nervous') ? 'bg-blue-500 text-black' : 'hover:text-yellow-400 dark:text-yellow-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Nervous"
                name="emotion"
                checked={emotions.includes('Nervous')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Nervous
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-blue-400 dark:border-blue-300 ${emotions.includes('Calm') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-blue-300 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Calm"
                name="emotion"
                checked={emotions.includes('Calm')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Calm
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-yellow-400 dark:border-yellow-400 ${emotions.includes('Tired') ? 'bg-blue-500 text-black' : 'hover:text-yellow-400 dark:text-yellow-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Tired"
                name="emotion"
                checked={emotions.includes('Tired')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Tired
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-green-400 dark:border-green-400 ${emotions.includes('Loved') ? 'bg-blue-500 text-black' : 'hover:text-green-400 dark:text-green-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Loved"
                name="emotion"
                checked={emotions.includes('Loved')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Loved
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-red-400 dark:border-red-400 ${emotions.includes('Distant') ? 'bg-blue-500 text-black' : 'hover:text-red-400 dark:text-red-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Distant"
                name="emotion"
                checked={emotions.includes('Distant')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Distant
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-red-400 dark:border-red-400 ${emotions.includes('Regretful') ? 'bg-blue-500 text-black' : 'hover:text-red-400 dark:text-red-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Regretful"
                name="emotion"
                checked={emotions.includes('Regretful')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Regretful
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-yellow-400 dark:border-yellow-400 ${emotions.includes('Embarrassed') ? 'bg-blue-500 text-black' : 'hover:text-yellow-400 dark:text-yellow-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Embarrassed"
                name="emotion"
                checked={emotions.includes('Embarrassed')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Embarrassed
            </label>
            <label className={`inline-flex items-center justify-between w-full p-5 text-black bg-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-green-400 dark:border-green-400 ${emotions.includes('Trusted') ? 'bg-blue-500 text-black' : 'hover:text-green-400 dark:text-green-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                type="checkbox"
                value="Trusted"
                name="emotion"
                checked={emotions.includes('Trusted')}
                onChange={handleEmotionChange}
                className="mr-2 hidden peer"
                />
                Trusted
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
              <h2 className="text-3xl font-bold mb-4 text-center">
                You're feelings are valid! What is currently making you feel this way?
              </h2>
              <p className="text-center text-gray-700 text-md mb-8">Take a second to think about anything that is acting as a trigger and select the option below. Deep breaths we know this can be difficult, you are not alone.</p>
              <div className="grid w-full gap-6 md:grid-cols-3">
              <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Family') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Work') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('School') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Social Media') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Breakup') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
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
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Friends') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                    type="checkbox"
                    value="Friends"
                    name="triggers"
                    checked={triggers.includes('Friends')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  Friends
                </label>
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Self Esteem') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                    type="checkbox"
                    value="Self Esteem"
                    name="triggers"
                    checked={triggers.includes('Self Esteem')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  Self Esteem
                </label>
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Bullying') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                    type="checkbox"
                    value="Bullying"
                    name="triggers"
                    checked={triggers.includes('Bullying')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  Bullying
                </label>
                <label className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${triggers.includes('Weather') ? 'bg-blue-500 text-black' : 'hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'}`}> 
              <input
                    type="checkbox"
                    value="Weather"
                    name="triggers"
                    checked={triggers.includes('Weather')}
                    onChange={handleTriggerChange}
                    className="mr-2 hidden peer"
                  />
                  Weather
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
      <h2 className="text-3xl font-bold mb-4">Take a moment to reflection on the previous questions:</h2>
      <p className="text-center text-gray-700 text-lg mb-8">Write some notes down you would like to save for later in the space provided below.</p>
      <div className='flex justify-center'>
      <textarea
        value={reflection}
        onChange={handleReflectionChange}
        placeholder='Imperfection is perfection...'
        className="border-2 min-w-fit border-gray-500 rounded-lg p-2 mb-4 text-lg text-gray-700 font-medium "
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
    