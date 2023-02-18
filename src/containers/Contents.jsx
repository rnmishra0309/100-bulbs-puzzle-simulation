import React, { useState } from "react";
import Windows from "../components/Windows";
import "../styles/contents.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Contents = ({ sliderValue }) => {
  const [iterNum, setIterNum] = useState(1);
  const [bulbIndexList, setBulbIndexList] = useState([]);
  const [startDisabled, setStartDisabled] = useState(false);

  const handleChange = async (event) => {
    setStartDisabled(true);
    let finalBulbList = [];
    for (let i = 1; i <= sliderValue; i++) {
      let bulbList = [];
      setIterNum(i);
      let k = 1;
      let j = i * k;
      while (j <= sliderValue) {
        bulbList.push(j - 1);
        k++;
        j = i * k;
      }
      bulbList.map((element, index) => {
        finalBulbList.includes(element)
          ? finalBulbList.splice(finalBulbList.indexOf(element), 1)
          : finalBulbList.push(element);
        return true;
      });
      setBulbIndexList(finalBulbList);
      await sleep(1000);
    }
    setStartDisabled(false);
  };

  return (
    <div className="puzzle__contents">
      <div className="puzzle__contents-header">
        <h1>Iteration: {iterNum}</h1>
        <button onClick={handleChange} disabled={startDisabled}>
          Start
        </button>
      </div>
      <Windows maxValue={sliderValue} bulbIndexList={bulbIndexList} />
    </div>
  );
};

export default Contents;

/**
 * // const root = [];
  // for(let i=1; i < sliderValue; i=i+10) {
  //   root.push(<Windows minValue={i} maxValue={i+9} />)
  // }
 */
