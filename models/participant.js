const mongoose = require('mongoose')
// const Event = require('./event')

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }
})

// participantSchema.pre('remove', function(next) {
//     Event.find({ participant: this.id }, (err, events) => {
//         if (err) {
//             next(err)
//         } else if (events.length > 0) {
//             next(new Error('This participant is registered for (a) certain event(s)'))
//         } else {
//             next()
//         }
//     })
// })

module.exports = mongoose.model('Participant', participantSchema)