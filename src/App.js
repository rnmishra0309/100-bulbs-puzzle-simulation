import React, { useState } from "react";
import Contents from "./containers/Contents";
import { Slider } from "@mui/material";
import shortid from "shortid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import "./styles/header.css";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#6B728E",
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...{
            backgroundColor: "transparent",
            color: theme.palette.grey[500],
          },
        }),
      },
    },
  },
});

const App = () => {
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <div className="main__app">
      <div className="puzzle__header section__padding">
        <div className="puzzle__header-text">Boxes: {sliderValue}</div>
          <ThemeProvider theme={muiTheme}>
            <Slider
              key={shortid.generate()}
              aria-label="Number of Boxes"
              defaultValue={sliderValue}
              valueLabelDisplay="on"
              step={10}
              marks
              min={0}
              max={100}
              onChangeCommitted={(_, value) => {
                setSliderValue(value);
              }}
            />
          </ThemeProvider>
      </div>
      <Contents sliderValue={sliderValue} />
    </div>
  );
};

export default App;
