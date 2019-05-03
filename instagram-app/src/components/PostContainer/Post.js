import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';


const Postcontainer = styled.div`
    border: 1px solid lightgrey;
    width:640px;
    margin: 0 auto;
    text-align:left;
    margin-bottom:70px;
    
`;
const Posthead = styled.div`
    display:flex;
    height:65px;
    align-items:center;
    margin: 0 20px;
`;

const Icon = styled.img`
    height:30px;
    border-radius:50%;
`;

const ProfileText = styled.h2`
    padding:0 10px;
    font-size:16px;

`;

const IconContainer = styled.div`
    padding:15px 0;
`;

const Iconimg = styled.i`
    transform: scaleX(-1);  
    width:50px;
`;

const Likes = styled.div`
    padding: 0 19px;
    margin:-25px 0;
`;

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
            <Postcontainer>
                <Posthead>
                    <Icon src={this.props.dummy.thumbnailUrl} alt='user-icon' />
                    <ProfileText>{this.props.dummy.username}</ProfileText>
                </Posthead>
                <div className='post-pic'>
                    <img src={this.props.dummy.imageUrl} alt='the-post' />
                </div>
                <IconContainer>
                    <Iconimg className="far fa-heart fa-2x" onClick={this.likeCounter}></Iconimg>
                    <Iconimg className="far fa-comment fa-2x" />
                </IconContainer>
                <Likes><p>{this.state.likes} likes</p></Likes>
                <CommentSection
                    comments={this.props.dummy.comments}
                    date={this.props.dummy.timestamp}
                    postId={this.props.dummy.imageUrl}
                />
            </Postcontainer>
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