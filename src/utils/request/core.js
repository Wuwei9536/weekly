import 'whatwg-fetch';

export default class RequestCore {
    constructor(request, response) {
        this.request = request;
        this.response = response;
        return this.fetch();
    }

    fetch = () => async (options) => {
        console.log(this);
        const input = this.interceptor(options, this.request);
        const { url, ...opt } = input;
        const response = await fetch(url, { ...opt, headers: this.headers, ...this.options });
        const output = this.interceptor(response, this.response);
        return output;
    }

    static request = []

    interceptor = (opt, interArr = []) => {
        let req = opt;
        interArr.forEach((item) => {
            const res = item(req);
            if (res) {
                req = res;
            }
        });
        console.log(req);
        return req;
    }
}

// RequestCore.prototype.request = [];
// RequestCore.prototype.response = [];
