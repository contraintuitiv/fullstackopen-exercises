import { connect } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes
    const anecdotesArray = [...anecdotes]
    let sortedAnecdotes = anecdotesArray.sort((a,b) => a.votes - b.votes > 0 ? -1 : 1 )
    const filter = props.filter

    if(filter!==''){
        sortedAnecdotes = sortedAnecdotes.filter(anecdote => anecdote.content.includes(filter) )
    }

    const voteHandler = (anecdote) => {
        props.voteAnecdote(anecdote)
        props.setNotification(`voted for Anecdote "${anecdote.content}"`)
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList