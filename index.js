
  let day = document.querySelector('#day')
  let time = document.querySelector('#time')



function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeekIndex = currentDate.getDay();
    const currentDayOfWeek = daysOfWeek[dayOfWeekIndex];
    return currentDayOfWeek;
  }

  const today = getCurrentDayOfWeek();
  
  

  

  day.innerHTML=today
  time.innerHTML=Date.now()

 