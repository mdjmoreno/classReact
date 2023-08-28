import React from 'react'
import styles from './styles.module.css'

const ListComments = ({ comments = [] }) => {
  return (
    <ul className={styles.listComments}>
      {comments.map((comment, key) => (
        <li key={`comment-${key}`} className={styles.listCommentsItem}>
          {comment}
        </li>
      ))}
    </ul>
  )
}

export default ListComments
