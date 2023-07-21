import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./players.styles.scss";
import PlayerCard from "../../components/player-card/player-card.component";
import Pagination from "../../components/pagination/pagination.component";
import { useQuery } from "@tanstack/react-query";

const Players = () => {
    const playersQuery = useQuery({
        queryKey: ["players"],
        queryFn: () => {
            return axios.get("https://api.chess.com/pub/titled/GM");
        },
    });

    if (playersQuery.isLoading) return <h1>Loading...</h1>;
    if (playersQuery.isError) {
        return <pre>{JSON.stringify(playersQuery.error)}</pre>;
    }

    return (
        <div className="players-container">
            <h1>List of players with GM title</h1>
            <h2>
                There are currently {playersQuery.data.data.players.length}{" "}
                players with GM title
            </h2>
            {playersQuery.data.data.players.map((player, index) => (
                <p style={{ margin: "0px" }}>
                    {index + 1}. {player}
                </p>
            ))}
        </div>
    );
};

export default Players;
