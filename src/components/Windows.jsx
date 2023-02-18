import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Windows = ({ maxValue, bulbIndexList }) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 10, md: 20 }}
      >
        {Array.from(Array(maxValue)).map((_, index) => (
          <Grid item xs={2} key={index}>
            <Item color={bulbIndexList.includes(index) ? "#FED049" : "#fff"}>{index+1}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Windows;

/**
 * <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
      >
        {rows.map((val, ind) => {
          return (<>{val}</>)
        })}
      </Stack>
 */
