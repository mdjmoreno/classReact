import React, { useState } from 'react'
import styles from './styles.module.css'

const Comments = ({ createComment, idPost }) => {
  const [commentValue, setCommentValue] = useState('')

  // Validación nativa de campos por medio de form
  const onSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    createComment(commentValue, idPost)
  }

  return (
    <form onSubmit={onSubmit} className={styles.formGroup}>
      <input
        className={styles.formInput}
        type="text"
        name="comment"
        placeholder="Deja tu comentario"
        required
        onInput={(e) => setCommentValue(e.target.value)}
      />
      <button type="submit" className={styles.formButton}>
        Comentar!
      </button>
    </form>
  )
}

export default Comments
