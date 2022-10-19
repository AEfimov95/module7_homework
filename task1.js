function keysValues (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ' имеет значение '+obj[key])
        }
    }
}
const smObj = {
    a:10,
    b:20,
    c:'hi'
}

keysValues(smObj);