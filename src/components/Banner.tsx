import React, { useState } from "react";
import { Box, Button, CardMedia, Typography, Container } from "@mui/material";

interface BannerProps {
  images: Array<string>;
}

const Banner: React.FC<BannerProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleToggleImage = () => {
    setOpacity(0.9);
    setTimeout(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
      setOpacity(1);
    }, 250);
  };

  return (
    <Box position="relative">
      <CardMedia
        component="img"
        loading="lazy"
        sx={{
          width: "100%",
          aspectRatio: { xs: "16/9", sm: "21/9" },
          minHeight: { xs: "600px", md: "auto" },
          maxHeight: "1000px",
          transition: "all 0.25s linear",
          opacity,
        }}
        src={images[imageIndex]}
      />
      <Box
        width="100%"
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Container maxWidth="lg" sx={{ p: 4 }}>
          <Box maxWidth={{ xs: "100%", md: "600px" }}>
            <Typography
              mb={2}
              color="white"
              fontWeight={700}
              variant="h3"
              component="h1"
              sx={{ wordBreak: "break-word" }}
            >
              Lorem ipsum dolor sit amet consectetur
            </Typography>
            <Typography mb={4} color="white" component="h2" sx={{ wordBreak: "break-word" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero ex tempora
              ullam, ducimus facilis quae quibusdam blanditiis enim iste
            </Typography>
            <Box maxWidth={{ xs: "100%", md: "450px" }}>
              <Button variant="contained" onClick={handleToggleImage}>
                Toggle image
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
export default Banner;
