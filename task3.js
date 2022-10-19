function newObj () {
    return Object.create(null)
}
newObj();
console.log(newObj())
console.log(Object.getPrototypeOf(newObj))