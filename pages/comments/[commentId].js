import React from 'react'
import { comments } from '../../data/comments'

const commentId = ({comment}) => {
  return (
    <div>
        <h1>
            {comment.id} - {comment.text}
        </h1>
    </div>
  )
}

export default commentId

export  async function getStaticPaths() {
    return {
        paths : [
            {params: {commentId : '1'}},
            {params: {commentId : '2'}},
            {params: {commentId : '3'}},
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const {commentId} = params
    
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    console.log(comment)

    return {
        props: {
            comment,
        },
    }
}