'use client'

import { useState } from 'react'

export default function ImageUploader() {
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const preview = URL.createObjectURL(file)
    setPreviewUrl(preview)
    // onSelect(file) // optional, send file back to parent if needed
  }

  return (
    <>
      <label htmlFor="blog-image" className="form-label" style={{color:"white"}}>Select Blog Image</label>
      <input
        type="file"
        accept="image/*"
        id="blog-image"
        name="image"
        className="form-control col-md-4 bg-dark text-white border-secondary"
        onChange={handleImageChange}
        style={{ maxWidth: '340px' }}
      />
      {previewUrl && (
        <div className="mt-3 row justify-content-center">
          <p className="mb-2" style={{color:"white"}}>Image Preview:</p>
          <img
            src={previewUrl}
            alt="Selected Preview"
            className="img-fluid rounded"
            style={{ maxHeight: '400px',width:"auto", borderRadius: '10px' }}
          />
        </div>
      )}
    </>
  )
}
