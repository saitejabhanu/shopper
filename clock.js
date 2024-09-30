function clock(){
    const date= new Date();
    let  hours=date.getHours().toString().padStart(2,0);
    const meridian=hours>=12?"PM":"AM";
    hours = hours%12||12;
    hours=hours.toString().padStart(2,0)
    const mins=date.getMinutes().toString().padStart(2,0);
    const secs=date.getSeconds().toString().padStart(2,0);
    const time=`${hours}:${mins}:${secs} ${meridian}`;

    document.getElementById("clock").textContent=time;

}
clock();
setInterval(clock,1000)