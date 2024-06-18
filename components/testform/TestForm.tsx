"use client";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const TestForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default TestForm;
