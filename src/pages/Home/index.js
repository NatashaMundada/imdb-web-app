import React, { useEffect, useState } from "react";
import * as client from "./client";
import Movie from "../../components/Movie/movie";
import "./index.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [ratings, setRatings] = useState({});

  const getMovies = async () => {
    try {
      const response = await client.getTitles();
      setMovies(response);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const response = await client.getUpcomingTitles();
      setUpcomingMovies(response);
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    }
  };

  const getRating = async (id) => {
    try {
      const response = await client.getRating(id);
      setRatings((prevRatings) => ({
        ...prevRatings,
        [id]: response,
      }));
    } catch (error) {
      console.error("Error fetching rating for movie with id", id, ":", error);
    }
  };

  useEffect(() => {
    getMovies();
    getUpcomingMovies();
  }, []);

  useEffect(() => {
    const allMovies = [...movies, ...upcomingMovies];
    allMovies.forEach((movie) => {
      getRating(movie.id);
    });
  }, [movies, upcomingMovies]);

  return (
    <div className="container">
      <h4>Upcoming Movies</h4>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {upcomingMovies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.titleText.text}
            imageUrl={
              movie.primaryImage
                ? movie.primaryImage.url
                : "https://www.dotyeti.com/wp-content/uploads/2023/01/barbie.webp"
            }
            rating={ratings[movie.id] || 0}
          />
        ))}
      </div>
      <h4>Recommended for you</h4>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.titleText.text}
            imageUrl={
              movie.primaryImage
                ? movie.primaryImage.url
                : "https://www.dotyeti.com/wp-content/uploads/2023/01/barbie.webp"
            }
            rating={ratings[movie.id] || 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
