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
    <button id="AlarmClock">Alarm Clock</button>
    <button id="StopWatch">Stop Watch</button>
    <button id="Timer">Timer</button>
    <!-- Alram clock program -->
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
            <button type="submit" class="submitBtn">Set an alarm</button>

        </form>


        <ul id="alarmList">

        </ul>
        <p id="taskIs"></p>
        <iframe id="video" width="320px" height="" src="" style="display: none;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <!-- //Timer program -->
    <div id="StopWatchHouse">
        <!-- <button id="upBtn"> Increase</button> -->
        <!-- <button id="downBtn"> Decrease</button> -->
        <input type="text" placeholder="time count format 00:00">

        <select id="hours">
        </select>
        <!-- <div id="hours-display"></div>  -->
        <select id="minutes">
        </select>
        <!-- <div id="minutes-display">1</div> -->

    </div>


</body>

</html>