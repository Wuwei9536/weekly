import React from 'react';
import ContentLoader from 'react-content-loader';
import style from '../style/index.less';

export default () => (
    <div>
        <div className={style.main} />
        asdasda
        <ContentLoader width="10" height="16">
            <rect width="6" height="0.9" y="1" x="2" />
            <rect width="6" height="0.9" y="2" x="2" />
            <rect width="6" height="0.9" y="3" x="2" />
            <rect width="6" height="0.9" y="4" x="2" />
            <rect width="6" height="0.9" y="5" x="2" />
            <rect width="6" height="0.9" y="6" x="2" />
        </ContentLoader>
    </div>
);
