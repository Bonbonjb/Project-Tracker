// src/components/ui/alert/Alert.js
import React from 'react';

const Alert = ({ children, type = "info", className = "" }) => {
  const baseStyle = "p-4 rounded-md flex items-center";
  const typeStyles = {
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    success: "bg-green-100 text-green-800",
  };

  return (
    <div className={`${baseStyle} ${typeStyles[type]} ${className}`}>
      {children}
    </div>
  );
};

export default Alert;
