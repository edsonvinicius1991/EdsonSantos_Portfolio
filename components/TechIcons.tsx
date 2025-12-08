import React from 'react';

export const PowerAppsIcon = ({ className = "" }: { className?: string }) => (
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Powerapps-logo.svg"
    alt="Power Apps"
    className={className}
  />
);

export const PowerAutomateIcon = ({ className = "" }: { className?: string }) => (
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Power_Automate.svg"
    alt="Power Automate"
    className={className}
  />
);

export const PowerPlatformIcon = ({ className = "" }: { className?: string }) => (
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Power_Platform_logo.svg"
    alt="Microsoft Power Platform"
    className={className}
  />
);

export const OutSystemsIcon = ({ className = "" }: { className?: string }) => (
  <img src="https://cdn.simpleicons.org/outsystems" alt="OutSystems" className={className} />
);
