const Property = require('../models/Property');
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// @desc Get all property 
// @route GET /property
// @access Private

// user
// location
// item     
// serial_no
// date_acquired
// date_counted
// property_num
// acquisition_cost
// asset_classification
// person_accountable
const getAllProperties = asyncHandler(async (req, res) => {
    // Get all property from MongoDB
    const property = await Property.find().lean()

    // If no property 
    if (!property?.length) {
        return res.status(400).json({ message: 'No properties found' })
    }

    // Add username to each property before sending the response 
    const propertiesWithUser = await Promise.all(property.map(async (property) => {
        const user = await User.findById(property.user).lean().exec()
        return { ...property, username: user.username }
    }))

    res.json(propertiesWithUser)
})

// @desc Create new property
// @route POST /property
// @access Private
const createNewProperty = asyncHandler(async (req, res) => {
    // const { user, user, location, item, serial_no, date_acquired, date_counted, property_num, acquisition_cost, asset_classification, person_accountable}= req.body
    const {user, location, item, serial_no, date_acquired, date_counted, property_num, acquisition_cost, asset_classification, person_accountable}= req.body

    // Confirm data
    if(!user || !location || !item || !serial_no || !date_acquired || !date_counted || !property_num || !acquisition_cost || !asset_classification || !person_accountable){
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Property.findOne({ property_num }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate property' })
    }

    // Create and store the new user 
    const property = await Property.create({ user, location, item, serial_no, date_acquired, date_counted, property_num, acquisition_cost, asset_classification, person_accountable })

    if (property) { // Created 
        return res.status(201).json({ message: 'New property created' })
    } else {
        return res.status(400).json({ message: 'Invalid property data received' })
    }

})

// @desc Update a property
// @route PATCH /property
// @access Private
const updateProperty = asyncHandler(async (req, res) => {
    const { id, location, item, serial_no, date_acquired, date_counted, property_num, acquisition_cost, asset_classification, person_accountable } = req.body

    // Confirm data
    if (!id ||!location || !item || !serial_no || !date_acquired || !date_counted || !property_num || !acquisition_cost || !asset_classification || !person_accountable) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm property exists to update
    const property = await Property.findById(id).exec()

    if (!property) {
        return res.status(400).json({ message: 'Property not found' })
    }

    // Check for duplicate title
    const duplicate = await Property.findOne({ serial_no }).lean().exec()

    // Allow renaming of the original property 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate property title' })
    }

    // property.location = location
    // property.article = article
    // property.serial_no = serial_no
    // property.date_acquired = date_acquired
    // property.date_counted = date_counted
    // property.property_num = property_num
    // property.acquisition_cost = acquisition_cost
    // property.remarks = remarks
    // property.property_officer = property_officer
    // property.coa_representative = coa_representative

    property.location = location
    property.item = item 
    property.serial_no = serial_no
    property.date_acquired = date_acquired
    property.date_counted = date_counted
    property.property_num = property_num
    property.acquisition_cost = acquisition_cost
    property.asset_classification = asset_classification
    property.person_accountable = person_accountable


    const updatedProperty = await property.save()

    res.json(`'${updatedProperty.property_num}' updated`)
})

// @desc Delete a property
// @route DELETE /property
// @access Private
const deleteProperty = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Property ID required' })
    }

    // Confirm property exists to delete 
    const property = await Property.findById(id).exec()

    if (!property) {
        return res.status(400).json({ message: 'Property not found' })
    }

    const result = await property.deleteOne()

    const reply = `Property '${result.property_num}' with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllProperties,
    createNewProperty,
    updateProperty,
    deleteProperty
}