import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoading from 'pages/common/components/pageLoading';
import Error from 'pages/common/error';
import Demo from 'pages/mobx';
import Report from 'pages/report';
import WeekList from 'pages/weekList';
import Okr from 'pages/okr';
import Attention from 'pages/attention';
import Staff from 'pages/staff';

export default [{
    path: '/',
    component: Report,
    routes: [
      {
        path: '/',
        component: WeekList,
        exact: true,
        key: 'home'
      },
      {
        path: '/OKR',
        component: Okr,
        exact: true,
        key: 'OKR'
      },
      {
        path: '/attention',
        component: Attention,
        exact: true,
        key: 'attention'
      },
      {
        path: '/staff',
        component: Staff,
        exact: true,
        key: 'staff'
      },
      {
        component: Error
      }
    ]
  }];
