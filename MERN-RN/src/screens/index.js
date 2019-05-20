import { createStackNavigator } from 'react-navigation';

import NewsFeed from './NewsFeed';
import AddTweet from './AddTweet';
import UpdateTweet from './updateTweet'

const Navigator = createStackNavigator(
	{
		newsFeed: NewsFeed,
		addTweet: AddTweet,
		updateTweet: UpdateTweet
	},
	{
		initialRouteName: 'newsFeed',
		backBehavior: 'initialRoute'
	}
);

export default Navigator;
