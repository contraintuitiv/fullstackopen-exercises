import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const anecdotesArray = [...anecdotes]
    let sortedAnecdotes = anecdotesArray.sort((a,b) => a.votes - b.votes > 0 ? -1 : 1 )
    const filter = useSelector(state => state.filter)

    if(filter!==''){
        sortedAnecdotes = sortedAnecdotes.filter(anecdote => anecdote.content.includes(filter) )

    }
    const dispatch = useDispatch()

    const voteHandler = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`voted for Anecdote "${anecdote.content}"`))
    }

    return (
        <div>
        {sortedAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => voteHandler(anecdote)}>vote</button>
              </div>
            </div>
        )}
        </div>
    )
}

export default AnecdoteList