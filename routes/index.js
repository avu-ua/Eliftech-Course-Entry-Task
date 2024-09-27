const express = require('express')
const router = express.Router()
const Event = require('../models/event')

// All Events Route
router.get('/', async (req, res) => {
    try {
        const events = await Event.find({})
        res.render('index', {
            events: events
        })
    } catch {
        // res.redirect('/')
        res.redirect('error')
    }
})

// Seed Events Page Route
router.get('/seed-a-new', (req, res) => {
    res.render('seed-a-new')
})

// Seed Events Action Route
router.post('/seed-a-new', async (req, res) => {
    const newEvents = populateEvents()
    try {
        for (const e of newEvents) {
            const event = new Event({
                title: e.title,
                description: e.description,
                date: e.date,
                organizer: e.organizer,
                participants: e.participants
            }) 
            await event.save()
        }
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('/error')
    }
})

function getRandomFutureDate() {
    const today = new Date()
    let futureDate = new Date(today)
    const randomDays = Math.floor(Math.random() * 365)
    futureDate.setDate(today.getDate() + randomDays)
    return futureDate
}

function populateEvents() {
    const events = []

    for (let i = 0; i < 20; i++) {
        const event = {
            title: `Title ${i + 1}`,
            description: `Description ${i + 1}`,
            date: getRandomFutureDate(),
            organizer: `Organizer ${i + 1}`,
            participants: []
        }
        events.push(event)
    }
    return events
}

module.exports = router