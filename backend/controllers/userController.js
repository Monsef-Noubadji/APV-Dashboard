// const { resourceLimits } = require('worker_threads');
const APV = require('../models/user')
const mongoose = require('mongoose');

const home = async (req, res) => {
    const users = await APV.find({}).sort({ createdAt: -1 })
    res.status(200).json(users);

}

const user = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ "error": "Not a valid Query" });
    }
    try {
        const apvist = await APV.findById(id)
        if (!apvist) return res.status(404).json({ "error": "No apvist found :)" });
        res.status(302).json({ apvist });
    }
    catch (err) {
        console.log(err);
    }
}

const addUser = async (req, res) => {
    const user = req.body;
    try {
        const apvist = await APV.create(user);
        apvist.save()
            .then(
                () => {
                    res.status(201).json({
                        'message': `${apvist.lastname} has been added!`
                    });
                    console.log(apvist.lastname + ' has been added!')
                }
            )
    }
    catch (err) {
        res.status(400).json({ "error": err.message });
    }
}

const editUser = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ "error": "Not a valid Query" });
    }
    try {
        const newApvist = await APV.findByIdAndUpdate(id, {
            ...req.body
        }, { new: true, runValidators: true })
            .then(result => {
                res.status(200).json({ newApvist: result });
            })
    }
    catch (err) {
        res.status(400).json({ 'error': err.message })
    }

}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ "error": "Not a valid Query" });
        }
        const user = await APV.findById(id);
        if (!user || user === '') return res.status(404).json({ "error": "No user found :)" })
        await APV.findByIdAndRemove(user.id)
            .then(result => {
                res.status(302).json({ "message": "User Deleted" })
            })
    }
    catch (err) {
        res.status(400).json({ "error": err.message });
    }

}
module.exports = {
    home,
    user,
    addUser,
    editUser,
    deleteUser
};