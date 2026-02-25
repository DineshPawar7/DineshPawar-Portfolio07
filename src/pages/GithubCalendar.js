import React, { useState, useEffect } from 'react';
import ContributionGraph from '@raulcanodev/react-github-dots';

const GithubCalendar = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Try to get token from different possible sources
    const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
    
    console.log('GitHub Token available:', !!githubToken); // Don't log the actual token for security
    
    if (!githubToken) {
      setError('GitHub token not found. Please check your environment variables.');
    } else {
      setToken(githubToken);
    }
  }, []);

  if (error) {
    return (
      <div className="w-full py-10 px-4">
        <div className="projects-heading text-center">
          <span className="projects-heading-main block text-4xl md:text-6xl font-bold text-white">
            Github
          </span>
          <span className="projects-heading-sub block text-4xl md:text-6xl font-bold text-[var(--primary-color)]">
            Contributions
          </span>
        </div>
        <div className="text-center text-red-500 mt-8 p-4 bg-red-100/10 rounded-lg">
          <p>{error}</p>
          <p className="text-sm text-gray-400 mt-2">
            Make sure to add REACT_APP_GITHUB_TOKEN to your .env file
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10 px-4">
      <div className="projects-heading text-center mb-10">
        <span className="projects-heading-main block text-[clamp(2rem,8vw,75px)] font-bold text-white leading-tight">
          Github
        </span>
        <span className="projects-heading-sub block text-[clamp(2rem,8vw,75px)] font-bold text-[var(--primary-color)] leading-tight">
          Contributions
        </span>
      </div>

      {token ? (
        <div className="max-w-6xl mx-auto bg-[var(--card-bg-color)] p-6 rounded-2xl shadow-lg overflow-x-auto">
          <ContributionGraph
            username="DineshPawar7"
            token={token}
            theme="dark"
            cacheTime="8h"
            onError={(err) => {
              console.error('GitHub Graph Error:', err);
              setError('Failed to fetch GitHub contributions. Please check your token permissions.');
            }}
          />
        </div>
      ) : (
        <div className="text-center text-gray-400">
          Loading GitHub contributions...
        </div>
      )}
    </div>
  );
};

export default GithubCalendar;