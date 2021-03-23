import {GameDataContext} from "../context/GameDataContext";
import React, {useContext} from 'react'

export const ResultView = () => {
    const {name} = useContext(GameDataContext);
    // const {board, endOfGameTime} = gameData;

    const getAll = () => {
        let values = [];
        const keys = Object.keys(localStorage);
        for (let i = 0; i < keys.length; i++) {
            values.push(`${localStorage.getItem(keys[i])} : ${keys[i]}`)
        }
        return values;
    }
    const items = getAll()


    return (
        <>
            <p>Wyniki</p>
            {items.map((w, index) => <p key={index}>w</p>)}
        </>
    )
}