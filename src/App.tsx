import React, {useEffect} from 'react';
import {View, PermissionsAndroid} from 'react-native';
import VideoPlayer from './components/VideoPlayer';

const requestStoragePermission = async () => {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
			{
				title: 'Access to storage required',
				message: 'Would you like to allow this access?',
				buttonNeutral: 'Ask Me Later',
				buttonNegative: 'Cancel',
				buttonPositive: 'OK',
			},
		);
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('You can use the app');
		} else {
			console.log('Storage permission denied');
		}
	} catch (err) {
		console.warn(err);
	}
};

const App = () => {
	useEffect(() => {
		requestStoragePermission();
	}, []);
	return (
		<View>
			<VideoPlayer />
		</View>
	);
};

export default App;
