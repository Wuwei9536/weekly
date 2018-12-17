
import RequestCore from './core';
import {
    CRENDENTIALS,
    HEADERS,
    FORMATBODY,
    FORMATQUERY,
    FORMATFORMDATA,
    INTERCEPTOR,
    METHOD
} from './@/index';


@HEADERS('content-type', 'application/json')
@CRENDENTIALS('include')
@INTERCEPTOR('response', (res) => {
    res.hello = 1231412;
    return res;
})
class Request extends RequestCore {
    request
}
// Request.prototype.request = [];
// Request.prototype.response = [];

@METHOD('GET')
@FORMATQUERY
class GetClass extends Request {}

@METHOD('POST')
@FORMATFORMDATA
@FORMATQUERY
class FormClass extends Request {}

@METHOD('POST')
@FORMATBODY
@FORMATQUERY
class PostClass extends Request {}


const Post = new PostClass();
const Get = new GetClass();
const Form = new FormClass();


export {
    Post,
    Get,
    Form
};
