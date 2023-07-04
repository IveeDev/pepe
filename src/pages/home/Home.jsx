import copys from "copy-to-clipboard";
import "./Home.scss";
import copy from "../../assets/img/copy.png";
import Card from "../../components/card/Card";
import Coin from "../../components/coin/Coin";
import twitter from "../../assets/img/twitter.png";
import telegram from "../../assets/img/telegram.svg";
import discord from "../../assets/img/discord.svg";
import User from "../../components/user/User";
import Sliders from "../../components/slider/Sliders";
import Task from "../../components/tasks/Task";

const Home = () => {
  const handleCopy = () => {
    const linkText = document.getElementById("linkText").innerText;
    copys(linkText);

    // Optionally, provide user feedback that the text has been copied
    alert("Link copied to clipboard!");
  };
  return (
    <div className="home">
      <div className="container">
        <User username={"Iviidev"} earnedCoin={100} />

        <Sliders />
        <Task task={"Tasks to be completed"} />

        <div className="tasks">
          <div className="refer">
            <Coin text={100} />

            <h1>Refer your friends</h1>
            <p>Earn as you invite your friend</p>
            <div className="refer__link">
              <span id="linkText">https://airdrop.acquaeth.xyz/username</span>
              <img src={copy} alt="copy" onClick={handleCopy} />
            </div>
          </div>

          <div className="twitter">
            <Coin text="20" />
            <Card>
              <div className="card-text">
                <div className="text-box">
                  <h2>Follow AquaEth on Twitter</h2>
                  <p>Follow AquaEth on Twitter</p>
                </div>

                <div className="card-link">
                  <a href="https://twitter.com">
                    <img src={twitter} alt="twiter" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="telegram">
            <Coin text="20" />
            <Card>
              <div className="card-text">
                <div className="text-box">
                  <h2>Follow AquaEth on Telegram</h2>
                  <p>Follow AquaEth on Telegram to stay updated</p>
                </div>

                <div className="card-link">
                  <a href="https://telegram.com">
                    <img src={telegram} alt="twiter" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="discord">
            <Coin text="20" />
            <Card>
              <div className="card-text">
                <div className="text-box">
                  <h2>Join our Discord</h2>
                  <p>
                    Join Aquaeth discord group to meet like minds and share Idea
                    s together
                  </p>
                </div>

                <div className="card-link">
                  <a href="https://discord.com">
                    <img src={discord} alt="telegram" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="discord">
            <Coin text="??" />
            <Card>
              <div className="card-text">
                <div className="text-box">
                  <h2>More Tasks</h2>
                  <p>More Tasks will be added here</p>
                </div>

                <div className="card-link">
                  {/* <a href="https://discord.com">
                    <img src={discord} alt="telegram" />
                  </a> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
