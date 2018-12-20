import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import moment from 'moment';
import { Tag, Row, Col, Form, Card, Select, List, Avatar, Button } from 'antd';
import style from '../style/index.less';
import store from "../../../server/context";
import ListView from './list-view';


const Option = Select.Option;
const FormItem = Form.Item;

@observer
class View extends React.Component {
    constructor() {
        super();
        this.state = {
            timeShow: []
        };
    }

    static propTypes = {
        store: PropTypes.shape({
            siderList: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired,
        route: PropTypes.shape({
            routes: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired
    }

    componentDidMount() {
        this.timeShowByMonth(moment().month());
    }

    timeShowByMonth = (month) => {
        switch (month) {
            case 0:
                {
                    let timeShowOne = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                    this.setState({ timeShow: timeShowOne });
                }
                break;
            case 1:
                {
                    let timeShowOne = this.judgeMouthWeek(month, moment('1-31').date(), moment('1-31').day(), 31);
                    let timeShowTwo = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 28);
                    this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
                }
                break;
            case 2:
                {
                    let timeShowOne = this.judgeMouthWeek(month - 1, moment('1-31').date(), moment('1-31').day(), 31);
                    let timeShowTwo = this.judgeMouthWeek(month, moment('2-28').date(), moment('2-28').day(), 28);
                    let timeShowThree = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                    this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                }
                break;
            case 3:
                {
                    let timeShowOne = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                    this.setState({ timeShow: timeShowOne });
                }
                break;
            case 4:
                {
                    let timeShowOne = this.judgeMouthWeek(month, moment('4-30').date(), moment('4-30').day(), 30);
                    let timeShowTwo = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                    this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
                }
                break;
            case 5:
                {
                    let timeShowOne = this.judgeMouthWeek(month - 1, moment('4-30').date(), moment('4-30').day(), 30);
                    let timeShowTwo = this.judgeMouthWeek(month, moment('5-31').date(), moment('5-31').day(), 31);
                    let timeShowThree = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                    this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                }
                break;
            case 6:
                {
                    let timeShowOne = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                    this.setState({ timeShow: timeShowOne });
                }
                break;
            case 7:
                {
                    let timeShowOne = this.judgeMouthWeek(month, moment('7-31').date(), moment('7-31').day(), 31);
                    let timeShowTwo = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                    this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
                }
                break;
            case 8:
                {
                    let timeShowOne = this.judgeMouthWeek(month - 1, moment('7-31').date(), moment('7-31').day(), 31);
                    let timeShowTwo = this.judgeMouthWeek(month, moment('8-31').date(), moment('8-31').day(), 31);
                    let timeShowThree = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                    this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                }
                break;
            case 9:
                {
                    let timeShowOne = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                    this.setState({ timeShow: timeShowOne });
                }
                break;
            case 10:
                {
                    let timeShowOne = this.judgeMouthWeek(month, moment('10-31').date(), moment('10-31').day(), 31);
                    let timeShowTwo = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                    this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
                }
                break;
            case 11:
                {
                    let timeShowOne = this.judgeMouthWeek(month - 1, moment('10-31').date(), moment('10-31').day(), 31);
                    let timeShowTwo = this.judgeMouthWeek(month, moment('11-30').date(), moment('11-30').day(), 30);
                    let timeShowThree = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                    this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                }
                break;
            default:
                break;
        }
    }

    judgeMouthWeek = (month, date, day, maxdate) => {
        if (day === 0) {
            day = 7;
        }
        if ((date - day + 7) < 7) {
            return [];
        }
        let week = 1 + Math.floor((date - day) / 7);
        let weekTime = month + "月" + (date - day + 1) + "日-" + month + "月" + (date - day + 7) + "日";
        if (date - day + 7 > maxdate) {
            let monthAddOne = month + 1;
            if (month === 12) {
                monthAddOne = 1;
            }
            weekTime = month + "月" + (date - day + 1) + "日-" + monthAddOne + "月" + (date - day + 7 - maxdate) + "日";
        }
        let curtimeShow = [{ month, week, weekTime }];
        date -= 7;
        let subTimeShow = this.judgeMouthWeek(month, date, day, 100);
        let timeShow = curtimeShow.concat(subTimeShow);
        return timeShow;
    }


    initTimeShow = (year, month, quarter) => { // month为moment().month()+1
        const { store } = this.props;
        const { Jan, FebNormal, FebMore, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec,
            thirtyOne, thirty, twentyEight, twentyNine } = store.endDate;
        let endMonth = quarter * 3; // 季度最后月
        let dayNumber = []; // 包括季度各个月的天数
        let lastDay = []; // 季度各个月的最后一天日期
        let specMonth = []; // 季度具体月份
        if (quarter === 1) {
            if (year % 4 !== 0) {
                specMonth = [1, 2, 3];
                lastDay = [Jan, FebNormal, Mar];
                dayNumber = [thirtyOne, twentyEight, thirtyOne];
            } else {
                specMonth = [1, 2, 3];
                lastDay = [Jan, FebMore, Mar];
                dayNumber = [thirtyOne, twentyNine, thirtyOne];
            }
        } else if (quarter === 2) {
            specMonth = [4, 5, 6];
            lastDay = [Apr, May, June];
            dayNumber = [thirty, thirtyOne, thirty];
        } else if (quarter === 3) {
            specMonth = [7, 8, 9];
            lastDay = [July, Aug, Sept];
            dayNumber = [thirtyOne, thirtyOne, thirty];
        } else if (quarter === 4) {
            specMonth = [10, 11, 12];
            lastDay = [Oct, Nov, Dec];
            dayNumber = [thirtyOne, thirty, thirtyOne];
        }
        if (month > endMonth) {
            let timeShowThree = this.judgeMouthWeek(specMonth[2], moment(lastDay[2]).date(), moment(lastDay[2]).day(), dayNumber[2]);
            let timeShowTwo = this.judgeMouthWeek(specMonth[1], moment(lastDay[1]).date(), moment(lastDay[1]).day(), dayNumber[1]);
            let timeShowOne = this.judgeMouthWeek(specMonth[0], moment(lastDay[0]).date(), moment(lastDay[0]).day(), dayNumber[0]);
            this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
        } else if (month % 3 === 0) {
            let timeShowThree = this.judgeMouthWeek(specMonth[2], moment().date(), moment().day(), dayNumber[2]);
            let timeShowTwo = this.judgeMouthWeek(specMonth[1], moment(lastDay[1]).date(), moment(lastDay[1]).day(), dayNumber[1]);
            let timeShowOne = this.judgeMouthWeek(specMonth[0], moment(lastDay[0]).date(), moment(lastDay[0]).day(), dayNumber[0]);
            this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
        } else if (month % 3 === 2) {
            let timeShowTwo = this.judgeMouthWeek(specMonth[1], moment().date(), moment().day(), dayNumber[1]);
            let timeShowOne = this.judgeMouthWeek(specMonth[0], moment(lastDay[0]).date(), moment(lastDay[0]).day(), dayNumber[0]);
            this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
        } else if (month % 3 === 1) {
            let timeShowOne = this.judgeMouthWeek(specMonth[0], moment().date(), moment().day(), dayNumber[0]);
            this.setState({ timeShow: timeShowOne });
        }
    }

    quarter = (e) => {
        let month = moment().month()+1;
        let year = moment().year();
        switch (e) {
            case "Q1":
            this.initTimeShow(year, month, 1);
                // if (month > 2) {
                //     const a = '3-31';
                //     let timeShowThree = this.judgeMouthWeek(3, moment(a).date(), moment('3-31').day(), 31);
                //     let timeShowTwo = this.judgeMouthWeek(2, moment('2-28').date(), moment('2-28').day(), 28);
                //     let timeShowOne = this.judgeMouthWeek(1, moment('1-31').date(), moment('1-31').day(), 31);
                //     this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                // }
                // if (month === 2) {
                //     let timeShowThree = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                //     let timeShowTwo = this.judgeMouthWeek(month, moment('2-28').date(), moment('2-28').day(), 28);
                //     let timeShowOne = this.judgeMouthWeek(month - 1, moment('1-31').date(), moment('1-31').day(), 31);
                //     this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                // }
                // if (month === 1) {
                //     let timeShowTwo = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 28);
                //     let timeShowOne = this.judgeMouthWeek(month, moment('1-31').date(), moment('1-31').day(), 31);
                //     this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
                // }
                // if (month === 0) {
                //     let timeShowOne = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                //     this.setState({ timeShow: timeShowOne });
                // }
                break;
            case "Q2":
            this.initTimeShow(year, month, 2);
                // if (month > 5) {
                //     let timeShowThree = this.judgeMouthWeek(6, moment('6-30').date(), moment('6-30').day(), 30);
                //     let timeShowTwo = this.judgeMouthWeek(5, moment('5-31').date(), moment('5-31').day(), 31);
                //     let timeShowOne = this.judgeMouthWeek(4, moment('4-30').date(), moment('4-30').day(), 30);
                //     this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                // }
                // if (month === 5) {
                //     let timeShowThree = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                //     let timeShowTwo = this.judgeMouthWeek(month, moment('5-31').date(), moment('5-31').day(), 31);
                //     let timeShowOne = this.judgeMouthWeek(month - 1, moment('4-30').date(), moment('4-30').day(), 30);
                //     this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                // }
                // if (month === 4) {
                //     let timeShowTwo = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                //     let timeShowOne = this.judgeMouthWeek(month, moment('4-30').date(), moment('4-30').day(), 30);
                //     this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
                // }
                // if (month === 3) {
                //     let timeShowOne = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                //     this.setState({ timeShow: timeShowOne });
                // }
                break;
            case "Q3":
            this.initTimeShow(year, month, 3);
                // if (month > 8) {
                //     let timeShowThree = this.judgeMouthWeek(9, moment('9-30').date(), moment('9-30').day(), 30);
                //     let timeShowTwo = this.judgeMouthWeek(8, moment('8-31').date(), moment('8-31').day(), 31);
                //     let timeShowOne = this.judgeMouthWeek(7, moment('7-31').date(), moment('7-31').day(), 31);
                //     this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                // }
                // if (month === 8) {
                //     let timeShowThree = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                //     let timeShowTwo = this.judgeMouthWeek(month, moment('8-31').date(), moment('8-31').day(), 31);
                //     let timeShowOne = this.judgeMouthWeek(month - 1, moment('7-31').date(), moment('7-31').day(), 31);
                //     this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                // }
                // if (month === 7) {
                //     let timeShowTwo = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                //     let timeShowOne = this.judgeMouthWeek(month, moment('7-31').date(), moment('7-31').day(), 31);
                //     this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
                // }
                // if (month === 6) {
                //     let timeShowOne = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                //     this.setState({ timeShow: timeShowOne });
                // }
                break;
            case "Q4":
            this.initTimeShow(year, month, 4);
                // if (month === 11) {
                //     let timeShowThree = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                //     let timeShowTwo = this.judgeMouthWeek(month, moment('11-30').date(), moment('11-30').day(), 30);
                //     let timeShowOne = this.judgeMouthWeek(month - 1, moment('10-31').date(), moment('10-31').day(), 31);
                //     this.setState({ timeShow: timeShowThree.concat(timeShowTwo, timeShowOne) });
                // }
                // if (month === 10) {
                //     let timeShowTwo = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 30);
                //     let timeShowOne = this.judgeMouthWeek(month, moment('10-31').date(), moment('10-31').day(), 31);
                //     this.setState({ timeShow: timeShowTwo.concat(timeShowOne) });
                // }
                // if (month === 9) {
                //     let timeShowOne = this.judgeMouthWeek(month + 1, moment().date(), moment().day(), 31);
                //     this.setState({ timeShow: timeShowOne });
                // }
                break;

            default:
                break;
        }
    }


    render() {
        const { store } = this.props;
        const { timeShow } = this.state;
        return (
            <Card>
                <Form layout="inline">
                    <FormItem>
                        <Select defaultValue="2018" style={{ width: 190 }}>
                            <Option value="2018">2018</Option>
                            <Option value="2019" disabled>2019</Option>
                            <Option value="2020" disabled>2020</Option>
                            <Option value="2021" disabled>2021</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Select defaultValue="Q4" style={{ width: 190 }} onChange={this.quarter}>
                            <Option value="Q1">Q1</Option>
                            <Option value="Q2">Q2</Option>
                            <Option value="Q3">Q3</Option>
                            <Option value="Q4">Q4</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <span>...的周报</span>
                    </FormItem>
                </Form>
                <ListView
                    data={timeShow}
                    store={store.data.weeklyInfo}
                />
            </Card>
        );
    }
}

export default View;
