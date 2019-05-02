import React from 'react';
import styled from 'styled-components';

const FormBar = styled.form`
border-top:1px solid lightgrey;
margin-top:15px;
width:600px;
`;


const CommentBar = styled.input`
    outline: 0;
    border:0;
    height:55px;
`;


function CommentInput(props) {
    return(
        <FormBar onSubmit = {props.submit}>
            <CommentBar type = 'text' placeholder = 'Add Comment' value = {props.comment} onChange = {props.handler}/>
        </FormBar>
    )
}

export default CommentInput;