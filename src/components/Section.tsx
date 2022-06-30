import { Avatar, Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface SectionLabelProps {
  option: number;
  children: ReactNode;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ option, children }) => {
  return (
    <section>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
        }}
        p={2}
      >
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="primary"
          fontWeight={500}
          sx={{
            textTransform: "uppercase",
          }}
        >
          Option
        </Typography>
        <Avatar
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            ml: 2,
            fontWeight: 700,
          }}
        >
          {option}
        </Avatar>
      </Box>
      {children}
    </section>
  );
};
export default SectionLabel;
