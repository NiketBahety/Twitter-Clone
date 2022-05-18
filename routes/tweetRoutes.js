const express = require('express');
const tweetController = require('../controllers/tweetController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/getAllTweets', tweetController.getAllTweets);
router.post('/postTweet', authController.protect, tweetController.postTweet);
router.delete(
    '/deleteTweet/:id',
    authController.protect,
    tweetController.deleteTweet
);
router.patch('/retweet/:id', authController.protect, tweetController.retweet);
router.patch('/like/:id', authController.protect, tweetController.like);
router.post(
    '/addComment/:id',
    authController.protect,
    tweetController.addComment
);

module.exports = router;
