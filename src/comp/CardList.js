import React from 'react';
import Card from './CardList';

const CardList = ({ notes }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap -mx-4">
        {notes.map((note) => (
          <Card key={note.noteId} note={note} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
