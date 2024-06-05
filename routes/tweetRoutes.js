const express = require('express');
const { postTweet, getUserTimeline } = require('../controllers/tweetController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// @route    POST /api/tweets
router.post('/', authMiddleware, postTweet);

// @route    GET /api/users/:userId/timeline
router.get('/users/:userId/timeline', authMiddleware, getUserTimeline);

module.exports = router;