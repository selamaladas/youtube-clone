import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import VideoCard from "./VideoCard"; // تأكد من وجود هذا المكون

const Videos = ({ videos }) => {
  if (!videos) {
    return <CircularProgress />;
  }

  if (videos.length === 0) {
    return (
      <Typography variant="h6" sx={{ color: "white" }}>
        No videos found
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {videos.map((video, index) => (
        <Box key={index} sx={{ margin: "10px" }}>
          <VideoCard video={video} />
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
