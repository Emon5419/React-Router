import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
   const { friendId } = useParams();
   const [friend, setFriend] = useState({});
   useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setFriend(data));
   }, []);
   return (
      <div>
         <h1>This is Detail Of Bunddhu: {friendId}</h1>
         <h3>Name: {friend.name}</h3>
         <p>E-Mail: {friend.email}</p>
         <p>Wesite: {friend.website}</p>
         <p>City: {friend.address?.city}</p>
         <p>Lat: {friend.address?.geo?.lat}</p>

      </div>
   );
};

export default FriendDetail;