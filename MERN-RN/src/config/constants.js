import { Platform } from 'react-native';

const PORT = '5000';
const PATH = 'tweets';

//PLEASE ENTER IP ADDRESS OF YOUR SYSTEM
export const IP = '192.168.1.105';

const android = `http://${IP}:${PORT}/${PATH}`;

const ios = `http://localhost:${PORT}/${PATH}`;

export const SERVER_URL = Platform.select({
	ios,
	android
});

export const IMAGE_URL = 'https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867285_960_720.jpg';
