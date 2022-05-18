import React, { useContext } from "react";
import axios from "axios";
import { Button, Row, Table } from "react-bootstrap";
import PlayerContext from "../playerContext";
import { logMsg } from "../Accessories/LogFormatting";
import { useParams } from "react-router-dom";

const Game = props => {
    const {playerList, setPlayerList} = useContext(PlayerContext);
    const width30 = {
        width: "30%"
    }
    const {id} = useParams();
    const statusHandler = (player, status, idx) => {
        player.games[id-1] = status;
        axios.put(`http://localhost:8000/api/players/${player._id}`, {...player})
            .then(res => {
                console.log(logMsg("User Updated", true));
                let temp = [...playerList];
                temp[idx] = player
                setPlayerList(temp)
            })
            .catch(err => console.log(logMsg("Couldn't Update Player Status!"), err))
    }

    return (
        <>
            <Row>
                <h1 className="display-3">Game Component {id}</h1>
            </Row>
            <Row>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { playerList ? playerList.map((player, idx) => {
                            return (
                                <tr key={idx} className='align-middle'>
                                    <td>{player.name}</td>
                                    <td className="d-flex justify-content-evenly">
                                        <Button style={width30} onClick={(e, p=player) => statusHandler(p, 2, idx)} variant={player.games[id-1] === 2 ? 'success' : 'outline-success'}>Playing</Button>
                                        <Button style={width30} onClick={(e, p=player) => statusHandler(p, 1, idx)} variant={player.games[id-1] === 1 ? 'danger' : 'outline-danger'}>Not Playing</Button>
                                        <Button style={width30} onClick={(e, p=player) => statusHandler(p, 0, idx)} variant={player.games[id-1] === 0 ? 'warning' : 'outline-warning'}>Undecided</Button>
                                    </td>
                                </tr>
                            )
                        })
                        : <tr>
                            <td> Loading... </td>
                        </tr>}
                    </tbody>
                </Table>
            </Row>
        </>
    )
}

export default Game;