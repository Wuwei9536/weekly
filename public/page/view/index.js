import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import style from '../style/index.less';


@observer
class View extends React.Component {
    render() {
        return (
            <div>Page</div>
        );
    }
}

export default View;
