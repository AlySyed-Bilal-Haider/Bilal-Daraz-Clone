import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import swal from "sweetalert2";
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Admin = () => {
  const [row, setRow] = React.useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/alluser");
      const newData = res.data.filter((x) => x.role === "admin");
      setRow(newData);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchUser();
  }, [row]);

  const handleDele = async (_id) => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/delete", {
        _id,
      });
      swal.fire("Congrants", "Users is Deletd sucessfully", "success");
    } catch (error) {
      console.log(error);
      swal.fire("Oops", "something went wrong", "error");
    }
  };

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
            Add New Admin
          </Button>
        </NavLink>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>id</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Role</StyledTableCell>
                <StyledTableCell align="left">Gender</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((rows, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row">
                    {rows._id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{rows.name}</StyledTableCell>
                  <StyledTableCell align="left">{rows.email}</StyledTableCell>
                  <StyledTableCell align="left">{rows.role}</StyledTableCell>
                  <StyledTableCell align="left">{rows.gender}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Box>
                      <NavLink to={`edit/${rows._id}`}>
                        <Button
                          sx={{
                            color: "white",
                            backgroundColor: "#7451F8",
                            "&:hover": {
                              background: "#7451F8",
                            },
                            marginRight: "1rem",
                          }}
                        >
                          Edit
                        </Button>
                      </NavLink>
                      <Button
                        sx={{
                          color: "white",
                          backgroundColor: "#7451F8",
                          "&:hover": {
                            background: "#7451F8",
                          },
                        }}
                        onClick={() => {
                          handleDele(rows._id);
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Admin;
