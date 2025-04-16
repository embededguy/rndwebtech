'use client';

import { useState, useRef, useEffect } from 'react';

export default function TagInput({ name = 'tags', initialTags = [], placeholder = 'Add tags...' }) {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState('');
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const inputRef = useRef(null);

  const onChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = inputValue.trim();

    if ((key === ',' || key === 'Enter') && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags(prevTags => [...prevTags, trimmedInput]);
      setInputValue('');
    }

    if (key === 'Backspace' && !inputValue.length && tags.length && isKeyReleased) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      setTags(tagsCopy);
      setInputValue(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index) => {
    setTags(prevTags => prevTags.filter((tag, i) => i !== index));
  };

  useEffect(() => {
    // Focus the input when component mounts
    inputRef.current?.focus();
  }, []);

  return (
    <div className="tag-input-container">
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <span className="tag-text">{tag}</span>
            <button
              type="button"
              className="tag-close"
              onClick={() => deleteTag(index)}
              aria-label={`Remove tag ${tag}`}
            >
              &times;
            </button>
          </div>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
          className="form-control tag-input-field"
        />
      </div>
      <input
        type="hidden"
        name={name}
        value={JSON.stringify(tags)}
      />
      <style jsx>{`
        .tag-input-container {
          width: 100%;
        }
        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          border: 1px solid #6c757d;
          border-radius: 4px;
        }
        .tag-item {
          display: flex;
          align-items: center;
          background: #3a4055;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 14px;
        }
        .tag-text {
          margin-right: 4px;
        }
        .tag-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          padding: 0;
        }
        .tag-input-field {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          min-width: 100px;
        }
        .tag-input-field::placeholder {
          color: #aaa;
        }
      `}</style>
    </div>
  );
}