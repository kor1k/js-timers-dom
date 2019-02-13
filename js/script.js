const timeout = document.getElementById('timeout');

timeout.onclick = () => setTimeout(function () {
    alert(`ping is high i am not a noob`)
}, 2000);

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    },500)
}