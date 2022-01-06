function kustutamine(){
    var tree2=document.getElementById("ctree").getContext("2d");
    tree2.clearRect(0, 0, 500, 500);
}

function draw(){
    var draw=document.getElementById("ctree").getContext("2d");
}

function puu(){ // ذ•ذ»ذ؛ذ°
    var tree=document.getElementById("ctree").getContext("2d");
    var tree1=tree;
    var t2=tree;
    var t3=tree;
    tree1.strokeStyle = "#8B4513";
    tree1.fillStyle="#8B4513";
    tree1.beginPath();
    tree1.fill();
    tree1.fillRect(210, 400, 60, 100);
    tree1.stroke();

    tree1.strokeStyle = "#006400";
    tree1.fillStyle="#006400";
    tree1.beginPath();
    tree1.lineTo(400,400);
    tree1.lineTo(240,280);
    tree1.lineTo(100,400);
    tree1.fill();
    tree1.stroke();

    t2.strokeStyle = "#006400";
    t2.fillStyle="#006400";
    t2.beginPath();
    t2.lineTo(380,355);
    t2.lineTo(240,240);
    t2.lineTo(120,355);
    t2.fill();
    t2.stroke();

    t3.fillStyle="#006400";
    t3.beginPath();
    t3.lineTo(350,300);
    t3.lineTo(240,180);
    t3.strokeStyle = "#006400";
    t3.lineTo(150,300);
    t3.fill();
    t3.stroke();
}

function pallid(){
    var x=150, y=310, r=10;
    var x2=120, y2=365, r2=10;
    var x3=100, y3=410, r3=10;
    var x4=348, y4=310, r4=10;
    var x5=378, y5=365, r5=10;
    var x6=398, y6=410, r6=10;

    var pall=document.getElementById("ctree").getContext("2d");
    var pall2=pall;
    var pall3=pall;
    var pall4=pall;
    var pall5=pall;
    var pall6=pall;

    pall.strokeStyle="#49d649";
    pall.fillStyle="#49d649";
    pall.beginPath()
    pall.arc(x, y, r, 0, 2*Math.PI, true);
    pall.stroke() // joon
    pall.fill(); // taust

    pall2.strokeStyle="#c90425";
    pall2.fillStyle="#c90425";
    pall2.beginPath()
    pall2.arc(x2, y2, r2, 0, 2*Math.PI, true);
    pall2.stroke() // joon
    pall2.fill(); // taust

    pall3.strokeStyle="orange";
    pall3.fillStyle="orange";
    pall3.beginPath()
    pall3.arc(x3, y3, r3, 0, 2*Math.PI, true);
    pall3.stroke() // joon
    pall3.fill(); // taust

    pall4.strokeStyle="#281ee8";
    pall4.fillStyle="#281ee8";
    pall4.beginPath()
    pall4.arc(x4, y4, r4, 0, 2*Math.PI, true);
    pall4.stroke() // joon
    pall4.fill(); // taust

    pall5.strokeStyle="#b55cbf";
    pall5.fillStyle="#b55cbf";
    pall5.beginPath()
    pall5.arc(x5, y5, r5, 0, 2*Math.PI, true);
    pall5.stroke() // joon
    pall5.fill(); // taust

    pall6.strokeStyle="#e8e120";
    pall6.fillStyle="#e8e120";
    pall6.beginPath()
    pall6.arc(x6, y6, r6, 0, 2*Math.PI, true);
    pall6.stroke() // joon
    pall6.fill(); // taust
}

function taht(){
    var taht=document.getElementById("ctree").getContext("2d");
    taht.strokeStyle = "yellow";
    taht.fillStyle="yellow";
    taht.beginPath();
    taht.lineTo(240,100);
    taht.lineTo(255,130);
    taht.lineTo(285,135);
    taht.lineTo(255,155);
    taht.lineTo(270,190);
    taht.lineTo(240,180);

// left side
    taht.lineTo(240,100);
    taht.lineTo(225,130);
    taht.lineTo(195,135);
    taht.lineTo(225,155);
    taht.lineTo(210,190);
    taht.lineTo(240,180);
    taht.stroke();
    taht.fill();
    taht.lineWidth=4;
}

function kingitused(){
    var king=document.getElementById("ctree").getContext("2d");
    var king2=king;
    var king3=king;
    var king4=king;
    var king5=king;
    var king6=king;
    var king7=king;


    king.strokeStyle = "#ff0000";
    king.fillStyle="#ff0000";
    king.beginPath();
    king.fillRect(280, 440, 60, 60);
    king.fillRect(140, 440, 60, 60);
    king.fill();
    king.stroke();

    king2.strokeStyle = "lightgreen";
    king2.fillStyle="lightgreen";
    king2.beginPath();
    king2.lineTo(170,440);
    king2.lineTo(170,500);
    king2.lineWidth=5;
    king2.stroke();

    king3.strokeStyle = "#0004ff";
    king3.fillStyle="#0004ff";
    king3.beginPath();
    king3.lineTo(310,440);
    king3.lineTo(310,500);
    king3.lineWidth=5;
    king3.stroke();

    king4.strokeStyle = "lightgreen";
    king4.fillStyle="lightgreen";
    king4.beginPath();
    king4.lineTo(140,470);
    king4.lineTo(200,470);
    king4.lineWidth=5;
    king4.stroke();

    king5.strokeStyle = "#0004ff";
    king5.fillStyle="#0004ff";
    king5.beginPath();
    king5.lineTo(280,470);
    king5.lineTo(340,470);
    king5.lineWidth=5;
    king5.stroke();

    king6.strokeStyle = "#0004ff";
    king6.fillStyle="#0004ff";
    king6.beginPath();
    king6.lineTo(280,470);
    king6.lineTo(340,470);
    king6.lineWidth=5;
    king6.stroke();
}

function draw(){
    puu();
    pallid();
    taht();
    kingitused();
}