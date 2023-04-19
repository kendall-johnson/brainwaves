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
    <div>
      <h2>Edit Mood</h2>
      <label>
        <span>Feeling:</span>
        <select value={feeling} onChange={handleFeelingChange}>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Neutral">Neutral</option>
          <option value="Mad">Mad</option>
        </select>
      </label>
      <label>
        <span>Emotions:</span>
        <div>
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
        </div>
      </label>
      <label>
        <span>Triggers:</span>
        <div>
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
    </div>
  </label>
  <label>
    <span>Reflection:</span>
    <textarea
      value={reflection}
      onChange={handleReflectionChange}
    ></textarea>
  </label>
  <button onClick={() => handleCancelEdit()}>Cancel</button>
  <button onClick={() => handleSaveEdit({ feeling, emotions, triggers, reflection })}>
    Save
  </button>
</div>
)}
