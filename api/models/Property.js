const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose)
const propertySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    location: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    serial_no: {
        type: String,
        required: true
    },
    date_acquired: {
        type: String,
        default: Date.now,
    },
    date_counted: {
        type: Array,
        default: [],
    },
    property_num: {
        type: String,
        required: true
    },
    acquisition_cost: {
        type: String,
        required: true
    },
    asset_classification: {
        type: String,
        required: true
    },
    person_accountable: {
        type: String,
        required: true
    },

})
propertySchema.plugin(AutoIncrement, {
    inc_field: 'property',
    id: 'propertyNums',
    start_seq: 1
})
module.exports = mongoose.model('Property', propertySchema);