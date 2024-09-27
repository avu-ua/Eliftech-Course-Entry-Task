const express = require('express')
const router = express.Router()
const Event = require('../models/event')

// Registration Form Route
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        res.render('register', {
            event: event,
            name: '',
            email: '',
            dob: ''

        })
    } catch (err) {
        console.error(err)
        res.redirect('/error')
    }
})

// Registration Action Route
router.post('/', async (req, res) => {
    const newParticipant = {
        fullName: req.body.name,
        email: req.body.email,
        birthDate: new Date(req.body.dob),
        source: req.body.source
    }
    let event
    try{
        event = await Event.findById(req.body.event)
        event.participants.push(newParticipant)
        await event.save()
        res.render('participants', {
            event: event
        })
    } catch (err) {
        console.error(err)
        if (event != null) {
            res.render('register', {
                event: event,
                name: '',
                email: '',
                dob: ''
            })
        } else {
            res.redirect('/error')
        }
    }
})



module.exports = router