import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 25
    }
]

router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const userIwthId = {...user, id: userId};

    users.push(userWithId);
    
    res.send(`User with the name ${users.firstName} added to the Database.`);
})

router.delete('/', (req, res) => {
    console.log("This user is deleted.")
})

export default router;