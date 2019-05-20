import Tweet from '../models/Tweet';

export const createTweet = (req, res) => {
	const { user, tweet } = req.body;
	const newTweet = new Tweet({ user, tweet });

	newTweet
		.save()
		.then(() => Tweet.find())
		.then(val => res.json(val));
};

export const viewTweet = (req, res) => {
	Tweet.find().then(() => {
		Tweet.find().then(val => res.json(val));
	});
};

export const deleteTweet = (req, res) => {
	const { id } = req.body;
	Tweet.findByIdAndRemove(id).then(val => {
		Tweet.find().then(val => res.json(val));
	});
};

export const updateTweet = async (req, res) => {

	const id = req.params.id; 
	console.log(id)

	console.log(req.body.tweet)
	try { 
		const tweet = await Tweet.findByIdAndUpdate(id,{tweet: req.body.tweet}, {new: true})
		
		console.log(tweet)
		if(!tweet){
			res.status(404).send({ success: false, error: 'Cannot find tweet' })
		}


		res.send(tweet)

	} catch(err){
		console.log(err)
	}
}
