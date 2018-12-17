
const request = require('request');
const prompt = require('prompt');
const config = require('../config/jenkins.config');

console.log(' ======== JENKINS PUBLISH ========');
console.table([
    config
]);

const schema = {
    properties: {
        LDAP_USER: {
            required: true
        },
        LDAP_PASSWORD: {
            replace: '*',
            require: true,
            hidden: true

        }
    }
};

prompt.get(schema, (err, result) => {
  const { LDAP_USER, LDAP_PASSWORD } = result;
  request(`http://${LDAP_USER}:${LDAP_PASSWORD}@${config.url}/job/${config.project}/buildWithParameters?token=${config.token}&git_branch=${config.branch}`, (error, response, body) => {
      if (!body) {
        console.log('启动构建');
      } else {
          console.log('登录信息异常，请重试\n', body);
      }
    });
});

prompt.start();
