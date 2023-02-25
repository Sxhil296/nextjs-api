import React, { useState } from 'react'

const index = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    // get
    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    // post
    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        
    }

    //delete
    const deleteComment = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`, {
          method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
      }

  return (
    <div>
        <h1>Comments Page</h1>
        <input type="text" name="" id="" value={comment} onChange={e => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit Comment</button>
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map(comment => {
            return (
                <div key={comment.id}>
                    <li>{comment.id} - {comment.text}</li>
                    <button onClick={() => deleteComment(comment.id)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default index