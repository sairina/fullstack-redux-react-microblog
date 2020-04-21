import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';

function Post(props) {
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  //Handles toggling editing on or off
  function toggleEdit() {
    setIsEditing(edit => !edit);
  }

  //Handles deleting post
  function deletePost() {
    history.push('/');
  }
  return (
    <>
      {isEditing
        ? <PostForm />
        : <PostDisplay 
                  toggleEdit={toggleEdit} 
                  delete={deletePost}/>}
      <section className="Post-comments mb-4">
        <h4>Comments</h4>
        {/* <CommentList comments={post.comments}
          deleteComment={deleteComment} />
        <CommentForm submitCommentForm={addComment} /> */}
      </section>
    </>
  );
}

export default Post;