import { useState } from "react";
import Modal from "../../components/modal/Modal";
import "./Signup.scss";
import Overlay from "../../components/overlay/Overlay";
import pepe from "../../assets/img/pepe-img.png";

const Signup = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleConnectWallet = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="register">
      <div className="container">
        <div className="logo">
          <img src={pepe} alt="logo" />
        </div>
        <form className="form">
          <h1>Sign up for early access to Aquaeth</h1>
          <div className="form__group">
            <label htmlFor="" className="form__label">
              Username
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Enter your username"
            />
          </div>

          <div className="form__group">
            <label htmlFor="" className="form__label">
              Wallet Address
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Enter your wallet address"
            />
            <button
              type="button"
              className="connect-btn"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </button>
          </div>

          <div className="form__group">
            <label htmlFor="" className="form__label">
              Referal Code
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Enter your referal code"
            />
          </div>
          <button className="btn">Sign up</button>
        </form>
      </div>
      {isModalOpen && (
        <>
          <Overlay />
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
      )}
      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
};

export default Signup;
