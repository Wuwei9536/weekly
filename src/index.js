import React from 'react';
import ReactDom from 'react-dom';
import history from 'utils/history';
import App from './App';
import 'antd/dist/antd.less';

history.listen((location, action) => {
    if (action === 'PUSH') {
        window.scroll(0, 0);
    }
});


ReactDom.render(
    <App history={history} />,
    document.getElementById('app')
);
