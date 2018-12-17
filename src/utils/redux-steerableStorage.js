import WebStorage from './steerableStorage';

function steerableStorage(storage, namespace) {
    const STORAGE = new WebStorage(storage, namespace);
    return store => next => (action) => {
        const { storage, payload, type } = action;
        switch (storage) {
        case 'get':
            return next({
                ...action,
                payload: STORAGE.getItem(type)
            });
        case 'save':
            STORAGE.setItem(type, payload);
            break;
        case 'remove':
            STORAGE.removeItem(type);
            break;
        case 'clear':
            STORAGE.clear();
            break;
        default: break;
        }
        return next(action);
    };
}

export default steerableStorage;

