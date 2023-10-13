//Never declare global variable unless it is deemed very necessary
let a = 5;
function add(x) {
    console.log(a + x);
}
add(23);