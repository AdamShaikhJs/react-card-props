import { Button, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./App.css";
import ButtonAppBar from "./Component/Appbar";
import Tours from "./Component/Tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTour = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (tours.length === 0) {
    return (
      <main style={{ margin: "auto", width: "25%" }}>
        <Paper sx={{ p: 5 }}>
          <h2>No tours left</h2>
          <Button
            variant="contained"
            sx={{ m: "auto" }}
            onClick={() => fetchTour()}
          >
            refresh
          </Button>
        </Paper>
      </main>
    );
  }
  if (loading) {
    return (
      <>
        <h1>Loading.... with conditional rendering</h1>
      </>
    );
  }
  return (
    <>
      <ButtonAppBar />
      <Tours key={tours.id} data={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
