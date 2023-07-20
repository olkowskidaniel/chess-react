import { useEffect, useState } from "react";
import "./players.styles.scss";
import PlayerCard from "../../components/player-card/player-card.component";

const Players = () => {
    const [gmPlayers, setGmPlayers] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch("https://api.chess.com/pub/titled/GM")
            ).json();

            setGmPlayers(data.players);
        };

        try {
            dataFetch();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="players-container">
            <h1>List of players with GM title</h1>
            <div className="cards-container">
                {gmPlayers.slice(0, 15).map((player) => (
                    <PlayerCard key={player} player={player} />
                ))}
            </div>
        </div>
    );
};

export default Players;
