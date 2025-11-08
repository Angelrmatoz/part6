import axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes';

export const getAnecdotes = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const createAnecdote = async (content) => {
  const anecdote = { content, votes: 0 };
  const response = await axios.post(baseURL, anecdote);
  return response.data;
}

export const voteAnecdote = async (anecdote) => {
  const response = await axios.put(`${baseURL}/${anecdote.id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  return response.data;
}