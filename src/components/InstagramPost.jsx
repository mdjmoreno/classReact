import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Photo from "./Photo";
import ReactionButton from "./ReactionButton";

const InstagramPost = () => {
    const [photos, setPhotos] = useState([]);
  const [likes, setLikes] = useState({});

  const PostWrapper = styled.div`
    border: 1px solid #e0e0e0;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
  `;

  useEffect(() => {
    
      const urls = [
        "https://placekitten.com/300/300",
        "https://placekitten.com/301/301",
        "https://placekitten.com/302/302",
      ];
      setPhotos(urls);
    

  }, []);

 
  const toggleLiked = (url) => {
    setLikes({
      ...likes,
      [url]: !likes[url],
    });
  };

  

  return (
    <div>
     {photos.map(photo =>(
        <PostWrapper>
            <Photo src={photo} />
            <ReactionButton isLiked={likes[photo]} onClick={()=>toggleLiked(photo)}/>
        </PostWrapper>
     )

     )}
    </div>
  );
};

export default InstagramPost;
