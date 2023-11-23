import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import bg from "./assets/bg.png";
import "./styles.css";

function App() {
  const [text, setText] = useState("");
  const [isLobby, setLobby] = useState(true);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    switch (text) {
      case "1234":
        window.open(
          "https://www.youtube.com/watch?v=BbeeuzU5Qc8&ab_channel=MetroGirlzStation"
        );
        break;
      case "":
        setLobby(false);
        console.log("test");
    }
  };
  const [questions] = useState([
    {
      Math: [
        {
          1: [
            {
              Question: "What is 1 + 1",
              Answers: [{ Triangle: "2" }, { Circle: "4" }, { Square: "6" }],
              RightAnswer: "Triangle",
            },
          ],
          2: [
            {
              Question: "What is the result of 5 + 7?",
              Answers: [{ Triangle: "10" }, { Circle: "12" }, { Square: "15" }],
              RightAnswer: "Circle",
            },
          ],
          3: [
            {
              Question: "If x = 3 and y = 4, what is the value of x + y?",
              Answers: [{ Triangle: "6" }, { Circle: "8" }, { Square: "7" }],
              RightAnswer: "Square",
            },
          ],
          4: [
            {
              Question: "What is the product of 6 and 9?",
              Answers: [{ Triangle: "45" }, { Circle: "54" }, { Square: "63" }],
              RightAnswer: "Circle",
            },
          ],
          5: [
            {
              Question: "If 2x - 3 = 7, what is the value of x?",
              Answers: [{ Triangle: "5" }, { Circle: "2" }, { Square: "7" }],
              RightAnswer: "Triangle",
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <div className="h-screen w-screen object-cover">
        <img
          src={bg}
          className={`w-full h-full -z-50 absolute ${
            isLobby ? "" : "image-faded"
          }`}
          alt="React logo"
        />

        <div className="h-screen w-screen object-cover">
          <div
            className={`h-screen flex flex-col items-center justify-center ${
              isLobby ? "" : "hidden"
            }`}
          >
            <h1 className="text-white text-6xl pb-4">Sound it Out</h1>
            <div className="bg-white flex items-center justify-center h-40 w-72 rounded-lg flex-col">
              <input
                type="text"
                onChange={handleChange}
                placeholder="Game Pin"
                className="h-12 w-[16rem] bg-gray-200 border-gray-700 text-center rounded-lg"
              />
              <button
                onClick={handleClick}
                className="bg-black rounded-lg hover:bg-gray-900 hover:display-none text-white mt-2 w-[16rem] h-12"
              >
                Enter
              </button>
            </div>
          </div>
          <div
            className={`h-screen w-screen flex-col items-center justify-center ${
              isLobby ? "hidden" : ""
            }`}
          >
            {/* <h1 className="text-white text-6xl pb-4">This is a test</h1> */}
            <h1 className="test-header text-4xl">Name the game character:</h1>
            <div className="test-body">
              <div className="image-container p-10">
                <img
                  src="https://us-tuna-sounds-images.voicemod.net/db7ccad0-9a32-45be-a279-3c51881f3092-1679862786574.png"
                  className="fixed-size-image"
                  alt="React logo"
                />
              </div>
              <div className="choice-container pr-5 pl-5 pb-5">
                <div className="choice">
                  <div className="shape">
                    <div className="circle"></div>
                  </div>
                  <div className="choice-text">Text Here</div>
                </div>
                <div className="choice">
                  <div className="shape">
                    <div className="triangle"></div>
                  </div>
                  <div className="choice-text">Text Here</div>
                </div>
                <div className="choice">
                  <div className="shape">
                    <div className="square"></div>
                  </div>
                  <div className="choice-text">Text Here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
