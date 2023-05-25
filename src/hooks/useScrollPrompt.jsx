import { useState } from 'react';

export default function useScrollPrompt() {
  const [id, setId] = useState(null);
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);

  const schedulePrompt = (e) => {
    if (id) {
      clearTimeout(id);
      setShowScrollPrompt(false);
    }
    const timeOutId = setTimeout(() => {
      setShowScrollPrompt(true);
    }, 10000);
    setId(timeOutId);
  };

  return { showScrollPrompt, schedulePrompt };
}
