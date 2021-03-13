import React, {useEffect, useState} from "react";
import {Flex, Spinner} from "@chakra-ui/react"
import GameBoard from "./components/GameBoard";
import GameCounter from "./components/GameCounter";

function App() {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState();

    useEffect(async () => {
        // await fetch("http://localhost:8080/api/time",)
        await fetch("https://my-project-1557350715381-default-rtdb.firebaseio.com/game.json",)
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't fetch data from server")
                }
                return res.json()
            })
            .then(data => {
                setGameData(data)
                setIsPending(false);
            })
            .catch(err => {
                setError(err)
                isPending(true);

            })

    }, []);

    const checkGivenNumber = async (number) => {
        // const url = "http://localhost:8080/api";
        const url = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game/number.json";
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await fetch(url,
            {
                method: "post",
                headers,
                body: number
            }
        );
        return await response.json();
    };

    const getResults = async () => {
        // const url = "http://localhost:8080/api/results";
        const url = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game/result.json";
        const response = await fetch(url,
        );
        return response.json();

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
