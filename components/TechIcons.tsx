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
  <svg
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="OutSystems"
  >
    <circle cx="48" cy="48" r="32" fill="#E83A2B" />
    <circle cx="48" cy="48" r="16" fill="#FFFFFF" />
  </svg>
);
