const express = require('express');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/blogController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getPosts);
router.post('/', authenticate, createPost);
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);

module.exports = router;
    