const express = require('express')
const router = express.Router()
const Event = require('../models/event')

// View Event Router
router.get('/:id', async (req, res) => {
    try{
        const event = await Event.findById(req.params.id)
        res.render('participants', {
            event: event
        })
    } catch (err) {
        console.error(err)
        res.redirect('/')
    }
})

module.exports = router