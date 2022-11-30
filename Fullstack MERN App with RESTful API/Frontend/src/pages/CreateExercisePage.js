import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName]       = useState('');
    const [reps, setReps]         = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add an exercise to the collection</h2>
            <p>This is the Create Exercise page. On this page, you can create a new exercise and add it to the collection.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What exercise are you adding?</legend>
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
                        value={reps}
                        placeholder="Number of Reps"
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

                    <label for="unit">Units</label>
                    <select name="unit" id="unit" required="required" onChange={e => setUnit(e.target.value)}>
                        <option value="" disabled selected hidden>Units of the exercise</option>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                    </select>


                    <label for="date">Date</label>
                    <input
                        required type="date"
                        placeholder="Date of the exercise"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <div for="submit">
                    <button
                        name="AddButton"
                        type="submit"
                        onClick={createExercise}
                        id="submit"
                    >Add</button> to the collection</div>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateExercisePage;