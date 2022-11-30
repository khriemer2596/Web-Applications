import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function ExerciseRow({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td><span className = "DeleteButton"><MdDeleteForever onClick={() => onDelete(exercise._id)} /></span></td>
            <td><span className = "EditButton"><MdEdit onClick={() => onEdit(exercise)} /></span></td>
        </tr>
    );
}

export default ExerciseRow;