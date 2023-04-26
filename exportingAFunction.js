console.log("coming to exportFunction");

const add = (a, b) => {
    console.log("adding : ", a, b);
    return a + b;
}

module.exports =  { add };