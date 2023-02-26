import React from "react";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
const CategoriesSidebar = () => {
  return (
    <Box>
      <Container>
        <Box>
          <Typography variant="h6" sx={{ color: "#262626" }}>
            Related Category
          </Typography>

          <Typography py={4} variant="p" sx={{ color: "#F57224" }}>
            Bathrobes
          </Typography>
          <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
        </Box>
        <Box>
          <Typography sx={{ color: "#262626" }}>Brand</Typography>
          <Box py={1}>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      paddingTop: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <CropSquareIcon
                      htmlColor="#9A9A9A"
                      sx={{
                        cursor: "pointer",
                        marginRight: "0.7rem",
                        "&:hover": {
                          color: "#389EB7",
                        },
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#A6A7A6" }}
                      variant="p"
                    >
                      SALVANA
                    </Typography>
                  </Box>
                </>
              );
            })}
            <Button size="small">View More</Button>
            <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>
          <Typography sx={{ color: "#262626" }}>Services</Typography>
          <Box py={1}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      paddingTop: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <CropSquareIcon
                      htmlColor="#9A9A9A"
                      sx={{
                        cursor: "pointer",
                        marginRight: "0.7rem",
                        "&:hover": {
                          color: "#389EB7",
                        },
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#A6A7A6" }}
                      variant="p"
                    >
                      Installment
                    </Typography>
                  </Box>
                </>
              );
            })}

            <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>

          <Typography sx={{ color: "#262626" }}>Location</Typography>
          <Box py={1}>
            {[1, 2].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      paddingTop: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <CropSquareIcon
                      htmlColor="#9A9A9A"
                      sx={{
                        cursor: "pointer",
                        marginRight: "0.7rem",
                        "&:hover": {
                          color: "#389EB7",
                        },
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#A6A7A6" }}
                      variant="p"
                    >
                      china
                    </Typography>
                  </Box>
                </>
              );
            })}

            <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>
          <Typography sx={{ color: "#262626" }}>Price</Typography>
          <Box py={2} sx={{ display: "flex" }}>
            <input
              type="number"
              placeholder="Min"
              style={{
                width: "50px",
                padding: "0.5rem",
                marginRight: "0.5rem",
                outlineWidth: "0",
              }}
            />
            <input
              type="number"
              placeholder="Max"
              style={{
                width: "50px",
                padding: "0.5rem",
                outlineWidth: "0",
              }}
            />
            <Button>
              <PlayCircleFilledIcon
                color="primary"
                sx={{ fontSize: "2.5rem" }}
              />
            </Button>
          </Box>
          <hr style={{ margin: "1rem 0rem", color: "#EFF0F5" }}></hr>

          <Typography sx={{ color: "#262626" }}>Rating</Typography>
          <Box py={2}>
            <Box>
              {[1, 2, 3, 4, 5].map(() => {
                return <StarOutlineIcon />;
              })}
            </Box>
            <Box>
              {[1, 2, 3, 4, 5].map(() => {
                return <StarOutlineIcon />;
              })}
            </Box>
            <Box>
              {[1, 2, 3, 4, 5].map(() => {
                return <StarOutlineIcon />;
              })}
            </Box>
            <Box>
              {[1, 2, 3, 4, 5].map(() => {
                return <StarOutlineIcon />;
              })}
            </Box>
            <Box>
              {[1, 2, 3, 4, 5].map(() => {
                return <StarOutlineIcon />;
              })}
            </Box>
            <hr style={{ margin: "1rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>
          <Typography sx={{ color: "#262626" }}>Color family</Typography>
          <Box py={1}>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      paddingTop: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <CropSquareIcon
                      htmlColor="#9A9A9A"
                      sx={{
                        cursor: "pointer",
                        marginRight: "0.7rem",
                        "&:hover": {
                          color: "#389EB7",
                        },
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#A6A7A6" }}
                      variant="p"
                    >
                      Blue
                    </Typography>
                  </Box>
                </>
              );
            })}
            <Button size="small">View More</Button>
            <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>
          <Typography sx={{ color: "#262626" }}>Warenty Type</Typography>
          <Box py={1}>
            {[1, 2, 3, 4].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      paddingTop: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <CropSquareIcon
                      htmlColor="#9A9A9A"
                      sx={{
                        cursor: "pointer",
                        marginRight: "0.7rem",
                        "&:hover": {
                          color: "#389EB7",
                        },
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#A6A7A6" }}
                      variant="p"
                    >
                      No Warenty
                    </Typography>
                  </Box>
                </>
              );
            })}

            <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>

          <Typography sx={{ color: "#262626" }}>Towel matrial</Typography>
          <Box py={1}>
            {[1, 2, 3, 4].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      paddingTop: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <CropSquareIcon
                      htmlColor="#9A9A9A"
                      sx={{
                        cursor: "pointer",
                        marginRight: "0.7rem",
                        "&:hover": {
                          color: "#389EB7",
                        },
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#A6A7A6" }}
                      variant="p"
                    >
                      100% Cutton
                    </Typography>
                  </Box>
                </>
              );
            })}

            <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>
          <Typography sx={{ color: "#262626" }}>Express Devlivery</Typography>
          <Box py={1}>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      paddingTop: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <CropSquareIcon
                      htmlColor="#9A9A9A"
                      sx={{
                        cursor: "pointer",
                        marginRight: "0.7rem",
                        "&:hover": {
                          color: "#389EB7",
                        },
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#A6A7A6" }}
                      variant="p"
                    >
                      100% Cutton
                    </Typography>
                  </Box>
                </>
              );
            })}

            <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>
          <Typography sx={{ color: "#262626" }}>Warenty period</Typography>
          <Box py={1}>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      paddingTop: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <CropSquareIcon
                      htmlColor="#9A9A9A"
                      sx={{
                        cursor: "pointer",
                        marginRight: "0.7rem",
                        "&:hover": {
                          color: "#389EB7",
                        },
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#A6A7A6" }}
                      variant="p"
                    >
                      1 month
                    </Typography>
                  </Box>
                </>
              );
            })}

            <hr style={{ margin: "1.4rem 0rem", color: "#EFF0F5" }}></hr>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CategoriesSidebar;
