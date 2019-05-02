import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';



class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: props.dummy.likes
        };
    }
    likeCounter = () => {
        this.setState((prevState, props) => {
            return {
                likes: prevState.likes + 1
            }
        })

    }
    render() {
        return (
            <div className='post'>
                <div className='postHead'>
                    <img src={this.props.dummy.thumbnailUrl} alt='user-icon' />
                    <h2>{this.props.dummy.username}</h2>
                </div>
                <div className='post-pic'>
                    <img src={this.props.dummy.imageUrl} alt='the-post' />
                </div>
                <div className='icons'>
                    <i class="far fa-heart fa-3x" onClick={this.likeCounter}></i>
                    <i className="far fa-comment fa-3x" />
                </div>
                <div className='likes'><p>{this.state.likes}</p></div>
                <CommentSection
                    comments={this.props.dummy.comments}
                    date={this.props.dummy.timestamp}
                    postId={this.props.dummy.imageUrl}
                />
            </div>
        );
    }
}

Post.propTypes = {
    dummy: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            thumbnailUrl: PropTypes.string,
            username: PropTypes.string,
            imageUrl: PropTypes.imageUrl
        })
    ).isRequired
};


export default Post;