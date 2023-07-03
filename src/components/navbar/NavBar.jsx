import "./NavBar.scss";
import home from "../../assets/img/home.png";
import reward from "../../assets/img/reward.png";
import user from "../../assets/img/user.png";
import award from "../../assets/img/award.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="container">
        <ul>
          <li>
            <Link className="link" to="/">
              <img src={home} alt="home" />
              Home
            </Link>
          </li>

          <li>
            <Link className="link" to="/reward">
              <img src={reward} alt="home" />
              Rewards
            </Link>
          </li>

          <li>
            <img src={award} alt="home" />
            <Link className="link" to="/wallet">
              Wallet
            </Link>
          </li>

          <li>
            <img src={user} alt="home" />
            <Link className="link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
