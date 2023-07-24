import "./player-card.styles.scss";
import GridLoader from "react-spinners/GridLoader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";

const PlayerCard = ({ player, playerIndex }) => {
    const playerData = useRef();
    const playerDataQuery = useQuery({
        refetchOnWindowFocus: false,
        queryKey: [player, playerIndex],
        queryFn: () => {
            return axios.get(`https://api.chess.com/pub/player/${player}`);
        },
    });

    if (playerDataQuery.isLoading) {
        return (
            <div
                className="player-card-container"
                style={{ justifyContent: "center" }}
            >
                <GridLoader color="white" />
            </div>
        );
    }
    if (playerDataQuery.isError) {
        return (
            <div className="player-card-container">
                <div>Failed to load</div>;
            </div>
        );
    }

    playerData.current = playerDataQuery.data.data;

    return (
        <>
            <div className="player-card-container">
                {playerData.current.avatar ? (
                    <img src={playerData.current.avatar} alt={player} />
                ) : (
                    <div className="no-avatar">NO AVATAR</div>
                )}
                <div className="player-info">
                    <p>{playerData.current.username}</p>
                    <p>Name: {playerData.current.name}</p>
                    <p>Title: {playerData.current.title}</p>
                    {playerData.current.fide && (
                        <p>FIDE ranking: {playerData.current.fide}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default PlayerCard;
