// const qs = require('qs');
import qs from 'qs';

export const INTERCEPTOR = (key, func) => (target, name, descriptor) => {
    console.log('interceptor', target, name, descriptor);
    if (!target.prototype[key]) {
        console.log('havent', key);
        target.prototype[key] = [];
    }
    target.prototype[key].push(func);
};

export const FORMATBODY = INTERCEPTOR(
    'request',
    (opt) => {
        const options = { ...opt };
        options.body = JSON.stringify(options.body);
        return options;
    }
);

export const FORMATQUERY = INTERCEPTOR(
    'request',
    (opt) => {
        const options = { ...opt };
        if (qs.stringify(options.query)) {
            options.url += ('?' + qs.stringify(options.query));
        }
        return options;
    }
);

export const FORMATFORMDATA = INTERCEPTOR(
    'request',
    (opt) => {
        const options = { ...opt };
        const formData = new FormData();
        for (let i in options.body) {
            formData.append(i, options.body[i]);
        }
        options.body = formData;
        return options;
    }
);
