import { Request, Get, Post, Form } from 'utils/request/index.js';


export const getOkrDetail = Form({
    url:'/form',
    body: {
        name: '12312412'
    }
}).then((res) => {
    console.log(res);
});


Post({
    url: '/post',
    body: {
        hello: '2123124'
    },
    query: {
        name: '12313'
    }
}).then((res) => {
    console.log(res);
});

Get({
    url: '/get',
    query: {
        name: 31231321
    }
}).then((res) => {
    console.log(res);
});
