import React from 'react';
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
import PostForm from './PostForm';

function NewPost() {
  // const dispatch = useDispatch();
  const history = useHistory();

  // Adds a new post and redirects to homepage
  function add({ title, description, body}) {
    // dispatchEvent(sendPostToAPI(title, description, body));
    history.push('/');
  }

  // Cancels and redirects to homepage
  function handleCancel() {
    history.push('/');
  }
  return (
    <>
      <h1>New Post</h1>
      <PostForm cancel={handleCancel} save={add}/>
    </>
  );
}

export default NewPost;