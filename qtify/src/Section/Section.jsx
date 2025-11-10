import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";
import { Button, Typography, Box } from "@mui/material";

function Section({ title, apiEndpoint, testIdPrefix }) {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false); 

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error("Error fetching albums:", err));
  }, [apiEndpoint]);

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "40px" }}>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          {title}
        </Typography>

        <Button
          onClick={handleToggle}
          variant="text"
          sx={{
            color: "#34C94B",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          
          {expanded ? "Collapse" : "Show All"}
        </Button>
      </Box>

     
      {expanded ? (
        
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              testId={`${testIdPrefix}-album-card`}
            />
          ))}
        </Box>
      ) : (
        
        <Carousel
          items={albums}
          renderItem={(album) => (
            <AlbumCard
              key={album.id}
              album={album}
              testId={`${testIdPrefix}-album-card`}
            />
          )}
        />
      )}
    </Box>
  );
}

export default Section;
