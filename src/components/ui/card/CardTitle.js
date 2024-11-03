// src/components/ui/card/CardTitle.js
import React from 'react';

const CardTitle = ({ title, className = "" }) => {
  return (
    <h3 className={`text-lg font-semibold ${className}`}>
      {title}
    </h3>
  );
};

export default CardTitle;
