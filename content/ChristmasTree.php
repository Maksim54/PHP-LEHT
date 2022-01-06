<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="ctree.css">
    <meta charset="UTF-8">
    <title>Christmas tree</title>

    <script src="drawScript.js"></script>
</head>
<body>
<header>
    <div class="header">
        <h1>Christmas tree drawing</h1>
    </div>
</header>

<main>
    <canvas id="ctree" width="500px" height="500px">
    </canvas>
    <br>
    <input type="button" value="Delete" onclick="kustutamine()">
    <input type="button" value="Draw" onclick="draw()">
    <input type="button" value="Tree" onclick="puu()">
    <input type="button" value="Balls" onclick="pallid()">
    <input type="button" value="Star" onclick="taht()">
    <input type="button" value="Gifts" onclick="kingitused()">
</main>

</body>
</html>