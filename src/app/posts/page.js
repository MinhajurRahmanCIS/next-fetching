import React from 'react';

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

const postPages = async () => {
  const postData = await getPosts();
  console.log(postData)
  return (
    <div className="h-screen">
      <h6>All Posts</h6>
    </div>
  );
};

  export default postPages;