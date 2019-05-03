import React from 'react';
import styled from 'styled-components';


const CommentContainer = styled.div`
  
   padding-bottom:10px;
    
`;

const CommentText = styled.span`
    padding-left:10px;
`;
const UserText = styled.span`
  
    font-weight:700;
`;

const Comment = props =>{
    return (
        <CommentContainer>
            <UserText>{props.comment.username}</UserText>
            <CommentText>{props.comment.text}</CommentText>         
        </CommentContainer>
    );

}

export default Comment;