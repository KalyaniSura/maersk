window.onload=function(){
    let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let cubeWrapper="";

    numbersArray.forEach((item, index) => {
        cubeWrapper += '<li data-item=' + item + '>' + item + '</li>'
    })
    document.getElementById("shuffleAndSort").innerHTML=cubeWrapper;

    var list = document.getElementById("shuffleAndSort"),
    button = document.getElementById("shuffle");
    function shuffle(items)
    {
        var cached = items.slice(0), temp, i = cached.length, rand;
        while(--i)
        {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }
    function shuffleNodes()
    {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while(i < nodes.length)
        {
            list.appendChild(nodes[i]);
            ++i;
        }
    } 

    function sortNodes() {
        var nodes = list.children;
        if(nodes.length>0) {
            numbersArray.forEach((item, index) => {
                const node = document.getElementById("shuffleAndSort").lastElementChild;
                document.getElementById("shuffleAndSort").removeChild(node)
            })
        }

        document.getElementById("shuffleAndSort").innerHTML =cubeWrapper;
    }

    document.getElementById("shuffle").onclick = shuffleNodes;
    document.getElementById("sort").onclick = sortNodes;
    
} 