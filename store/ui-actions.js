import { uiActions } from "./ui-slice";
import store from "./index";

export function openModal(dispatch, modal) {
  dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: true }));
  dispatch(uiActions.openModal({ modal, open: true }));

  const ui = store.getState().ui;
}
