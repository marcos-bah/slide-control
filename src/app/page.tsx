"use client"

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Home: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Lógica para lidar com os arquivos
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center text-black">Slide Control</h1>
        <div 
          {...getRootProps()} 
          className={`border-2 border-dashed p-6 rounded-lg text-black text-center ${isDragActive ? 'border-blue-500' : 'border-gray-300'}`}
        >
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Solte os arquivos aqui ...</p> :
              <p>Arraste e solte os slides aqui, ou clique para selecionar os arquivos</p>
          }
        </div>
        <button className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Start
        </button>
      </div>
    </main>
  );
}

export default Home;
