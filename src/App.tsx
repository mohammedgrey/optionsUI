import Box from "@mui/material/Box";
import * as React from "react";
import Banner from "./components/Banner";
import CustomCarousel from "./components/CustomCarousel";
import ExtraFeature from "./components/ExtraFeature";
import ResponsiveTable from "./components/ResponsiveTable";
import Section from "./components/Section";
import { bannerImages, carouselImages } from "./data/images";

export default function App() {
  return (
    <Box mb={8}>
      <Section option={1}>
        <CustomCarousel images={carouselImages} />
      </Section>
      <Section option={2}>
        <Banner images={bannerImages} />
      </Section>
      <Section option={3}>
        <ResponsiveTable />
      </Section>
      <Section option={4}>
        <ExtraFeature />
      </Section>
    </Box>
  );
}
