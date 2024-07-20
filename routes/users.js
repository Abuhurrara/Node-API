import express from 'express';

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
    console.log(users);
    const user = req.body;
    users.push(user);

    res.send(`User with the name ${users.firstName} added to the Database.`);
})

router.post('/', (req, res) => {
    const user = req.body
    console.log(req.body);
    res.send('POST REQUEST REACHED');
})

router.delete('/', (req, res) => {
    console.log("This user is deleted.")
})

export default router;