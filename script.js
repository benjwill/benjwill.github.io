function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
    
    var start = new Date().getTime();
    
    function getRandomColor() {
    
    var letters = '0123456789ABCDEF'.split('');
    
    var color = '#';
    
    for (var i = 0; i < 6; i++ ) {
    
        color += letters[randInt(0, letters.length)];
    
    }
    
    return color;
    
    }
    
    function makeShapeAppear(prevTime){
        var randomColor = getRandomColor();
        var randomPos = [randInt(0, 69).toString() + "%", randInt(0, 90).toString() + "%"];
    
        var shapes = ["square", "circle"];
        var shape = shapes[randInt(0, 2)];
    
    
        document.getElementById("shape").style.backgroundColor = randomColor;
        document.getElementById("shape").style.top = randomPos[0];
        document.getElementById("shape").style.left = randomPos[1];
        document.getElementById("shape").style.display = "block";
        document.getElementById("shape").style.width = (.1111 * window.innerWidth).toString() + "px";
        document.getElementById("shape").style.height =  document.getElementById("shape").style.width;
    
    
        if(shape == shapes[0]){
            document.getElementById("shape").style.borderRadius = "100%";
        }
        else {
            document.getElementById("shape").style.borderRadius = "0%";
        }
        start = new Date().getTime();
    }
    
    function appearAfterDelay(){
        setTimeout(makeShapeAppear, Math.random() * 1000);
    }
    appearAfterDelay();
    
    document.getElementById("shape").onclick = () => {
        document.getElementById("shape").style.display = "none";
        var end = new Date().getTime();
        document.getElementById("time").innerHTML = "Your time: " + (end - start)/1000 + "s";
        appearAfterDelay();
    }
    