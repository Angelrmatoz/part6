import {useSelector, useDispatch} from 'react-redux'
import {voteAnecdote} from "../reducers/anecdoteReducer.js";
import { setNotificationWithTimeout } from "../reducers/notificationReducer.js";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes);
    const dispatch = useDispatch();
    const filterText = useSelector(state => state.filter || '');

    const filteredAnecdotes = [...anecdotes]
        .filter(anecdote =>
            (anecdote.content || '').toLowerCase().includes(filterText.toLowerCase())
        )
        .sort((a, b) => b.votes - a.votes);

    const handleVote = (anecdote) => {
        dispatch(voteAnecdote(anecdote.id));
        dispatch(setNotificationWithTimeout(`Votaste por: "${anecdote.content}"`, 5));
    };

    return (
        <div>
            {filteredAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>
                            vote
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList;