# EVA
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="mydiv">

    </div>
</body>
<script>
    var countText;
    var count=2;
    function countTime(time){
        let mouth = parseInt(time / 60 / 60 / 24 / 30);
        let day = parseInt(time / 60 / 60 / 24 % 30);
        let hour = parseInt(time / 60 / 60 % 24);
        let minute = parseInt(time / 60 % 60);
        let second = parseInt(time % 60);
        mouths=checkTime(mouth);
        days = checkTime(day);
        hours = checkTime(hour);
        minutes = checkTime(minute);
        seconds = checkTime(second);
        function checkTime(i) { //将0-9的数字前面加上0，例1变为01
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        if (mouth > 0) {
             countText = mouths + "月" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
        }
        if (day > 0) {
             countText = days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
        } else {
             countText = hours + "小时" + minutes + "分钟" + seconds + "秒";
        }
        if (mouths<=0&&days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
            window.clearInterval(id);
            console.log("清除成功");
            // return count=null;
            document.getElementById("mydiv").innerHTML="已结束"
        }else{
            document.getElementById("mydiv").innerHTML=countText
        }
    }
    const id = setInterval(() => {
        countTime(this.count--);
    }, 1000);
</script>
</html>
