'use client'

import { useState } from 'react'

export default function ImageUploader({ onSelect }) {
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const preview = URL.createObjectURL(file)
    setPreviewUrl(preview)
    onSelect(file) // optional, send file back to parent if needed
  }

  return (
    <div className="mb-4 text-white row m-2">
      <label htmlFor="blog-image" className="form-label">Select Blog Image</label>
      <input
        type="file"
        accept="image/*"
        id="blog-image"
        className="form-control bg-dark text-white border-secondary"
        onChange={handleImageChange}
        style={{ maxWidth: '300px' }}
      />
      {previewUrl && (
        <div className="mt-3 row justify-content-center">
          <p className="mb-2">Image Preview:</p>
          <img
            src={previewUrl}
            alt="Selected Preview"
            className="img-fluid rounded"
            style={{ maxHeight: '400px',width:"auto" }}
          />
        </div>
      )}
    </div>
  )
}
