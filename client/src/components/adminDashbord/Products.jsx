import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#7451F8",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  margintTop: "20px",
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));

const Product = () => {
  const [row, setRow] = React.useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/order/allorder");
      console.log(
        res.data,
        "order ---------------------------------------------"
      );
      setRow(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Box sx={{}} px={4}>
      <Box py={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <NavLink to="addnew" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              backgroundColor: "#7451F8",
              fontSize: "1rem",
              color: "white",
              padding: "0.6rem 1.5rem",
              "&:hover": {
                backgroundColor: "#7451F8",
              },
            }}
          >
            Add New Product
          </Button>
        </NavLink>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  Tracking Details
                </StyledTableCell>

                <StyledTableCell align="left">Customer</StyledTableCell>
                <StyledTableCell align="left">Adress</StyledTableCell>

                <StyledTableCell align="left">Amount</StyledTableCell>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((rows, i) => (
                <Fragment key={i}>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      <Box>
                        <p>{rows._id}</p>
                        {rows.reference.map(({ name, noOfItems }) => {
                          return (
                            <Box sx={{ display: "flex", gap: 3 }}>
                              <p>{name.slice(0, 20)}...</p> <p>{noOfItems}</p>
                              <Divider sx={{ borderBottom: "1px solid red" }} />
                            </Box>
                          );
                        })}
                      </Box>
                    </StyledTableCell>

                    <StyledTableCell align="left">{rows.name}</StyledTableCell>
                    <StyledTableCell align="left">
                      {rows.address}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {rows.totalprice}
                    </StyledTableCell>
                    <StyledTableCell align="left" sx={{ width: "120px" }}>
                      {rows.addedAt.slice(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {rows.status}
                    </StyledTableCell>
                  </StyledTableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Product;
