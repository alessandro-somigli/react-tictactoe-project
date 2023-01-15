import { useState } from "react"

import { Cell } from "./cell"

export const Table = props => {
    // game table, 0: empty, 1: occupied p1, 2: occupied p2
    const [table, setTable] = useState(
        [   [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]])

    // game result, 0: pending, 1: won p1, 2: won p2
    const [result, setResult] = useState(0)

    // game turn, 1: p1, 2: p2
    const [turn, setTurn] = useState(1)

    // game label when game is playing
    const gameLabel = result===0? 
            turn===1? 'player_1 to move':'player_2 to move':
            result===1? 'player_1 won':'player_2 won'

    const onHandleCellClick = (row_index, col_index) => {
        // if cell is empty
        if (table[row_index][col_index]===0) {
            const newTable = []
            table.forEach((row, row_i) => {
                if (row_index===row_i) {
                    const newRow = []
                    row.forEach((cell, cell_i) => {
                        if (col_index===cell_i) newRow.push(turn)
                        else (newRow.push(cell))
                    })
                    newTable.push(newRow)
                } else newTable.push([...row])
            })
            checkForVictory(newTable)
            setTable(newTable)
            setTurn(turn===1?2:1)
        } 
    }

    const checkForVictory = table => {

    }

    return (
        <>
        <table>
            <tbody>
            { table.map((row, row_index) => {
                return (
                    <tr key={row_index}>
                    { row.map((cell, col_index) => 
                        <Cell occupied={cell} key={col_index}
                            onClick={() => onHandleCellClick(row_index, col_index)} />
                            ) }
                    </tr>
                );
            }) }
            </tbody>
        </table>
        <span>{gameLabel}</span>
        </>
    );
}