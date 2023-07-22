import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./players.styles.scss";
import PlayerCard from "../../components/player-card/player-card.component";
import Pagination from "../../components/pagination/pagination.component";
import { useQuery } from "@tanstack/react-query";

const Players = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [playersPerPage, setPlayersPerPage] = useState(15);

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
    //calculating and slicing array for pagination
    const lastPlayerIndex = currentPage * playersPerPage;
    const firstPlayerIndex = lastPlayerIndex - playersPerPage;
    const playersOnPage = playersQuery.data.data.players.slice(
        firstPlayerIndex,
        lastPlayerIndex
    );

    return (
        <div className="players-container">
            <h1>List of players with GM title</h1>
            {playersOnPage.map((player, index) => (
                <p key={index} style={{ margin: "0px" }}>
                    {player}
                </p>
            ))}
            <Pagination
                currentPage={currentPage}
                total={playersQuery.data.data.players.length}
                limit={playersPerPage}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
};

export default Players;
