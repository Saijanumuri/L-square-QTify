
import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Button, Typography, Box } from "@mui/material";

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, [apiEndpoint]);

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
          variant="text"
          sx={{
            color: "#34C94B",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          Collapse
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </Box>
    </Box>
  );
}

export default Section;
