import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { Id: 1, title: "Inception", release_date: "2020" },
    { Id: 2, title: "Terminator", release_date: "1999" },
    { Id: 3, title: "The Matrix", release_date: "1998" },
  ];

  const handleSearch = () => {
    e.preventDefault()
    alert(`Searching for: ${searchQuery}`)
    setSearchQuery}

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) &&<MovieCard key={movie.Id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default Home;
