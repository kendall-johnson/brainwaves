import React, { useState, useEffect } from 'react';

export default function RelaxPage() {
  const [randomTip, setRandomTip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
     {isLoading ? (
        <>
        <div className="flex items-center justify-center min-h-screen">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-3xl font-bold mb-4">Loading your safe space!</h1>
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin h-12 w-12 text-primary-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm6 9.546A8 8 0 014 12H0c0 4.418 3.582 8 8 8v-2.454zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-2zm-6-9.546A8 8 0 0120 12h4c0-4.427-3.607-8.009-8.009-7.974v2.428z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
        </>
      ) : (
        <>
      <h1 className="text-3xl font-bold text-center my-8">Relax Your Brainwaves</h1>
      <p className="text-center text-gray-700 text-lg mb-8">Take a moment to calm your nerves and re-focus. Everything is alright, you will be okay.</p>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gnZImHvA0ME"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="max-w-xl mx-auto p-4 mt-8 rounded-lg shadow-lg bg-gray-100">
        <h2 className="text-lg font-bold mb-4">Tip to Reduce Stress:</h2>
        <p className="text-base">{randomTip}</p>
      </div>
    </>
      )}
      </>
  );
}
