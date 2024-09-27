// const express = require('express')
// const router = express.Router()
// const Participant = require('../models/participant')
// // const Event = require('../models/event') // TODO

// // All Participants Route
// router.get('/', async (req, res) => {
//     let searchOptions = {}
//     if (req.query.name != null && req.query.name !== '') {
//         searchOptions.name = new RegExp(req.query.name, 'i')
//     }
//     try {
//         const participants = await Participant.find(searchOptions)
//         res.render('participants/index', {
//             participants: participants,
//             searchOptions: req.query
//         })
//     } catch {
//         res.redirect('/')
//     }
// })

// // New Participant Route
// router.get('/new', (req, res) => {
//     res.render('participants/new', { participant: new Participant() })
// })

// // Create Participant Route
// router.post('/', async (req, res) => {
//     const participant = new Participant({
//         name: req.body.name,
//         email: req.body.email,
//         birthDate: req.body.dob
//     })
//     try {
//         const newParticipant = await participant.save()
//         // res.redirect(`participants/${newParticipant.id}`)
//         res.redirect('participants')
//     } catch {
//         res.render('participants/new', {
//             participant: participant,
//             errorMessage: 'Error registering Participant'
//         })
//     }
// })

// // router.get('/:id', async (req, res) => {
// //     try {
// //         const participant = await Participant.findById(req.params.id)
// //         const events = await Event.find({ participant: participant.id }).limit(6).exec()
// //         res.render('participants/show', {
// //             participant: participant,
// //             eventsByParticipant: events
// //         })
// //     } catch {
// //         res.redirect('/')
// //     }
// // })

// // router.get('/:id/edit', async (req, res) => {
// //     try {
// //         const participant = await Participant.findById(req.params.id)
// //         res.render('participants/edit', { participant: participant })
// //     } catch {
// //         res.redirect('/participants')
// //     }
// // })

// // router.put('/:id', async (req, res) => {
// //     let participant
// //     try {
// //         participant = await Participant.findById(req.params.id)
// //         participant.name = req.body.name
// //         await participant.save()
// //         res.redirect(`/participants/${participant.id}`)
// //     } catch {
// //         if (participant == null) {
// //             res.redirect('/')
// //         } else {
// //             res.render('participants/edit', {
// //                 participant: participant,
// //                 errorMessage: 'Error updating Participant'
// //             })
// //         }
// //     }
// // })

// // router.delete('/:id', async (req, res) => {
// //     let participant
// //     try {
// //         participant = await Participant.findById(req.params.id)
// //         await participant.remove()
// //         res.redirect('/participants')
// //     } catch {
// //         if (participant == null) {
// //             res.redirect('/')
// //         } else {
// //             res.redirect(`/participants/${participant.id}`)
// //         }
// //     }
// // })

// module.exports = router