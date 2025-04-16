'use client'

import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './quill-dark.css';

export default function QuillBasic() {
  const editorRef = useRef(null);
  const quillInstance = useRef(null); // To store the Quill instance

  useEffect(() => {
    if (!editorRef.current || quillInstance.current) return; // Prevent re-initialization

    quillInstance.current = new Quill(editorRef.current, {
      theme: 'snow',
      placeholder: 'Start typing your content...',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
      },
    });

    return () => {
      if (quillInstance.current) {
        // Proper cleanup
        const quill = quillInstance.current;
        quill?.off?.();
        quillInstance.current = null;
        
        // Remove any existing toolbar
        const toolbar = editorRef.current?.querySelector('.ql-toolbar');
        if (toolbar) {
          toolbar.remove();
        }
      }
    };
  }, []);

  return (
    <div>
      <div ref={editorRef} style={{ height: '300px' }} />
    </div>
  );
}