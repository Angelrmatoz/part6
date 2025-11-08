import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes } from './requests.js'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { voteAnecdote } from './requests.js'
import { useNotification } from './NotificationContext'

const App = () => {
  const queryClient = useQueryClient()
  const [, dispatch] = useNotification()
  const voteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  })

  const { data: anecdotes, isLoading, isError } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>anecdote service no esta disponible debido a problemas con el servidor en localhost</div>
  }

  const handleVote = (anecdote) => {
    voteMutation.mutate(anecdote, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
        // Buscar la anécdota más votada después de votar
        const updatedAnecdotes = anecdotes.map(a =>
          a.id === anecdote.id ? { ...a, votes: a.votes + 1 } : a
        )
        const mostVoted = updatedAnecdotes.reduce((max, a) => a.votes > max.votes ? a : max, updatedAnecdotes[0])
        dispatch({ type: 'SHOW', payload: `La anécdota más votada es: "${mostVoted.content}" con ${mostVoted.votes} votos` })
        setTimeout(() => dispatch({ type: 'HIDE' }), 5000)
      }
    })
  }

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App