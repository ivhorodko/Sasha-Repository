let events = [
    { event: "встреча", time: 10 },
    { event: "урок", time: 14 },
    { event: "концерт", time: 18 }
  ];
  
  let eveningEvents = 0;
  
  function isEvening(times) {
    return times >= 18;
  }
  
  events.forEach((event) => {
    if (isEvening(event.time)) {
      console.log(`${event.event}: вечернее событие`);
      eveningEvents++;
    } else {
      console.log(`${event.event}: дневное событие`);
    }
  });
  
  console.log(`Вечерних событий: ${eveningEvents}`);
  