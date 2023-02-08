<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>

<body>
    <div class="clock-house">
        <h2 id="clock"></h2>
        <form action="" class="setAlarm" id="form">
            <input id="task" type="text" placeholder="Type a task">
            <select id="hour">
                <?php
                for ($hour = 1; $hour <= 12; $hour++) {
                ?>
                    <?php
                    // $num = sprintf("%02d", $hour);
                    // if ($num == "24") {
                    //     $num = "00";
                    // }

                    ?>
                    <option><?php echo $hour ?></option>
                <?php
                }
                ?>
                <!-- <option value="volvo">teste</option> -->

            </select>
            <select id="minute">
                <?php
                for ($minuets = 0; $minuets <= 59; $minuets++) {
                ?>
                    <?php $num = sprintf("%02d", $minuets);
                    // if ($num == "24") {
                    //     $num = "00";
                    // }

                    ?>
                    <option><?php echo $num ?></option>
                <?php
                }
                ?>
                <!-- <option value="volvo">teste</option> -->

            </select>
            <select id="AMPM">
                <option value="AM">AM</option>
                <option value="PM">PM</option>

            </select>
            <input type="hidden" value="00" id="seconds">
            <button type="submit" class="submitBtn">Set</button>
            <!-- <input class="submitBtn" type="button" placeholder="Set Alarm"> -->

        </form>


    </div>


</body>

</html>