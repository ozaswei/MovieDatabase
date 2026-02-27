import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import App from "./App";
// import StartRating from "./StartRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StartRating color="blue" onSetRating={setMovieRating} />
//       <p>Movie was rated {movieRating} stars </p>
//     </div>
//   );
// }
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StartRating maxRating={10} />

    <StartRating defaultRating={3} />
    <Test /> */}
  </React.StrictMode>,
);
