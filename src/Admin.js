import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './Components/admin/posts';
import PostLoadingComponent from './Components/Posts/postLoading';
import axiosInstance from './axios';
import './Admin.css'


function Admin() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App1">
			<h1>Expeditions</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default Admin;