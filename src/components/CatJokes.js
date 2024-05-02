import { useEffect, useState } from "react";

let JokeCard = ({ joke }) => {
    return (
        <div className="JokeCard">
            <div className="JokeContent">
                <p className="Joke">{joke.setup}</p>
                <p className="Punchline">{joke.punchline}</p>
            </div>
        </div>
    );
};

export default function CatJokes() {
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        setLoading(true);
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => {
                setJokes(prevJokes => [...prevJokes, data]);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = () => {
        fetchData();
    };

    return (
        <div>
            <div>
                {loading ? (
                    <p>Joke Loading...</p>
                ) : (
                    jokes.map((joke, index) => (
                        <JokeCard key={index} joke={joke} />
                    ))
                )}
            </div>
            <button onClick={handleClick}>Get New Joke</button>
        </div>
    );
}
