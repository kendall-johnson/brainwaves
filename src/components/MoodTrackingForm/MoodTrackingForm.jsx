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
      reflection, // fix typo in property name
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
          <div>
            <h2>What mood best fits your current mood?</h2>
            <label>
              <input
                type="radio"
                name="feeling"
                value="Happy"
                checked={feeling === 'Happy'}
                onChange={handleFeelingChange}
              />
              Happy
            </label>
            <label>
              <input
                type="radio"
                name="feeling"
                value="Sad"
                checked={feeling === 'Sad'}
                onChange={handleFeelingChange}
              />
              Sad
            </label>
            <label>
              <input
                type="radio"
                name="feeling"
                value="Neutral"
                checked={feeling === 'Neutral'}
                onChange={handleFeelingChange}
              />
              Neutral
            </label>
            <label>
              <input
                type="radio"
                name="feeling"
                value="Mad"
                checked={feeling === 'Mad'}
                onChange={handleFeelingChange}
              />
              Mad
            </label>
            <button onClick={() => setStep(2)}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Select the emotions that relate to your current mood:</h2>
            <label>
              <input
                type="checkbox"
                value="Joy"
                name="emotion"
                checked={emotions.includes('Joy')}
                onChange={handleEmotionChange}
              />
              Joy
            </label>
            <label>
              <input
                type="checkbox"
                value="Anger"
                name="emotion"
                checked={emotions.includes('Anger')}
                onChange={handleEmotionChange}
              />
              Anger
            </label>
            <label>
              <input
                type="checkbox"
                value="Fear"
                name="emotion"
                checked={emotions.includes('Fear')}
                onChange={handleEmotionChange}
              />
              Fear
            </label>
            <label>
              <input
                type="checkbox"
                value="Sadness"
                name="emotion"
                checked={emotions.includes('Sadness')}
                onChange={handleEmotionChange}
                />
                Sadness
            </label>
            <button onClick={() => setStep(3)}>Next</button>
          </div>
          );
          case 3:
            return (
              <div>
                <h2>You are doing great! Select the reasons below that are causing the way you are currently feeling.</h2>
                <label>
                  <input
                    type="checkbox"
                    value="Family"
                    name="triggers"
                    checked={triggers.includes('Family')}
                    onChange={handleTriggerChange}
                  />
                  Family
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Work"
                    name="triggers"
                    checked={triggers.includes('Work')}
                    onChange={handleTriggerChange}
                  />
                  Work
                </label>
                <label>
                  <input
                   type="checkbox"
                   value="School"
                   name="triggers"
                    checked={triggers.includes('School')}
                    onChange={handleTriggerChange}
                  />
                  School
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Social Media"
                    name="triggers"
                    checked={triggers.includes('Social Media')}
                    onChange={handleTriggerChange}
                  />
                  Social Media
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Breakup"
                    name="triggers"
                    checked={triggers.includes('Breakup')}
                    onChange={handleTriggerChange}
                  />
                  Breakup
                </label>
                <button onClick={() => setStep(4)}>Next</button>
              </div>
            );
            case 4:
              return (
                <div>
                  <h2>Write your reflections based on the previous questions:</h2>
                  <textarea value={reflection} onChange={handleReflectionChange} />
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              );
              default:
                return null;
    }
  };
  return <div>{renderStep()}</div>;
  }
    