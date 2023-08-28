import React, { useState } from 'react'
import styled from 'styled-components'
import Photo from '../Photo'
import ReactionButton from '../ReactionButton'
import Comments from '../Comments'
import ListComments from '../ListComments'
import styles from './styles.module.css'

const Posts = () => {
  const [likes, setLikes] = useState({})
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: 'https://placekitten.com/300/300',
      author: 'Mariana',
      comments: []
    },
    {
      id: 2,
      image: 'https://placekitten.com/301/301',
      author: 'Julian',
      comments: []
    },
    {
      id: 3,
      image: 'https://placekitten.com/302/302',
      author: 'Juancho',
      comments: []
    }
  ])

  const toggleLiked = (url) => {
    setLikes({
      ...likes,
      [url]: !likes[url]
    })
  }

  const PostWrapper = styled.div`
    border: 1px solid #e0e0e0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

  const createComment = (comment, id) => {
    const findPost = posts.find((post) => post.id === id)
    const filterPost = posts.filter((post) => post.id !== id)

    if (findPost) {
      findPost.comments.push(comment)
      setPosts([...filterPost, findPost])
    }
  }

  return (
    <div className={styles.listPosts}>
      {posts
        // Ordenar Array por id
        .sort((a, b) => a.id - b.id)
        // Listar elementos
        .map((post) => (
          <PostWrapper key={`post-${post.id}`}>
            <Photo src={post.image} />
            <ReactionButton
              isLiked={likes[post.image]}
              onClick={() => toggleLiked(post.image)}
            />

            <ListComments comments={post.comments} />

            <Comments idPost={post.id} createComment={createComment} />
          </PostWrapper>
        ))}
    </div>
  )
}

export default Posts
