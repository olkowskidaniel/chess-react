import "./header.styles.scss";
import chessApiLogo from "../../images/chess-api-logo.png";

const Header = () => {
    return (
        <div className="header-container">
            <img src={chessApiLogo} alt="" />
        </div>
    );
};

export default Header;
