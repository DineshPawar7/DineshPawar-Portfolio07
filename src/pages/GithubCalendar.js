import React from 'react';
import ContributionGraph from '@raulcanodev/react-github-dots';

const token=process.env.REACT_APP_GITHUB_TOKEN

export default function Portfolio() {
  console.log('GitHub Token:', token); 
  return (
    <div>
       <div className="projects-heading">
        <span className="projects-heading-main">Github</span>
        <span className="projects-heading-sub">Contributions</span>
      </div>
      <ContributionGraph
        username="DineshPawar7"
        token={token}
        theme="dark"
        cacheTime="8h"
      />
    </div>
  );
}
