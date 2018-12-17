// import { observable, computed, action } from "mobx";
// import SteerableStorage from 'src/utils/steerableStorage';
// import history from 'utils/history';
// import { logIn, getUserInfo, logOut, getNavigationList } from './service';

class Store {
    // @observable
    cssStore = new Set([])

    // @computed
    get css() {
        return [...this.cssStore];
    }

    // @action
    setCSS = obj => this.cssStore.add(obj);
}

const store = new Store();
export default store;
