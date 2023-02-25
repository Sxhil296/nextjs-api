import React, { useState } from 'react'

const index = () => {
    const [names, setNames] = useState([])
    const [name, setName] = useState('')

    const submitName = async () => {
        const response = await fetch('api/names', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const fetchNames = async () => {
        const response = await fetch('/api/names')
        const data = await response.json()
        setNames(data)
    }

  return (
    <div>
        <h1>List of Names</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='first name'/>
        <button onClick={submitName}>Submit Name</button>
        <button onClick={fetchNames}>Load Names</button>
        {names.map(name => {
            return (
                <div key={name.id}>
                    <li>{name.id} - {name.firstName} {name.lastName}</li>
                </div>
            )
        })}
    </div>
  )
}

export default index