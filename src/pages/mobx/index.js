import React from 'react';
import connect from 'src/utils/connect';
import View from "./view";
import Model from "./model";
import Loading from './view/loading';
import Style from "./style/index.less";

const Store = new Model();
const Page = connect(Store)({ View, Loading, Style });

export default Page;
