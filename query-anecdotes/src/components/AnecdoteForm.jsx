import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { useNotification } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const [, dispatch] = useNotification()

  const mutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      dispatch({ type: 'SHOW', payload: `Nueva anécdota añadida: "${data.content}"` })
      setTimeout(() => dispatch({ type: 'HIDE' }), 5000)
    },
    onError: () => {
      dispatch({ type: 'SHOW', payload: 'La anécdota debe tener al menos 5 caracteres' })
      setTimeout(() => dispatch({ type: 'HIDE' }), 5000)
    },
  })

  const onCreate = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    mutation.mutate(e)
    e.target.anecdote.value = ''
  }

  return (
    <form onSubmit={onCreate}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm