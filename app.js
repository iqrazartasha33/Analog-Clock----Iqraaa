function show_clock(){

    let h =  document.getElementsByClassName('hr')[0];
    let m =  document.getElementsByClassName('mn')[0];
    let s =  document.getElementsByClassName('ss')[0];
  
    let date = new Date();
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    h.style.transform =  `rotate(${30 *hours + minutes/ 
    2}deg)`;
    m.style.transform = `rotate(${ 6 *minutes}deg)`;
    s.style.transform = `rotate(${6 *seconds}deg)`;
    
  
  }
  
  setInterval(show_clock,100);


  function updateClock() {
    const date = new Date();
    const hours = date.getHours() % 12;  
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60); 
    const minuteDeg = (360 / 60) * minutes;  
    const secondDeg = (360 / 60) * seconds; 

    document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.second').style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);  

