import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
        <h1>API Routing</h1>
        <Link href="/comments"><p>Comments</p></Link>
        <Link href="/names"><p>Names</p></Link>
    </div>
  )
}

export default index