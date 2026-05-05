import { useState } from 'react';
import { games } from '../data/games';

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");

	const filteredAndSortedGames = games
		.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
		.sort((a, b) => {
			if (sortOrder === "asc") return a.price - b.price;
			return b.price - a.price;
		});

	return (
		<div className="page">
			<div className="hero">
				<h1 className="page-title">Games List</h1>
				<p className="subtitle">
					.Search by title and sort by price to keep your game list easy and simple
				</p>
			</div>

			<div className="controls">
				<select onChange={(e) => setSortOrder(e.target.value)} className="select">
					<option value="asc">Price: Low to High</option>
					<option value="desc">Price: High to Low</option>
				</select>

				<input
					type="text"
					placeholder="Search for a game..."
					onChange={(e) => setSearchTerm(e.target.value)}
					className="input"
					lang="en"
					dir="ltr"
				/>
			</div>

			<div className="games-grid">
				{filteredAndSortedGames.map(game => (
					<div key={game.id} className="game-card">
						<img src={game.image} alt={game.title} className="game-image" />
						<div className="game-card-top">
							<h3>{game.title}</h3>
							<span className="badge">{game.genre}</span>
						</div>
						<p className="muted">Rating: {game.rating} ★</p>
						<p className="game-info">Price: ${game.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;