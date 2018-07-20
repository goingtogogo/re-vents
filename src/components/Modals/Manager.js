import React from "react";
import { connect } from "react-redux";
import LoginModal from "./Login";
import RegisterModal from "./Register";

const modalLookUp = { LoginModal, RegisterModal };

const mapState = state => ({
  currentModal: state.modals
});

const Manager = ({ currentModal }) => {
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookUp[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

export default connect(mapState)(Manager);
