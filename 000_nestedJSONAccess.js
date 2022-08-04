let myJson = {
    "sample": {
        "prop_one": {
            "desktop": {
                "aaa": {
                    "bb": "tt",
                    "bbb": "",
                    "ccc": ""
                },
                "bbb": "",
                "ccc": ""
            },
            "mobile": {
                "aaa": "",
                "bbb": "",
                "ccc": ""
            }
        }
    }
};

console.log(myJson['sample'])

function myFunc(key) {
    const value = key.split('.').reduce((o, i) => o[i], myJson['sample']);
    return value
}

let x = myFunc('prop_one.desktop.aaa.bb');

console.log(x);