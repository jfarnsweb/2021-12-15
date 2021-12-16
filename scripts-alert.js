scripts-alert.js


//Variable
var time;
switch (msg TimeRanges());
Date.getTime(): number;

//does time need to be in military time
<script>
var x = 5;
var y = 12
var z = 6

//comparison operators needed
// less than or equal <=; document.write (x <=y);
//equal to ==; document.write(x==y);
//greater than or equal >=; document.write(x >= y);

//statements to write; end of time might not be equal to because start conflict
//does time need to be in military time...if so use 5 (5am), 12 (noon), 18 (6pm...12+6)
//5<=time>12 Morning
//12<=time>6 Afternoon
//6<=time>5 Evening

</script>

//Switch Statment
//add =, <, > statement to determine message based on time
switch (time){
    case 1:
        var msg = "Good Morning";
        break;
    case 2:
        var msg = "Good AFternoon";
        break;
    case 3:
        var msg = "Good Evening"
}

//Results
//If the value is after 5 AM and before noon
document.getElementById("morning").innerHTML = "(`Good Morning, ${name}! Thank you for reviewing my resume site.`)";

//If the value is after noon and before 6 PM
document.getElementById("afternoon").innerHTML = "(`Good AFternoon, ${name}! Thank you for reviewing my resume site.`)";

//If the value is after 6 PM
document.getElementById("evening").innerHTML = "(`Good Evening, ${name}! Thank you for reviewing my resume site.`)";