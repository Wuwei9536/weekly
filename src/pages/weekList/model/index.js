import { observable, computed, action } from "mobx";
import moment from 'moment';

export default class Model {
  datanull = {
    content: "你未填写本周的周报"
  }

  dataQ4 = [{
    month: 12,
    week: 4
  }]

  data = {
    "weeklyInfo": {
      "isUser": 1,
      "userName": "刘美莹",
      "year": 2018,
      "qType": 1,
      "qWeeks": [{
        "weeklyVo": {
          "weeklyId": 1,
          "userName": "lala",
          "startTime": 156655445653,
          "noEditTime": 156655445653,
          "month": 12,
          "week": 2,
          "weekTime": "8月13日 - 8月19日"
        },
        "details1": "进展进展进展",
        "weeklyType1": 1,
        "details2": "进展进展进展",
        "weeklyType2": 1,
        "commentCount": 8
      },
      {
        "weeklyVo": {
          "weeklyId": 12345,
          "userName": "lala",
          "startTime": 156655445653,
          "noEditTime": 156655445653,
          "month": 6,
          "week": 5,
          "weekTime": "8月13日 - 8月19日"
        },
        "details1": "进展进展进展",
        "weeklyType1": 1,
        "details2": "计划计划计划",
        "weeklyType2": 2,
        "commentCount": 8
      }
      ]
    }
  }
}
