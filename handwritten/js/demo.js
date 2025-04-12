let arr = {
    name: "demo",
    arr1: [1, 2, 3],
    obj1: {
        a: 1,
        b: 2
    },
    fun1: function(){
        console.log("test");
    }
}
let cloneObj = JSON.parse(JSON.stringify(arr))
console.log(cloneObj)