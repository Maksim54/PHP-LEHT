<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Lagunovski PHP leht</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/ctree.css">
    <script src="js/legoScript.js"></script>
    <script src="js/pazlScript.js"></script>
    <script src="js/calcJava.js"></script>
    <script src="js/drawScript.js"></script>
</head>
<body>
<?php
include('header.php');
include('navigation.php');

?>
<!--main-->
<main>
    <?php
    if(isset($_GET['leht'])){
        include('content/'.$_GET['leht'].'.php');
    } else{
        include ('content/_main.php');
    }
    ?>
</main>

<?php
include('footer.php');
?>

</body>
<footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript">
        var timestamp = '<?=time();?>';
        function updateTime(){
            $('#time').html(Date(timestamp));
            timestamp++;
        }
        $(function(){
            setInterval(updateTime, 1000);
        });
    </script>

</footer>
</html>