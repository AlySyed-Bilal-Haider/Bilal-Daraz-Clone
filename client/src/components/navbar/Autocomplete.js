import { Stack, Autocomplete, TextField, Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../constants";
import { Link, useNavigate } from "react-router-dom";

export const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);
  const [allpoducts, setAllproducts] = useState([]);
  const navigate = useNavigate();
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${url}/api/products/allproducts`);
      setAllproducts(data);
      console.log(data, "=-------------------------------");
    } catch (error) {
      console.log("get allproducts", error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const navigateHandle = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={allpoducts}
        isOptionEqualToValue={(options, value) => options?._id === value?._id}
        getOptionLabel={(options) => options?.name}
        renderOption={(props, options) => (
          <Box
            sx={{
              color: "#757575",
              fontSize: "15px",
              py: 1,
              fontFamily: "Arial",
              marginTop: "1rem",
              textTransform: "capitalize",
              fontWeight: 700,
              borderBottom: "1px solid #757575",
              cursor: "pointer",
              outline: "none",
              "&:hover": {
                outline: "none",
              },
            }}
            {...props}
            onClick={() => {
              navigateHandle(options._id);
            }}
          >
            {console.log(options._id, "options._id")}
            {options.name || ""}{" "}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="search in daraz"
            sx={{
              width: 400,
              borderTop: "1px solid grey",
              borderRadius: "5px",
            }}
          />
        )}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Stack>
  );
};
