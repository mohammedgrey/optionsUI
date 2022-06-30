import { Box, CardMedia, Typography, Grid, Button } from "@mui/material";
import React from "react";
import { extraFeatureContent } from "../data/content";
import AppearOnScroll from "./AppearOnScroll";
interface ExtraFeatureProps {}

const ExtraFeature: React.FC<ExtraFeatureProps> = ({}) => {
  return (
    <Grid container columnSpacing={2}>
      {extraFeatureContent.map(({ image, text, description }) => {
        return (
          <Grid item key={image} xs={12} md={6}>
            <AppearOnScroll>
              <Box
                sx={{
                  position: "relative",
                  width: "500px",
                  aspectRatio: "1/1",
                  maxWidth: "100%",
                  marginInline: "auto",
                }}
              >
                <CardMedia
                  sx={{
                    objectFit: "contain",
                    width: "100%",
                  }}
                  loading="lazy"
                  component="img"
                  src={`${process.env.PUBLIC_URL}/assets/images/${image}.png`}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "32px",
                    maxWidth: "50%",
                  }}
                >
                  <Typography mb={2} color="primary" fontWeight={700} variant="h4">
                    {text}
                  </Typography>
                  <Typography
                    sx={{
                      height: "4.5em",
                      lineHeight: "1.5em",
                      overflow: "hidden",
                      wordWrap: "break-word",
                      textOverflow: "ellipses",
                    }}
                    mb={2}
                    color="secondary"
                    fontWeight={700}
                  >
                    {description}
                  </Typography>
                  <Button variant="outlined">Read more</Button>
                </Box>
              </Box>
            </AppearOnScroll>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ExtraFeature;
