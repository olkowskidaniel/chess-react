import "./header.styles.scss";
import chessApiLogo from "../../images/chess-api-logo.png";

import Navigation from "../navigation/navigation.component";

const Header = () => {
    return (
        <div className="header-container">
            <img src={chessApiLogo} alt="" />
            <Navigation />
        </div>
    );
};

export default Header;
