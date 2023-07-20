import { useEffect, useState } from "react";
import "./player-card.styles.scss";
import GridLoader from "react-spinners/GridLoader";

const PlayerCard = ({ player }) => {
    const [playerData, setPlayerData] = useState(null);
    const [country, setCountry] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(`https://api.chess.com/pub/player/${player}`)
            ).json();

            const playerCountry = await (await fetch(data.country)).json();

            setPlayerData(data);
            setCountry(playerCountry.name);
            setIsLoading(false);
        };

        try {
            dataFetch();
        } catch (error) {
            console.log(error);
        }
    }, [player]);

    return (
        <>
            <div
                className="player-card-container"
                style={
                    isLoading
                        ? { justifyContent: "center" }
                        : { justifyContent: "space-between" }
                }
            >
                {isLoading ? (
                    <GridLoader color="white" />
                ) : (
                    <>
                        {playerData.avatar ? (
                            <img src={playerData.avatar} alt={player} />
                        ) : (
                            <div className="no-avatar">NO AVATAR</div>
                        )}
                        <div className="player-info">
                            <p>{playerData.username}</p>
                            <p>Name: {playerData.name}</p>
                            <p>Title: {playerData.title}</p>
                            {playerData.fide && (
                                <p>FIDE ranking: {playerData.fide}</p>
                            )}
                            <p>Country: {country}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default PlayerCard;
