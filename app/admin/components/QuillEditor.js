'use client'

import { useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import './quill-dark.css'

export default function QuillBasic() {
  const editorRef = useRef(null)
  const quillInstance = useRef(null)

  useEffect(() => {
    if (!editorRef.current || quillInstance.current) return

    const quill = new Quill(editorRef.current, {
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
    })

    // Set dark mode styles    
    quillInstance.current = quill

    // Update hidden input every 300ms
    const interval = setInterval(() => {
      const hiddenInput = document.getElementById('contentx')
      if (hiddenInput) {
        hiddenInput.value = quill.root.innerHTML
      }
    }, 300)

    return () => {
      clearInterval(interval)
      quillInstance.current = null
    }
  }, [])

  return (
    <div>
      <div ref={editorRef} style={{ minHeight: '300px' }} />
      <input type="hidden" id="contentx" name="content" />
    </div>
  )
}