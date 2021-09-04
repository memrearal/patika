const arguments = process.argv.slice(2);

function circle(r){
    var circleArea = (Math.PI*r*r).toFixed(2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${circleArea}`);
}

circle(arguments[0]*1);
