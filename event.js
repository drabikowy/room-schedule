let timelineStart = 10;
let timelineEnd = 16;
let timelineHours = timelineEnd-timelineStart;
let minutePercent = 100/(timelineHours*60);

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

let event = new Event(12.5,14, "Moje zdarzenie","Tomasz",["Aga","Kazek"]);
let event2 = new Event(14.15,15, "Moje zdarzenie 2","Edward",["Kazek","Tomek"]);
