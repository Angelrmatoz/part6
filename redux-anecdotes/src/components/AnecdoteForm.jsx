import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createAnecdote} from "../reducers/anecdoteReducer";
import { setNotificationWithTimeout } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        if (!content.trim()) return;

        dispatch(createAnecdote(content.trim()));
        dispatch(setNotificationWithTimeout(`Nueva anécdota creada: "${content.trim()}"`, 5));
        setContent('');
    }

    const style = {
        marginTop: 20
    }

    return (
        <form onSubmit={handleSubmit} style={style}>
            <input
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Escribe una anécdota"
            />
            <button type="submit">Crear</button>
        </form>
    );
}

export default AnecdoteForm;