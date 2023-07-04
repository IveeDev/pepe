import User from "../../components/user/User";
import "./Wallet.scss";

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="container">
        <User username={"Iviidev"} earnedCoin={100} />

        <div className="total-earning">
          <p>
            wallet - <span>Earned Rewards</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
