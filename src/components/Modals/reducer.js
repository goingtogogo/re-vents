import { MODAL_OPEN, MODAL_CLOSE } from "./constants";
import { createReducer } from "../../common/reducer";

const initialState = null;

export const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  console.log("payload:", payload);
  return { modalType, modalProps };
};

export const closeModal = (state, payload) => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
