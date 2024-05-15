import React, { useState, useEffect } from "react";
import axios from "../utils/axios";


function Services() {
  const [first, setFirst] = useState("Small Data");
  const [second, setSecond] = useState("Very Big Data");

  const getUsers = () => {

    axios
      .get("/users")
      .then((users) => {
        console.log(users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers()
    console.log("Component Created");

    return () => {
      console.log("Component Deleted");
    };
  }, [second]);

  return (
    <>
      <div className="flex mt-20 justify-center text-7xl font-bold text-brown-600">
        Services
      </div>
      <div className="flex items-center gap-10 mt-7 justify-center">
        <div className="">
          <h1 className="font-semibold">{first}</h1>
          <button
            onClick={() => setFirst("Small Data Changed")}
            className="bg-blue-400 text-lg rounded-md px-3 py-1 font-semibold text-white mt-5 "
          >
            Small Data
          </button>
        </div>
        <div className="">
          <h1 className="font-semibold">{second}</h1>
          <button
            onClick={() => setSecond("Big Data Changed")}
            className="bg-red-600 text-lg rounded-md px-3 py-1 font-semibold text-white mt-5 "
          >
            Big Data
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
