import { Box, Container, Typography } from "@mui/material";
import React from "react";
import goloves from "./CategoriesImg/goloves.jpg";
import card from "./CategoriesImg/card.jpg";
import pressureWasher from "./CategoriesImg/pressureWasher.jpg";
import mobile from "./CategoriesImg/mobile.jpg";
import microSd from "./CategoriesImg/microSd.jpg";
import paintGun from "./CategoriesImg/paintGun.jpg";
import dryBox from "./CategoriesImg/dryBox.jpg";
import garlicTool from "./CategoriesImg/garlicTool.jpg";
import featurePhone from "./CategoriesImg/featurePhone.jpg";
import clock from "./CategoriesImg/clock.png";
import kids from "./CategoriesImg/kids.jpg";
import pencils from "./CategoriesImg/pencils.jpg";
import diningSets from "./CategoriesImg/diningSets.jpg";
import nailsGun from "./CategoriesImg/nailsGun.jpg";
import lifter from "./CategoriesImg/lifter.jpg";
import polishers from "./CategoriesImg/polishers.jpg";
import { NavLink, useParams } from "react-router-dom";

const Categories = () => {
  const {} = useParams();
  const categories = [
    {
      img: goloves,
      text: "  Cleaning Gloves",
      name: "cleaninggloves",
    },
    {
      img: mobile,
      text: "Mobiles",
      name: "mobiles",
    },
    {
      img: pressureWasher,
      text: "Pressure Washers",
      name: "pressurewashers",
    },
    {
      img: card,
      text: "SD Card",
      name: "sdcard",
    },
    {
      img: microSd,
      text: "Micro SD Card",
      name: "microcard",
    },
    {
      img: paintGun,
      text: "Paint Guns",
      name: "paintguns",
    },
    {
      img: dryBox,
      text: "Dry Box",
      name: "drybox",
    },
    {
      img: garlicTool,
      text: "Garlic Tools",
      name: "garlictools",
    },
    {
      img: featurePhone,
      text: "Feature Phone",
      name: "featurephone",
    },
    {
      img: clock,
      text: "Alaram Clocks",
      name: "alaramclocks",
    },
    {
      img: kids,
      text: "Kids Wears",
      name: "kidswears",
    },
    {
      img: pencils,
      text: "Pencils",
      name: "pencils",
    },
    {
      img: diningSets,
      text: "Dining Sets",
      name: "diningsets",
    },
    {
      img: nailsGun,
      text: "Nails Gun",
      name: "nailsgun",
    },
    {
      img: lifter,
      text: "lifters",
      name: "lifters",
    },
    {
      img: polishers,
      text: "Polishers",
      name: "polishers",
    },
  ];
  return (
    <Box sx={{ mt: 11 }}>
      <Container>
        <Typography
          sx={{
            fontFamily: "Roboto-Regular",
            fontSize: "22px",
            color: "#424242",
            fontWeight: 400,
            my: "20px",
          }}
        >
          Categories
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            alignItem: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map(({ img, text, name }) => {
            return (
              <Box
                sx={{
                  bgcolor: "#fff",
                  boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                  "&:hover": {
                    boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                    cursor: "pointer",
                  },
                  width: { xs: "45%", md: "12%" },
                  mt: "2px",
                  ml: "2px",
                }}
              >
                <NavLink
                  to={`/categoryPage/${name}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <img src={img} alt="" width="110px" />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#212121",
                      display: "flex",
                      alignItem: "center",
                      justifyContent: "center",
                    }}
                  >
                    {text}
                  </Typography>
                </NavLink>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
