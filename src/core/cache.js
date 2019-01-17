

const cache = {}
const cacheEnum = {
    "nation": "nationCache", 'user': "userSession", 'list': 'userList', 'cardModel': 'cardModel', device: "deviceInfo", report: 'report',
    base: "baseModel", baseEdit: "baseEditCache", ocrAdd: "ocrAddCache"
};
const nation = [
    {
        "id": "10",
        "name": "汉族"
    },
    {
        "id": "11",
        "name": "壮族"
    },
    {
        "id": "12",
        "name": "满族"
    },
    {
        "id": "13",
        "name": "回族"
    },
    {
        "id": "14",
        "name": "苗族"
    },
    {
        "id": "15",
        "name": "维吾尔族"
    },
    {
        "id": "16",
        "name": "土家族"
    },
    {
        "id": "17",
        "name": "彝族"
    },
    {
        "id": "18",
        "name": "蒙古族"
    },
    {
        "id": "19",
        "name": "藏族"
    },
    {
        "id": "20",
        "name": "布依族"
    },
    {
        "id": "21",
        "name": "侗族"
    },
    {
        "id": "22",
        "name": "瑶族"
    },
    {
        "id": "23",
        "name": "朝鲜族"
    },
    {
        "id": "24",
        "name": "白族"
    },
    {
        "id": "25",
        "name": "哈尼族"
    },
    {
        "id": "26",
        "name": "哈萨克族"
    },
    {
        "id": "27",
        "name": "黎族"
    },
    {
        "id": "28",
        "name": "傣族"
    },
    {
        "id": "29",
        "name": "畲族"
    },
    {
        "id": "30",
        "name": "傈僳族"
    },
    {
        "id": "31",
        "name": "仡佬族"
    },
    {
        "id": "32",
        "name": "东乡族"
    },
    {
        "id": "33",
        "name": "拉祜族"
    },
    {
        "id": "34",
        "name": "水族"
    },
    {
        "id": "35",
        "name": "佤族"
    },
    {
        "id": "36",
        "name": "纳西族"
    },
    {
        "id": "37",
        "name": "羌族"
    },
    {
        "id": "38",
        "name": "土族"
    },
    {
        "id": "39",
        "name": "仫佬族"
    },
    {
        "id": "40",
        "name": "锡伯族"
    },
    {
        "id": "41",
        "name": "柯尔克孜族"
    },
    {
        "id": "42",
        "name": "达斡尔族"
    },
    {
        "id": "43",
        "name": "景颇族"
    },
    {
        "id": "44",
        "name": "毛南族"
    },
    {
        "id": "45",
        "name": "撒拉族"
    },
    {
        "id": "46",
        "name": "布朗族"
    },
    {
        "id": "47",
        "name": "塔吉克族"
    },
    {
        "id": "48",
        "name": "阿昌族"
    },
    {
        "id": "49",
        "name": "普米族"
    },
    {
        "id": "50",
        "name": "鄂温克族"
    },
    {
        "id": "51",
        "name": "怒族"
    },
    {
        "id": "52",
        "name": "京族"
    },
    {
        "id": "53",
        "name": "基诺族"
    },
    {
        "id": "54",
        "name": "德昂族"
    },
    {
        "id": "55",
        "name": "保安族"
    },
    {
        "id": "56",
        "name": "俄罗斯族"
    },
    {
        "id": "57",
        "name": "裕固族"
    },
    {
        "id": "58",
        "name": "乌孜别克族"
    },
    {
        "id": "59",
        "name": "门巴族"
    },
    {
        "id": "60",
        "name": "鄂伦春族"
    },
    {
        "id": "61",
        "name": "独龙族"
    },
    {
        "id": "62",
        "name": "塔塔尔族"
    },
    {
        "id": "63",
        "name": "赫哲族"
    },
    {
        "id": "64",
        "name": "高山族"
    },
    {
        "id": "65",
        "name": "珞巴族"
    }
];


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
            if (k == 'device') {
            } else {
                console.log(k)
                cache.remove(k);
            }
        });
    }
}())
if (!cache.get(cacheEnum["nation"])) {
    cache.set(cacheEnum.nation, nation);
}

window.$cache = cache;
export { cache, cacheEnum }