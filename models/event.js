const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    organizer: {
        type: String, 
        required: true 
    },
    participants: [{
        fullName: {
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
        }, 
        source: { 
            type: String, 
            enum: ['Social media', 'Friends', 'Found myself'],
            required: true 
        } 
    }]
});

module.exports = mongoose.model('Event', eventSchema)
