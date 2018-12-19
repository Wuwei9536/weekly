import { observable, computed, action } from "mobx";

export default class Model {
    siderList = [
        { name: "我的周报", type: "book", to: "/" },
        { name: "我的OKR", type: "calendar", to: "/okr" },
        { name: "我的关注", type: "star", to: "/attention" },
        { name: "人员列表", type: "user", to: "/staff" }
    ];
}
