// components/MarkdownEditor.tsx

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Ad() {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleCopy = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
      } catch (err) {
        alert('Failed to copy text: ' + err);
      }
    } else {
      alert('Clipboard not supported');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <textarea
        value={text}
        onChange={handleChange}
        style={{ width: '50%', height: '300px' }}
        placeholder="Write Markdown here..."
      />
      <div style={{ width: '50%', border: '1px solid black', padding: '10px' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </div>
      <button onClick={handleCopy} style={{ marginTop: '10px' }}>
        Copy to Clipboard
      </button>
    </div>
  );
}
