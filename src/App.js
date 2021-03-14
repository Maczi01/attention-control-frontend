import React, {useEffect, useState} from "react";
import {Flex, Spinner} from "@chakra-ui/react"
import GameBoard from "./components/GameBoard";
import GameCounter from "./components/GameCounter";
import FetchData from "./components/FetchData";

function App() {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState();
    const gameDataEndpoint = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game.json";
    const gameResultEndpoint = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game/result.json";
    const urlToGetData = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game.json";

    useEffect(async () => {
        FetchData.getData("http://localhost:8080/api/time", 'GET')
            .then(data => {
                setGameData(data)
                setIsPending(false);
            })
            .catch(err => {
                setError(err)
                setIsPending(true);
            })

    }, []);

    const checkGivenNumber = async (number) => {
        const url = "http://localhost:8080/api";
        return await FetchData.getData(url, 'POST', number)
    };

    const getResults = async () => {
        // const url = "http://localhost:8080/api/results";
        const url = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game/result.json";
        // const response = await fetch(url,
        // );
        // return response.json();

        // const promise = fetch(url)
        //     .then(res => {
        //         if (!res.ok) {
        //             throw Error("Couldnt fetch data from server")
        //         }
        //         return res.json()
        //     })
        //     .then(data => {
        //         return data
        //     })
        //     .catch(err => {
        //         setError(err)
        //     });
        // console.log("its a promise" + data)
    };

    return (
        <>
            <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803"
                  mx="auto">
                <GameCounter
                    endOfGameTime={gameData.endOfGameTime}
                    getResults={getResults}
                />
                {error && <p> {error} </p>}
                {isPending && <Spinner/>}
                <GameBoard checkGivenNumber={checkGivenNumber} table={gameData.board}/>
            </Flex>
        </>
    );
}

export default App;
