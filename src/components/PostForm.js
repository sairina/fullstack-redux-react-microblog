import React from 'react';

function PostForm() {
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

export default PostForm;