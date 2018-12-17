import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoading from 'pages/common/components/pageLoading';
import Error from 'pages/common/error';
import Demo from 'pages/mobx';

export default [{
    path: '/',
    component: Demo,
    routes: [
      {
        path: '/',
        component: Demo,
        exact: true,
        key: 'home'
      },
      {
        component: Error
      }
    ]
  }];
