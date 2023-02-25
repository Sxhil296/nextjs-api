import { names } from '../../../data/names'

export default function handler(req, res) {
   if(req.method === 'GET') {
    res.status(200).json(names)
   } else if (req.method === 'POST') {
    const name = req.body.name
    const newName = {
        id: Date.now(),
        firstName : name,
        lastName : name
    }
    names.push(newName)
    res.status(201).json(newName)
   }
}