const express = require("express");
const {deleteEvent, updateEvent, createEvent, fetchEvent, fetchEvents}= require('../controllers/eventControllers');

const router = express.Router();

router.route('/').post(createEvent)
router.route('/').get(fetchEvents)

router.route('/:id/deleteEvent').delete(deleteEvent)


router.route('/:id/show').get(fetchEvent)

router.route('/:id/updateEvent').put(updateEvent)


module.exports = router;