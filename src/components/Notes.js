import React, { useContext } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AlertContext } from '../context/alert/alertContext';

export const Notes = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);
  const handleRemove = (id) => {
    alert.show('The note was removed!', 'success');
    onRemove(id);
  };

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition
          key={note.id}
          classNames={'note'}
          timeout={500}
        >
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handleRemove(note.id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
