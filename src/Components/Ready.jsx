import React from 'react';

function Ready(props) {
    return (
        <div className={`h-screen w-screen flex-col items-center justify-center ${props.isLobby === "Ready" ? "" : "hidden"}`}>
              <h1 className=" text-9xl text-white font-bold"> Are you ready to Answer?</h1>
              <button onClick={() => speak({ text: "Are you ready to answer?" })}>
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png"
                  alt="React logo"
                  className="flex mx-[40rem]"
                />
              </button>
              <button
                onClick={setLobby("Questions")}
                className="bg-black rounded-lg hover:bg-gray-900 hover:display-none text-white mt-2 w-[16rem] h-12"
              >
                Ready!
              </button>
          </div>
    );
}

export default Ready;