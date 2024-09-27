const express = require('express')
const router = express.Router()
const Event = require('../models/event')

const { faker } = require('@faker-js/faker');

// All Events Route
router.get('/', async (req, res) => {
    try {
        const events = await Event.find({})
        res.render('index', {
            events: events
        })
    } catch (err) {
        console.log(err)
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
        await Event.deleteMany({});
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

// Helper function generating a random event title
const getEventTitle = () => {
    const eventTypes = ['Conference', 'Seminar', 'Course', 'Presentation', 'Workshop', 'Lecture', 'Hackathon'];
    const eventSubjects = ['JavaScript', 'NodeJS', 'Cyber Security', 'Python', 'Design Patterns', 'Kotlin', 'Computer Science']
    const eventTitle = [eventTypes[Math.floor(Math.random() * eventTypes.length)], 
                        eventSubjects[Math.floor(Math.random() * eventSubjects.length)]]
    return eventTitle.join(' on ')
};

// Helper function generating a random number of up to 15 dummy participants
function generateParticipants() {
    const participantsNumber = Math.floor(Math.random() * 15)
    const participants = []
    for (let i = 0; i < participantsNumber; i++) {
        const firstName = faker.person.firstName()
        const source = ['Social media', 'Friends', 'Found myself']
        const participant = {
            fullName: faker.person.fullName({firstName: firstName}),
            email: faker.internet.email({firstName: firstName}),
            birthDate: faker.date.birthdate(),
            source: source[Math.floor(Math.random() * source.length)]
        }
        participants.push(participant)
    }
    return participants
}

// Helper function generating random number of dummy Events
function populateEvents() {
    const eventsNumber = Math.floor(Math.random() * 51) + 25
    const events = []

    for (let i = 0; i < eventsNumber; i++) {
        const event = {
            title: getEventTitle(),
            // description: faker.lorem.lines({ min: 1, max: 2 }),
            description: faker.lorem.paragraph(),
            date: faker.date.future(),
            organizer: faker.company.name(),
            participants: generateParticipants()
        }
        events.push(event)
    }
    return events
}

module.exports = router