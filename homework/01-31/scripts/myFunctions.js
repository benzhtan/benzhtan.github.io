function sumAB(A, B) {
    return A + B;
}

function randomPosition() {
    return Math.random() * 140 + 70;
}

function returnSq(val){
    if(isNaN(val)) {
        console.log("Not a number")
    } else {
        return Math.sqrt(val);
    }
}
