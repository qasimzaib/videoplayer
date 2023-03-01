import {useEffect, useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import RNFS from 'react-native-fs';
import Video from 'react-native-video';

const folderPath = RNFS.DownloadDirectoryPath + '/salaar';

const fp = folderPath;

const VideoPlayer = () => {
	const [files, setFiles] = useState([]);

	const makeDirectory = async folderPath => {
		await RNFS.mkdir(folderPath); //create a new folder on folderPath
	};

	const getFileList = async (path: any) => {
		const reader = await RNFS.readdir(path);
		const files = [];
		reader.map(item => {
			files.push(fp + '/' + item);
		});
		setFiles(files);
	};

	useEffect(() => {
		makeDirectory(folderPath);
		getFileList(folderPath);
	}, []);

	return (
		<SafeAreaView>
			{files.length > 0 && (
				<Video
					source={{
						uri: files[2],
					}}
					controls={true}
					repeat={true}
					paused={false}
					style={{width: 300, height: 300}}
				/>
			)}
		</SafeAreaView>
	);
};

export default VideoPlayer;
