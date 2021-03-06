import { observable, computed, action } from "mobx";
import moment from 'moment';

export default class Model {
  endDate ={
    thirtyOne:31,
    thirty:30,
    twentyEight:28,
    twentyNine:29,
    Jan:"1-31",
    JanDay:31,
    FebNormal:"2-28",
    FebNormalDay:28,
    FebMore:'2-29',
    FebMoreDay:29,
    Mar:'3-31',
    MarDay:31,
    Apr:'4-30',
    AprDay:30,
    May:'5-31',
    MayDay:31,
    June:'6-30',
    JuneDay:30,
    July:'7-31',
    JulyDay:31,
    Aug:'8-31',
    AugDay:31,
    Sept:'9-30',
    SeptDay:30,
    Oct:'10-31',
    OctDay:31,
    Nov:'11-30',
    NovDay:30,
    Dec:'12-31',
    DecDay:31
  }

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
