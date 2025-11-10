import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Button, Typography, Box } from "@mui/material";

function Section({ title, apiEndpoint, testIdPrefix }) {
  const [albums, setAlbums] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    const fetchAlbums = async () => {
      try {
        const { data } = await axios.get(apiEndpoint);
        setAlbums(Array.isArray(data) ? data : []);
        console.log(`${title}: ${Array.isArray(data) ? data.length : 0}`);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [apiEndpoint, title]);

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
          <AlbumCard
            key={album.id}
            album={album}
            testId={`${testIdPrefix}-album-card`}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Section;
