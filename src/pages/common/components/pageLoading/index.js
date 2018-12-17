import React from 'react';

const PageLoading = ({ error }) => {
    if (error) {
        console.error(error);
        return (
            <div>error</div>
        );
    } else {
        return null;
    }
};

export default PageLoading;
