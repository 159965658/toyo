

const cache = {}
const cacheEnum = {
    "nation": "nationCache", 'user': "userSession", 'list': 'userList', 'cardModel': 'cardModel', device: "deviceInfo", report: 'report',
    base: "baseModel", baseEdit: "baseEditCache", ocrAdd: "ocrAddCache"
};
(function () {

    cache.get = (key) => {
        const c = window.sessionStorage.getItem(key);
        if (c) {
            return JSON.parse(c);
        }
        return null;
    }
    cache.set = (key, object) => {
        window.sessionStorage.setItem(key, JSON.stringify(object));
    }
    cache.remove = (key) => {
        window.sessionStorage.removeItem(key);
    }
    cache.getUser = () => {
        return cache.get(cacheEnum['user']);
    }
    cache.setUser = (obj) => {
        cache.set(cacheEnum['user'], obj)
    }
    cache.getBase = () => {
        return cache.get(cacheEnum['base']);
    }
    cache.setBase = (obj) => {
        cache.set(cacheEnum['base'], obj)
    }
    cache.removeAll = () => {
        Object.keys(cacheEnum).forEach(k => {
            cache.remove(k);
        });
    }
}())


window.$cache = cache;
export { cache, cacheEnum }