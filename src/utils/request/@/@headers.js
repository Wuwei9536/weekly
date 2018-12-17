
export const HEADERS = (k, v) => (target, key, descriptor) => {
    if (!target.prototype.headers) {
        target.prototype.headers = new Headers({});
    }
    target.prototype.headers.append(k, v);
};

export const AUTHORIZATION = str => HEADERS('authorization', str);
