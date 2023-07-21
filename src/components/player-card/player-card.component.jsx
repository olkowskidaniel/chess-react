import "./player-card.styles.scss";
import GridLoader from "react-spinners/GridLoader";

const PlayerCard = ({ player, isPlayerDataLoading }) => {
    return (
        <>
            <div
                className="player-card-container"
                style={
                    isPlayerDataLoading
                        ? { justifyContent: "center" }
                        : { justifyContent: "space-between" }
                }
            >
                {isPlayerDataLoading ? (
                    <GridLoader color="white" />
                ) : (
                    <>
                        {player.avatar ? (
                            <img src={player.avatar} alt={player} />
                        ) : (
                            <div className="no-avatar">NO AVATAR</div>
                        )}
                        <div className="player-info">
                            <p>{player.username}</p>
                            <p>Name: {player.name}</p>
                            <p>Title: {player.title}</p>
                            {player.fide && <p>FIDE ranking: {player.fide}</p>}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default PlayerCard;
