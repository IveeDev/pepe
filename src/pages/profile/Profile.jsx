import User from "../../components/user/User";
import profile from "../../assets/img/pepe-img.png";
import level from "../../assets/img/level.png";
import points from "../../assets/img/points.png";
import twitter from "../../assets/img/twitter.png";
import telegram from "../../assets/img/telegram.svg";
import discord from "../../assets/img/discord.svg";
import doc from "../../assets/img/doc.svg";
import ProfileCard from "../../components/profilecard/ProfileCard";
import "./Profile.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <User username={"iviidev"} earnedCoin={100} />

        <div className="profile__detail">
          <img src={profile} alt="iviidev" />
          <div className="profile__text">
            <p className="profile__name">iviidev</p>
            <p className="profile__email">iviidev@email.com</p>
          </div>
        </div>

        <div className="connect">
          <div className="connect__wallet">
            <p>Wallet not connected.</p>
            <button>Connect Wallet</button>
          </div>
        </div>

        <Link to="/reward" className="link">
          <ProfileCard>
            <div className="profilecard__detail">
              <div className="text-box">
                <h1>You are at - level</h1>
                <p>Check the rewards tab to see what you can earn.</p>
              </div>
              <img src={level} alt="points" />
            </div>
          </ProfileCard>
        </Link>

        <ProfileCard>
          <div className="profilecard__detail">
            <div className="text-box">
              <h1>Complete Quests and Points</h1>
              <p>Tap here to see your previously completed Quests!</p>
            </div>
            <img src={points} alt="points" />
          </div>
        </ProfileCard>

        <ProfileCard>
          <div className="btn-container">
            <button className="btn">Disconnect</button>
          </div>
        </ProfileCard>

        <div className="icons">
          <a href="https://twitter.com">
            <img src={twitter} alt="" />
          </a>

          <a href="https://telegram.com">
            <img src={telegram} alt="" />
          </a>

          <a href="https://discord.com">
            <img src={discord} alt="" />
          </a>

          <a href="https://discord.com">
            <img src={doc} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
