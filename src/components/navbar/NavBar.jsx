import "./NavBar.scss";
import home from "../../assets/img/home.png";
import reward from "../../assets/img/reward.png";
import user from "../../assets/img/user.png";
import award from "../../assets/img/award.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="container">
        <ul>
          <li>
            <NavLink className="link" activeClassName="active" exact to="/home">
              <img src={home} alt="home" />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className="link" to="/reward">
              <img src={reward} alt="home" />
              Rewards
            </NavLink>
          </li>

          <li>
            <NavLink className="link" to="/wallet">
              <img src={award} alt="home" />
              Wallet
            </NavLink>
          </li>

          <li>
            <NavLink className="link" to="/profile">
              <img src={user} alt="home" />
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
