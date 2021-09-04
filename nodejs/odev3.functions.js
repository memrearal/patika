let circleArea = (r) => {
    var circleArea = (Math.PI*r*r).toFixed(2);
    console.log(`Dairenin alanı: ${circleArea}`);
}

let circleCircumference = (r) => {
    var circleCircumference = (2*Math.PI*r).toFixed(2);
    console.log(`Dairenin Çevresi : ${circleCircumference}`);
}

module.exports = { circleArea, circleCircumference }