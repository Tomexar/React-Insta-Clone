import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import styled from 'styled-components';

const CommentArea= styled.div`
    margin: 35px 0 0 20px;
    
`;

const Date = styled.div`
    font-size:10px;
`;

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment:'',
            date: props.date
            
        };
    }

    componentDidMount() {
        let id = this.props.postId;
        if (localStorage.getItem(id)){
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        }
        else {
            this.setComments();
        }
    }

    componentWillUnmount(){
        this.setComments();
    }

    setComments = () =>{
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };


    commentHandler = event =>{
        this.setState({comment: event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        let newComment = {text:this.state.comment, username:(localStorage.getItem('user'))};
        let comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment:''});
        
    }

    render(){
        return(
            <CommentArea>
                {this.state.comments.map((c,i) => <Comment key ={i} comment = {c}/>)}
                <Date>{this.state.date}</Date>
                <CommentInput 
                    comment = {this.state.comment}
                    submit = {this.handleSubmit}
                    handler = {this.commentHandler}   
                />
            </CommentArea>
        );

    }
}

export default CommentSection;
