import React, { useState } from 'react';

export type FeedbackData = {
  message: string;
  email?: string;
};

export type FeedbackFormProps = {
  onSend: (feedback: FeedbackData) => void;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  styles?: React.CSSProperties;
};

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  onSend,
  placeholder = 'Enter your feedback...',
  buttonText = 'Send Feedback',
  className,
  styles,
}) => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend({ message, email });
      setMessage('');
      setEmail('');
    }
  };

  return (
    <div className={`flex flex-col gap-4 p-4 ${className}`} style={styles}>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />
      <input
        type="email"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={handleSend}
      >
        {buttonText}
      </button>
    </div>
  );
};
