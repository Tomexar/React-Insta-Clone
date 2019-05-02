import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';


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
            <div>
                {this.state.comments.map((c,i) => <Comment key ={i} comment = {c}/>)}
                {this.state.date}
                <CommentInput 
                    comment = {this.state.comment}
                    submit = {this.handleSubmit}
                    handler = {this.commentHandler}   
                />
            </div>
        );

    }
}

export default CommentSection;
