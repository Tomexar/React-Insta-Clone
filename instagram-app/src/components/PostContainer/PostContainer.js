import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './../CommentSection/CommentSection';



class PostContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: props.dummy.likes
        };
    }
    render() {
        return (
            <>
                <div key={this.props.dummy.id} className='postContainer'>
                    <div className='postHead'>
                        <img src={this.props.dummy.thumbnailUrl} alt='user-icon' />
                        <h2>{this.props.dummy.username}</h2>
                    </div>
                    <div className='post-pic'>
                        <img src={this.props.dummy.imageUrl} alt='the-post' />
                    </div>
                    <div className='icons'>
                        <i class="far fa-heart fa-3x"></i>
                        <i className="far fa-comment fa-3x" />
                    </div>
                    <div className='likes'>
                        <p>{this.props.dummy.likes}</p>
                    </div>
                    <CommentSection
                        comments={this.props.dummy.comments}
                        date={this.props.dummy.timestamp}
                    />
                </div>

            </>
        );
    }
}

PostContainer.propTypes = {
    dummy: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            thumbnailUrl: PropTypes.string,
            username: PropTypes.string,
            imageUrl: PropTypes.imageUrl
        })
    ).isRequired
};


export default PostContainer;