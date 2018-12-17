
export const OPTIONS = (k, v) => (target, key, descriptor) => {
    if (!target.prototype.options) {
        target.prototype.options = {};
    }
    target.prototype.options[k] = v;
};

export const CRENDENTIALS = str => OPTIONS('crendentials', str);

export const METHOD = str => OPTIONS('method', str);
