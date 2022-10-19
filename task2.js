const valueValid = (string, obj) => string in obj;

const firstObj = {
    a: 'smb',
    b: 'Moscow',
    c: 'Elma'
}

const secondObj = {
    xxx: 'smthng',
    yyy: 'Moscow',
    zzz: 'car'
}

console.log(valueValid('xxx', firstObj))
console.log(valueValid('a', secondObj))
console.log(valueValid('a', firstObj))