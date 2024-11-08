import { uiActions } from "./ui-slice";
// import store from "./index";

export function openModal(dispatch, modal) {
  console.log("openModal Called")
  dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: true }));
  dispatch(uiActions.openModal({ modal, open: true }));

  // const ui = store.getState().ui;
}
