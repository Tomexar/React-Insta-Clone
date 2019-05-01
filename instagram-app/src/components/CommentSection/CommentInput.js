import React from 'react';

function CommentInput(props) {
    return(
        <form onSubmit = {props.submit}>
            <input type = 'text' placeholder = 'Add Comment' value = {props.comment} onChange = {props.handler}/>
        </form>
    )
}

export default CommentInput;