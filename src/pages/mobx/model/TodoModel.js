import { observable } from "mobx";

export default class Model {
  id = Math.random();

  @observable title;

  @observable finished = false;

  constructor(title) {
    this.title = title;
  }
}
