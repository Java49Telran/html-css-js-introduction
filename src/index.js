async function callMe() {
    try {
        console.log(1);
        const p1 = crazyFunction(100000, "crazy1000");
        const p2 = crazyFunction(2000, "crazy2000");
        Promise.race([p1, p2]).then((messages) => console.log(messages));
    } catch (error) {
        console.log("error")
    }

}
function crazyFunction(timeout, message) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            
           res(message)
        }, timeout);
    });
}
callMe();