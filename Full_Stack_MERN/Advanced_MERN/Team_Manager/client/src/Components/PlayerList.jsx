import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import { logMsg } from '../Accessories/LogFormatting';
import PlayerContext from '../playerContext';

const PlayerList = props => {

    const { playerList, setPlayerList } = useContext(PlayerContext);

    const onDeleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/players/${_id}`)
        .then(res => {
            console.log(logMsg("Player removed from DB", true))
            setPlayerList(playerList.filter(player => player._id !== _id))
        })
        .catch(err => console.log(logMsg("Failed Removing Player!"), err))
    }

    return (
        <Row className='my-5'>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map((player, idx) => {
                        return(
                        <tr key={idx} className='align-middle'>
                            <td>{player.name}</td>
                            <td>{player.preferredPosi}</td>
                            <td><Button variant='danger' onClick={(e, p=player) => onDeleteHandler(p._id)}>Delete</Button></td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </Row>
    )
}

export default PlayerList;