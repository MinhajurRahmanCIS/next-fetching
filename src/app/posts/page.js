import PostsCard from '@/components/Posts/PostsCard/PostsCard';
import { getPosts } from '@/services/postApi';
import React from 'react';



const postPages = async () => {
  const postData = await getPosts();
  return (
    <div className="px-10">
      <h6 className="text-2xl text-center font-bold py-10">All Posts</h6>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
      {
        postData.slice(0, 20)?.map((post, i) => 
        <PostsCard 
          key={i}
          post={post}
          />)
      }
      </div>
    </div>
  );
};

export default postPages;