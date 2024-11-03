// utils/calculateDeadlineStatus.js
export const calculateDeadlineStatus = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const daysUntil = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  
    if (daysUntil < 0) return "overdue";
    if (daysUntil <= 7) return "urgent";
    if (daysUntil <= 14) return "approaching";
    return "on-track";
  };
  