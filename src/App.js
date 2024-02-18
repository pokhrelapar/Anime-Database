
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");

	/*
	 * get the top anime by popularity form theJikan API
	 * https://docs.api.jikan.moe/#operation/getTopAnime
	
	*/
	const getTopAnime = async () => {
		const animeTop = await fetch(`https://api.jikan.moe/v4/top/anime`)
						.then(res => res.json());
						  
		//get top 15 anime by popularity				
		setTopAnime(animeTop.top.slice(0,15));


	}

	const searchHandler = (e) => {
		e.preventDefault();

		//console.log(search);

		fetchAnime(search)
	}

	// search for an input anime
	const fetchAnime  = async (searchQuery) => {
		const tempFetch = await fetch(`https://api.jikan.moe/v4/search/anime?q=${searchQuery}&order_by=title&sort=asc`)
								.then(res => res.json());

		console.log("Results");
		console.log(tempFetch.results);
		setAnimeList(tempFetch.results);

	}

	useEffect(()=> {
		getTopAnime();
		
		console.log("Top Anime");
		

	}, [])

	//check if the json fields are logged in 
	console.log(topAnime);



	return (
		<div className="App">
			
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent
					searchHandler = {searchHandler}
					search ={search}
					animeList= {animeList}
					setSearch = {setSearch}

				/>
			</div>
		</div>
	);
}

export default App;
