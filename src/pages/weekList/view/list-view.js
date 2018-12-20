import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import ListItem from './list-item';


export default class ListView extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
        store: PropTypes.shape({}).isRequired
    }

    render() {
        const { data, store } = this.props;
        const { qWeeks } = store;
        return (
            <>
                {data.map((item, index) => {
                    let bool = false;
                    let box = {};
                    for (let i in qWeeks) {
                        if (qWeeks[i].weeklyVo.month === item.month && qWeeks[i].weeklyVo.week === item.week) {
                            bool = true;
                            box = { details1: qWeeks[i].details1, details2: qWeeks[i].details2 };
                        }
                    }
                    return (
                        <ListItem
                            data={item}
                            bool={bool}
                            box={box}
                            index={index}
                        />
                        // <Row className={style.cardList}>
                        //     <Col span={4}>
                        //         <p className={style.monthWeek}>
                        //             <span>Week</span>
                        //             {item.month}
                        //             <span>-</span>
                        //             {item.week}
                        //         </p>
                        //         <p>{item.weekTime}</p>
                        //         <p>评论</p>
                        //     </Col>
                        //     <Col span={20}>
                        //         {
                        //             bool
                        //             ? (
                        //                 <Card bordered={false} className={style.greyBackground}>
                        //                     <div className={style.cardItem}>
                        //                         <Tag color="#87d068">进展</Tag>
                        //                         <p className={style.noBottom}>{box.details1}</p>
                        //                     </div>
                        //                     <div className={style.cardItem}>
                        //                         <Tag color="#87d068">进展</Tag>
                        //                         <p className={style.noBottom}>{box.details2}</p>
                        //                     </div>
                        //                     <div className={style.cardItem}>
                        //                         <Tag color="#87d068">进展</Tag>
                        //                         <p className={style.noBottom}>Card content</p>
                        //                     </div>
                        //                 </Card>) : null
                        //         }
                        //         {
                        //             (index === 0 && item.month === moment().month() + 1 && !bool)
                        //                 ? (
                        //                     <Card bordered={false} className={style.textCenter}>
                        //                         <p>你还未填写本周周报，是否新建?</p>
                        //                         <Button type="primary">新建周报</Button>
                        //                     </Card>) : null}
                        //         {
                        //             (!bool && (index !== 0 || item.month !== moment().month() + 1))
                        //             ? (
                        //                 <Card bordered={false} className={style.textCenter}>
                        //                     <p>你未填写本周周报</p>
                        //                 </Card>
                        //             ) : null
                        //         }
                        //     </Col>
                        // </Row>
                    );
                })}
            </>
        );
    }
}
