import React, { useEffect, useState } from 'react';
import Posts from './Components/Posts';
import PostLoadingComponent from './Components/Loading';

function Connect() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		expeditions: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((expeditions) => {
				setAppState({ loading: false, expeditions: expeditions });
			});
	}, [setAppState]);
	return (
		<div className="App-8">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} expeditions={appState.expeditions} />
		</div>
	);
}
export default Connect;