import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import AlbumCard from "../AlbumCard/AlbumCard";

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");


  useEffect(() => {
    const fetchSongsAndGenres = async () => {
      try {
        const [songsRes, genresRes] = await Promise.all([
          axios.get("https://qtify-backend.labs.crio.do/songs"),
          axios.get("https://qtify-backend.labs.crio.do/genres"),
        ]);

        
        setSongs(Array.isArray(songsRes.data) ? songsRes.data : []);

        
        setGenres(Array.isArray(genresRes.data.data) ? genresRes.data.data : []);
      } catch (err) {
        console.error("Error fetching songs or genres:", err);
      }
    };

    fetchSongsAndGenres();
  }, []);

 
  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "40px" }}>
     
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          marginBottom: "16px",
        }}
      >
        Songs
      </Typography>

     
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        textColor="inherit"
        TabIndicatorProps={{ style: { background: "#34C94B", height: 3 } }}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          marginBottom: "24px",
          "& .MuiTab-root": {
            fontFamily: "Poppins, sans-serif",
            color: "#FFFFFF",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "14px",
            opacity: 0.7,
            transition: "color 0.3s ease",
            "&:hover": { color: "#34C94B", opacity: 1 },
          },
          "& .Mui-selected": {
            color: "#34C94B",
            opacity: 1,
          },
        }}
      >
        
        <Tab label="All" value="all" />

      
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>

      
      <Carousel
        items={filteredSongs}
        renderItem={(song) => (
          <AlbumCard
            key={song.id}
            album={song}
            testId={`song-card`}
            isSongSection={true} 
          />
        )}
      />
    </Box>
  );
}

export default SongsSection;
