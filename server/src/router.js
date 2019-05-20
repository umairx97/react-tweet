import { Router } from 'express';
import {
	createTweet,
	viewTweet,
	deleteTweet,
	updateTweet
} from './controller/tweet_controller';

const router = new Router();


router
	.post('/tweets', createTweet)
	.get('/tweets', viewTweet)
	.delete('/tweets', deleteTweet)
	.patch('/tweets/:id', updateTweet)

export default router;
