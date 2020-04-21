import React, { useState } from 'react';

function PostForm({ post, cancel, save }) {

  const [postData, setPostData] = useState({
    title: post.title,
    description: post.description,
    body: post.body
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPostData(data => ({
      ...data,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    save(postData);
  }
  return (
    <form className="mb-4" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="editform-title">Title:</label>
        <input onChange={handleChange}
          id="editform-title"
          name="title"
          className="form-control"
          value={postData.title} />
      </div>

      <div className="form-group">
        <label htmlFor="editform-description">Description:</label>
        <input onChange={handleChange}
          id="editform-description"
          name="description"
          className="form-control"
          value={postData.description} />
      </div>

      <div className="form-group">
        <label htmlFor="editform-body">Body:</label>
        <textarea onChange={handleChange}
          id="editform-body"
          name="body"
          className="form-control"
          rows={10}
          value={postData.body} />
      </div>

      <button className="btn btn-primary mr-2">Save</button>
      <button onClick={cancel} className="btn btn-secondary">Cancel</button>
    </form>
  );
}

PostForm.defaultProps = {
  post: { title: "", description: "", body: "" },
};

export default PostForm;