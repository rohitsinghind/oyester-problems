/*Given a time in 12-hr AM/PM format, convert it to military time(24hr) and you also need to add 45
min &45 sec in the result and the display the output.*/

const input = "11:31:54PM"

function time(inp){
    let hour = parseInt(inp.substring(0,2));
    let min = parseInt(inp.substring(3,5));
    let sec = parseInt(inp.substring(6,8));
    meridiem = inp.substring(8);
    
    if(hour < 12 && meridiem == "PM"){
        hour += 12;
    }
    else if(hour == 12 && meridiem == "AM"){
        hour = 0;
    }

    hour = (parseInt((min+45)/60) + hour)%24;
    min = (min + 45 + parseInt((sec+45)/60))%60;
    sec = (sec+45)%60;

    return (hour+":"+min+":"+sec)
}

console.log(time(input))