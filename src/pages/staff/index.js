import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import connect from 'src/utils/connect';
import View from "./view";
import Model from "./model";
import Loading from './view/loading';

const Store = new Model();
const Project = connect(Store)({ View, Loading });
const Page = ({ match }) => (
    <Switch>
        <Route path={`${match.url}`} exact component ={Project} />
    </Switch>
);

Page.propTypes = {
    match: PropTypes.shape({
        url:PropTypes.string.isRequired
    }).isRequired
};

export default Project;
