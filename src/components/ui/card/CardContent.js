// src/components/ui/card/CardContent.js
import React from 'react';

const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`mt-2 ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;
