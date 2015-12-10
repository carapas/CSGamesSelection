import { Flummox } from "flummox";
import AuthStore from "./stores/AuthStore";

export default class Flux extends Flummox {
  constructor(actions, currentUser) {
    super();
    this.createActions("auth", actions.AuthActions);
    this.createStore("auth", AuthStore, this, currentUser);
  }
}
