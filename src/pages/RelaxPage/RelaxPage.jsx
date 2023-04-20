import React, { useState, useEffect } from 'react';

export default function RelaxPage() {
  const [randomTip, setRandomTip] = useState(null);

  useEffect(() => {
    const tips = [
      'Take deep breaths and focus on your breathing',
      'Take a break and go for a walk outside',
      'Listen to calming music',
      'Write in a journal',
      'Take a break from social media',
      'Do some light stretching',
      'Spend time with friends or loved ones',
      'Avoid caffeine, alcohol, and other stimulants',
      'Meditate for a few minutes',
      'Try a new hobby or activity',
      'Get enough sleep and establish a consistent sleep schedule',
      'Set realistic goals and prioritize tasks',
      'Practice self-care and take time for yourself'
    ];

    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Relax Your Brainwaves</h1>
      <p className="text-center text-gray-700 text-lg mb-8">Take a moment to calm your nerves and re-focus. Everything is alright, you will be okay.</p>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gnZImHvA0ME"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="max-w-xl mx-auto p-4 mt-8 rounded-lg shadow-lg bg-gray-100">
        <h2 className="text-lg font-bold mb-4">Tip to Reduce Stress:</h2>
        <p className="text-base">{randomTip}</p>
      </div>
    </>
  );
}
