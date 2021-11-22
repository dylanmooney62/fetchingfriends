import React, { useState } from 'react';

import { useDropzone } from 'react-dropzone';
import { BiCamera } from 'react-icons/bi';

export const ImageUpload = ({ onImageDrop, error }) => {
  const [preview, setPreview] = useState(null);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    onDrop: ([img]) => {
      if (img) {
        setPreview(URL.createObjectURL(img));
        onImageDrop(img);
      }
    },
  });

  const getColor = () => {
    if (error) {
      return 'border-error';
    }
    if (preview) {
      return 'border-primary';
    }
    if (isDragAccept) {
      return 'border-primary';
    }
    if (isDragReject) {
      return 'border-error';
    }
    if (isDragActive) {
      return 'border-info';
    }
    return 'border-gray-300';
  };

  return (
    <div
      {...getRootProps()}
      className={`w-full bg-base-300 flex-1 h-96 flex items-center justify-center rounded-lg cursor-pointer border-4 border-dashed ${getColor()}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center relative w-full h-full">
        <BiCamera className="text-7xl mb-2 fill-current text-neutral" />
        {isDragActive ? (
          <p>Drop your dog here!</p>
        ) : (
          <p>Drag 'n' drop a photo of your dog here</p>
        )}
        {preview && (
          <img
            src={preview}
            className="w-full h-full rounded-lg object-cover object-center absolute"
            alt="user uploaded dog preview"
          />
        )}
      </div>
    </div>
  );
};
