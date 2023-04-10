import React, { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";

import LOGO from "../../assets/logo.png";
import GOOGLE from "../../assets/google.svg";

const Home = () => {
  const [inp, setInp] = useState("");
  const [out, setOut] = useState("");

  const fetchData = async (inpData) => {
    try {
      const response = await axios.post("http://10.10.0.67:8080/summarize", {
        text: inpData,
      });
      return response.data;
    } catch (error) {
      console.log("this is an error");
      console.error(error);
    }
  };

  async function askQues() {
    const input = inp;
    console.log(input);
    const output = await fetchData(input);
    console.log(output);
    setOut(output);
  }

  useEffect(() => {
    setOut(out);
  }, [out]);

  return (
    <div className="container">
      <div className="header">
        <img src={LOGO} className="logoStyle" />
        <span className="summarise">SUMMARISE</span>
      </div>

      <div className="secondContainer">
        <div className="secondContainerLeft">
          <span className="ltlamen">LTLLAMEN FOR CHROME!</span>
          <div className="bar">
            <span className="barinnerStyle"> |</span>
          </div>
          <span className="convert">
            CONVERT YOUR LEGAL TEXT WHEREVER YOU GO
          </span>
        </div>

        <div className="buttonChrome">
          <img src={GOOGLE} className="googleStyle" />
          <span className="addChrome">ADD TO CHROME. IT’S FREE!</span>
        </div>
      </div>

      <div className="thirdContainer">
        <div
          className="inputContainer"
          style={{
            display: "flex",
          }}
        >
          <textarea
            type="text"
            id="inp"
            value={inp}
            className="inputStyle"
            placeholder={"Paste Your Data Here ..."}
            onChange={(event) => setInp(event.target.value)}
          />
          <div onClick={() => askQues()}>
            <span className="buttonText">CONVERT</span>
          </div>
        </div>

        <div className="inputContainer">
          <textarea
            type="text"
            id="out"
            value={out}
            className="inputStyle"
            placeholder={"You'll get your data here ..."}
            onChange={(event) => setOut(event.target.value)}
          />
        </div>
      </div>
      {/* <div
        style={{
          backgroundColor: "orange",
        }}
      >
        <span>LEGAL NEWS</span>
      </div> */}
    </div>
  );
};

export default Home;
