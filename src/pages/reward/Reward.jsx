import user from "../../assets/img/pepe-img.png";
import first from "../../assets/img/reward-1.png";
import second from "../../assets/img/reward-2.png";
import third from "../../assets/img/reward-3.png";
import Medal from "../../components/medal/Medal";
import RewardCard from "../../components/rewardCard/RewardCard";
import Sliders from "../../components/slider/Sliders";
import Task from "../../components/tasks/Task";
import User from "../../components/user/User";
import "./Reward.scss";

const Reward = () => {
  return (
    <div className="reward">
      <div className="container">
        <User username={"iviidev"} earnedCoin={100} />
        <Sliders />
        <Task task={"Rewards"} />

        <div className="rewards">
          <div className="reward__card">
            <Medal text={"1st Place"} color={"#FFBA57"} />
            <RewardCard>
              <div className="card__content">
                <img src={first} alt="first" className="card__img" />
                <div className="card__text-box">
                  <h2>1st Place</h2>
                  <p>
                    Dominate the competition and seize 100,000 $AquaETH as your
                    ultimate triumph!
                  </p>
                </div>
              </div>
            </RewardCard>
          </div>

          <div className="reward__card">
            <Medal text={"2nd Place"} color={"#9E9E9E"} />
            <RewardCard>
              <div className="card__content">
                <img src={second} alt="third" className="card__img" />
                <div className="card__text-box">
                  <h2>2nd Place</h2>
                  <p>
                    2nd Place Claim victory as the runner-up and earn 60,000
                    $AquaETH in recognition of your outstanding achievement!
                  </p>
                </div>
              </div>
            </RewardCard>
          </div>

          <div className="reward__card">
            <Medal text={"3rd Place"} color={"#CE7430"} />
            <RewardCard>
              <div className="card__content">
                <img src={third} alt="third" className="card__img" />
                <div className="card__text-box">
                  <h2>3rd Place</h2>
                  <p>
                    3rd Place Secure your position on the podium and be rewarded
                    with 20,000 $AquaETH as a testament to your exceptional
                    performance!
                  </p>
                </div>
              </div>
            </RewardCard>
          </div>

          <div className="reward__card">
            <Medal text={"Other place"} color={"#CE7430"} />
            <RewardCard>
              <div className="card__content card__content--gap">
                <img src={user} alt="user" className="card__img" />
                <div className="card__text-box">
                  <h2>Other Place</h2>
                  <p>
                    Amount and number of tokens to be allocated will be
                    discussed among the team and distributed.
                  </p>
                </div>
              </div>
            </RewardCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
