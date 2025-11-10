import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";

function AlbumCard({ album, testId }) {
  return (
    <Card
      data-testid={testId}
      sx={{
        backgroundColor: "#121212",
        borderRadius: "10px",
        width: 159,
        height: 205,
        boxShadow: "none",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
        paddingBottom: "4px",
      }}
    >
      
      <CardMedia
        component="img"
        image={album.image}
        alt={album.title}
        sx={{
          width: 159,
          height: 170,
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          objectFit: "cover",
        }}
      />

      
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "4px" }}>
        <Chip
          label={`${album.follows} Follows`}
          sx={{
            backgroundColor: "#000",
            color: "#FFFFFF",
            borderRadius: "10px",
            fontSize: "12px",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            height: "22px",
            lineHeight: "100%",
          }}
        />
      </Box>

      
      <CardContent sx={{ padding: "4px 0 0 0" }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#FFFFFF",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          {album.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;
