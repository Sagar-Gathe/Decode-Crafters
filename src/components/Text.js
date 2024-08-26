import React, { useState, useEffect } from 'react';


const Text = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const message = 'Decode Crafter Developers';

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setText(text + message[index]);
        setIndex(index + 1);
      }, 150); // Adjust the speed here
      return () => clearTimeout(timeout);
    }
  }, [text, index, message]);

  return (
    <div className="typing-animation">
      <h1>{text}</h1>
    </div>
  );
};

export default Text;