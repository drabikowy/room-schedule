let timelineStart = 10;
let timelineEnd = 16;
let timelineHours = timelineEnd-timelineStart;
let minutePercent = 100/(timelineHours*60);


class Timetable {
   constructor(from, to, events) {
      this.start = 10;
      this.end = 16;
      this.hours = this.end-this.start;
      this.minutePercent = 100/(this.hours*60);
      this.events = events;

      this.renderTable();
   }

   addEvents()   {

   }

   renderTable(){
      let timetable = document.querySelector('.timetable');
      // row
      let row = document.createElement('div');
      row.classList.add("timetable__row");
      // dayTime
      let day = document.createElement('div');
      day.classList.add("timetable__timeline");

      // hours:
      for (let i=0; i<this.hours; i++) {
         let hour = document.createElement('div');
         hour.classList.add('timeline__hours');

         for (let y=0; y<4; y++){
            let quater = document.createElement('div');
            quater.classList.add("timeline__quater");
            hour.appendChild(quater);
         }
         day.appendChild(hour);
      }

      row.appendChild(day);
      timetable.appendChild(row);

   }
}

class Event {
   constructor(startDate, endDate, title, author, participants){
      this.startDate = startDate;
      this.endDate = endDate;
      // this.startMinutes = this._convertToMinutes(this.startDate)
      this.startMinutes = startDate * 60;
      // this.duration = this._convertToMinutes(this.endDate) - this._convertToMinutes(this.startDate);
      this.duration = this.endDate*60 - this.startDate*60;
      this.title = title;
      this.author = author;
      this.participants = participants;
      this.width = `${this.duration*minutePercent}%`;
      this.position = `${(this.startMinutes - timelineStart*60)*minutePercent}%`;
      this.render();

   }
   _convertToMinutes(date){
      return date.getHours()*60 + date.getMinutes();
   }

   render(){
      let timeline = document.querySelector('.timetable__timeline');

      let event = document.createElement('div');
      event.classList.add('timeline__event');
      event.style.width = this.width;
      event.style.left=this.position;
      event.innerText = this.title;


      timeline.appendChild(event);
   }

}

let timetable = new Timetable(10,16);
let event = new Event(12.5,14, "Moje zdarzenie","Tomasz",["Aga","Kazek"]);
let event2 = new Event(14.25,15, "Moje zdarzenie 2","Edward",["Kazek","Tomek"]);
