import { useRef, useState,useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import bg from "./assets/bg.png";
import "./styles.css";
import { useSpeechSynthesis } from 'react-speech-kit';
import axios from 'axios';
import Ready from "./Components/Ready";

function App() {
  const [text, setText] = useState("");
  const [isLobby, setLobby] = useState("Code");
  const [RightAns, setRightAns] = useState("Triangle")
  const { speak } = useSpeechSynthesis();


  useEffect(() => {
    console.log("test")
  }, [isLobby])
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [receivedData, setReceivedData] = useState(null);

  const fetchFileContent = async () => {
    fetch('https://cb67-149-30-144-168.ngrok-free.app/send_text')
      .then((response) => response.json())
      .then((json) => {
      if(json.message === questions[currQuestion.toString()][0]['RightAnswer']) 
        {
          alert("Correct!") 
          speak({ text: "Correct!" })
        } 
        else{
          alert("Incorrect :( Please Try Again")
          speak({ text: "The Answer is incorrect, Please Try Again." })
        }
      }
    )
  };



  const [currQuestion, setCurrQuestion] = useState(1)

  const handleClick = (event) => {
    event.preventDefault();
    switch (text) {
      case "1234":
        window.open(
          "https://www.youtube.com/watch?v=BbeeuzU5Qc8&ab_channel=MetroGirlzStation"
        );
        break;
      case "TestQuestions":
        setLobby("Ready");
        setRightAns(questions[currQuestion.toString()][0]['RightAnswer'])
    }
  };
  const questions = 
    {
      '1': [
        {
          Question: "What is 1 + 1",
          Answers: [{ Triangle: "2" }, { Circle: "4" }, { Square: "6" }],
          RightAnswer: "Triangle",
        },
      ],
      '2': [
        {
          Question: "What is the result of 5 + 7?",
          Answers: [{ Triangle: "10" }, { Circle: "12" }, { Square: "15" }],
          RightAnswer: "Circle",
        },
      ],
      '3': [
        {
          Question: "If x = 3 and y = 4, what is the value of x + y?",
          Answers: [{ Triangle: "6" }, { Circle: "8" }, { Square: "7" }],
          RightAnswer: "Square",
        },
      ],
      '4': [
        {
          Question: "What is the product of 6 and 9?",
          Answers: [{ Triangle: "45" }, { Circle: "54" }, { Square: "63" }],
          RightAnswer: "Circle",
        },
      ],
      '5': [
        {
          Question: "If 2x - 3 = 7, what is the value of x?",
          Answers: [{ Triangle: "5" }, { Circle: "2" }, { Square: "7" }],
          RightAnswer: "Triangle",
        },
      ],
    }

    const checkIfCorrect = (ans) => {
        if(currQuestion < 5 && ans === questions[currQuestion.toString()][0]['RightAnswer']) 
          { 
              setCurrQuestion(currQuestion + 1)
          }
        else if(currQuestion === 5 && ans === RightAns){
          alert("Congratulations You Answered all 5 questions Correctly")
        }
    }

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
              isLobby === "Code" ? "" : "hidden"
            }`}
          >
            <h1 className="text-white text-6xl pb-4">INSight</h1>
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
          <div className={`h-screen w-screen flex flex-col items-center justify-center ${isLobby === "Ready" ? "" : "hidden"}`}>
              <h1 className=" text-9xl text-white font-bold"> Are you ready to Answer?</h1>
              <button onClick={() => speak({ text: "Are you ready to answer?" })}>
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png"
                  alt="React logo"
                  className="flex mx-[40rem]"
                />
              </button>
              <button
                onClick={() => setLobby("Questions")}
                className="bg-black rounded-lg hover:bg-gray-900 hover:display-none text-white mt-2 w-[16rem] h-12"
              >
                Ready!
              </button>
          </div>
          <div
            className={`h-screen w-screen flex-col items-center justify-center ${
              isLobby === "Questions" ? "" : "hidden"
            }`}
          >
            <h1 className="test-header text-4xl">{questions[currQuestion.toString()][0]['Question']}</h1>
            <div className="test-body w-full">
              <button onClick={() => speak(
                { text: [questions[currQuestion.toString()][0]['Question'], 
                "Triangle?",
                questions[currQuestion.toString()][0]['Answers'][0]['Triangle'],"?",
                "Circle?",
                questions[currQuestion.toString()][0]['Answers'][1]['Circle'],"?",
                "Square?",
                questions[currQuestion.toString()][0]['Answers'][2]['Square']]}
                )}>
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png"
                  alt="React logo"
                  className="flex mx-[40rem]"
                />
              </button>
              <div className="choice-container pr-5 pl-5 pb-5" >
                <button className="choice" onClick={() => checkIfCorrect("Triangle")} >
                  <div className="shape">
                    <div className="triangle"></div>
                  </div>
                  <div className="choice-text" >{questions[currQuestion.toString()][0]['Answers'][0]['Triangle']}</div>
                </button>
                <button className="choice" onClick={() => checkIfCorrect("Circle")} >
                  <div className="shape">
                    <div className="circle"></div>
                  </div>
                  <div className="choice-text">{questions[currQuestion.toString()][0]['Answers'][1]['Circle']}</div>
                </button>
                <button className="choice" onClick={() => checkIfCorrect("Square")} >
                  <div className="shape">
                    <div className="square"></div>
                  </div>
                  <div className="choice-text">{questions[currQuestion.toString()][0]['Answers'][2]['Square']}</div>
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button onClick={() => fetchFileContent()} className="bg-black rounded-lg hover:bg-gray-900 hover:display-none text-white mt-2 w-[16rem] h-12"> Check if Correct </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
