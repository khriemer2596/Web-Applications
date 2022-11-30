import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit an exercise in the collection</h2>
            <p>This is the Edit Exercise page. On this page, you can make changes to existing exercises.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What would you like to change?</legend>
                    <label for="name">Exercise Name</label>
                    <input
                        required type="text"
                        placeholder="Name of the exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <div for="reps">Number of Reps</div>
                    <input
                        required type="number"
                        min="0"
                        placeholder="Number of Reps"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <div for="weight">Weight</div>
                    <input
                        required type="number"
                        min="0"
                        placeholder="Weight of the exercise"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Units (Current unit is stored)</label>
                    <select name="unit" id="unit" onChange={e => setUnit(e.target.value)}>
                        <option value="" disabled selected hidden>Update unit if desired</option>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                         
                    </select>

                    <label for="date">Date (Current date is stored; update if desired)</label>
                    <input
                        type="date"
                        required
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />    

                    <div for="submit">
                    <button
                        name="SaveButton"
                        onClick={editExercise}
                        id="submit"
                    >Save</button> updates to the collection</div>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;