// src/App.js
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import AlbumCard from "./AlbumCard/AlbumCard";
import { Box, Typography } from "@mui/material";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);


  useEffect(() => {
    fetch("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => res.json())
      .then((data) => {
        console.log("Top Albums:", data.length);
        setTopAlbums(data);
      })
      .catch((err) => console.error("Error fetching top albums:", err));

    fetch("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => res.json())
      .then((data) => {
        console.log("New Albums:", data.length);
        setNewAlbums(data);
      })
      .catch((err) => console.error("Error fetching new albums:", err));
  }, []);

  return (
    <>
     
      <Navbar />
      <Hero />

     
      <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "40px" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            marginBottom: "24px",
          }}
        >
          Top Albums
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {topAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              testId="top-album-card"
            />
          ))}
        </Box>
      </Box>

    
      <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "40px" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            marginBottom: "24px",
          }}
        >
          New Albums
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {newAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              testId="new-album-card"
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default App;
