import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault();
        
        props.createAnecdote(event.target.anecdote.value)

        props.setNotification(`new anecdote created`, 10)
 
        event.target.anecdote.value=""
      }
    

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
            </form>
        </div>
    )
}

export default connect( 
    null,
    { createAnecdote, setNotification }
)(AnecdoteForm)