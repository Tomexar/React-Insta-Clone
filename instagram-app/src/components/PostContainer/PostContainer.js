import React from 'react';

function PostContainer(props) {
    return(
        <>
            {props.dummy.map(dummy =>(
                <div key = {dummy.id} className = 'postContainer'>
                    <div className = 'postHead'>
                        <img src = {dummy.thumbnailUrl} alt = 'user-icon'/>
                        <h2>{dummy.username}</h2>
                    </div>
                    <div className ='post-pic'>
                        <img src = {dummy.imageUrl} alt = 'the-post' />
                    </div>
                    <div className = 'icons'>
                        <p>&#9829;</p>
                    </div>
                    <div className = 'likes'>
                        <p>{dummy.likes}</p>
                    </div>
                    <div className = 'comments'>
                        {/* <p>{dummy.comments}</p> */}
                    </div>
                    <div className ='timestamp'>
                        <p>{dummy.timestamp}</p>
                    </div>
                    <form>
                        <input 
                            placeholder = 'Add Comment'
                            name = 'commentBox'
                        />
                    </form>               
                </div>
            ))}
        </>
    );
}


export default PostContainer;