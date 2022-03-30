import React, { useEffect, useState } from 'react';

const Posts = () => {
   const [post, setPost] = useState([]);
   useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      fetch(url)
         .then(res => res.json())
         .then(data => setPost(data));
   }, []);
   return (
      <div>
         <h2>Every Post FaceBook Ever Had: {post.length}</h2>
      </div>
   );
};

export default Posts;