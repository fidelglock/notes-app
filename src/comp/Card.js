import React from 'react';

const Card = ({ note }) => {
  const { noteId, title, body } = note;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{body}</p>
          <p className="text-gray-400 mt-2">Note ID: {noteId}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
