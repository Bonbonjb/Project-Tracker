// src/components/ui/alert/AlertDescription.js
import React from 'react';

const AlertDescription = ({ description, className = "" }) => {
  return (
    <p className={`text-sm ${className}`}>
      {description}
    </p>
  );
};

export default AlertDescription;
