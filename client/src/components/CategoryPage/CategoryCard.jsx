import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarBorderPurple500Sharp from "@mui/icons-material/StarBorderPurple500Sharp";
import { Avatar, Box, CardActionArea } from "@mui/material";
import { url } from "../../constants";
const CategotyCard = ({ cardItem }) => {
  return (
    <Box py={2}>
      <Card sx={{ maxWidth: 345,height:"100%" }} className="bs">
        {/* <CardActionArea> */}
          <CardMedia
            component="img"
            height="150px"
            image={`${url}/uploads/${cardItem.image}`}
            alt="green iguana"
            sx={{ width: "100%" }}
          />
          <CardContent>
            <Avatar
              variant="square"
              src={`${url}/uploads/${cardItem.image}`}
              sx={{ border: "1px solid red" }}
              sizes="small"
            ></Avatar>
            <Typography
              mt={2}
              gutterBottom
              color="#87B5EC"
              variant="p"
              component="div"
            >
              {cardItem.name}
            </Typography>
            <Typography variant="body2" color="#F57647">
              Rs.{cardItem.price}
            </Typography>
            {/* <Typography variant="body2" color="#9A9A9A">
              <del style={{ marginRight: "0.5rem", marginTop: "1rem" }}>
                Rs.{cardItem.delprice}
              </del>
              {cardItem.percent}
            </Typography> */}
          <Typography variant="body2" color="">
            {[1, 2, 3, 4, 5].map(() => {
              return <StarBorderPurple500Sharp sx={{ fontSize: "1rem" }} />;
            })}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CategotyCard;
