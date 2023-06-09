
import React,{ useState ,useContext} from'react';
import { Board } from './board';
import { Context } from "../store/appContext";
export const Gamef = () => {
    const { store, actions } = useContext(Context);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    
    // funcion handle play
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    // funcion jumpto
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <button onClick={()=> jumpTo(0)}>Volver a Jugar</button>
            </div>
        </div>
    );
}