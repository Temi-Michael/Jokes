// import { useEffect, useState } from "react";

// let JokeCard = ({ joke }) => {
//     return (
//         <div className="JokeCard">
//             <div className="JokeContent">
//                 <p className="Joke">{joke.setup}</p>
//                 <p className="Punchline">{joke.punchline}</p>
//             </div>
//         </div>
//     );
// };

// export default function CatJokes() {
//     const [jokes, setJokes] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = () => {
//         setLoading(true);
//         fetch("https://official-joke-api.appspot.com/random_joke")
//             .then(response => response.json())
//             .then(data => {
//                 setJokes(prevJokes => [...prevJokes, data]);
//                 setLoading(false);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleClick = () => {
//         fetchData();
//     };

//     return (
//         <div>
//             <div>
//                 {loading ? (
//                     <p>Joke Loading...😂😂</p>
//                 ) : (
//                     jokes.map((joke, index) => (
//                         <JokeCard key={index} joke={joke} />
//                     ))
//                 )}
//             </div>
//             <button onClick={handleClick}>Get New Joke</button>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import "../App.css"

function JokeCard({ joke }) {
  return (
    <div className="AppJokes">
      <div className="JokeContent">
        <p className="Joke">{joke.setup}</p>
        <p className="Punchline">{joke.punchline}</p>
      </div>
    </div>
  );
}

function CatJokes() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleNewJokeClick = () => {
    fetchJoke();
  };

  return (
    <div className="AppCard">
      <div className="Jokes">
        {loading ? (
          <p>Joke Loading...😂😂</p>
        ) : joke ? (
          <JokeCard joke={joke} className="jokelist"/>
        ) : (
          <p>No joke available</p>
        )}
      </div>
      <button onClick={handleNewJokeClick}>Click To Get New Joke</button>
    </div>
  );
}

export default CatJokes;
