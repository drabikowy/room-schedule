let timelineStart = 10;
let timelineEnd = 16;
let timelineHours = timelineEnd-timelineStart;
let minutePercent = 100/(timelineHours*60);


class Timetable {
    constructor(start, end, events) {
        this.start = start;
        this.end = end;
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
        let timeline = document.createElement('div');
        timeline.classList.add("timetable__timeline");


        // hours:
        for (let i=this.start; i<this.end; i++) {
            let hour = document.createElement('div');
            let label = document.createElement('div');
            label.classList.add('timeline__hours-label');
            label.innerText = `${i}:00`;
            hour.classList.add('timeline__hours');

            hour.appendChild(label);

            for (let y=0; y<4; y++){
                let quater = document.createElement('div');
                quater.classList.add("timeline__quater");
                hour.appendChild(quater);
            }

            timeline.appendChild(hour);
        }

        row.appendChild(timeline);
        timetable.appendChild(row);

    }
}

class Event {
    constructor(startDate, endDate, title, author, participants){
        this.startDate = startDate;
        this.endDate = endDate;
        this.startMinutes = this._convertToMinutes(this.startDate)
        // this.startMinutes = startDate * 60;
        this.duration = this._convertToMinutes(this.endDate) - this._convertToMinutes(this.startDate);
        // this.duration = this.endDate*60 - this.startDate*60;
        this.title = title;
        this.author = author;
        this.participants = participants;
        this.width = `${this.duration*minutePercent}%`;
        this.position = `${(this.startMinutes - timelineStart*60)*minutePercent}%`;
        this.render();

    }
    _convertToMinutes(date){
        console.log(date);
        return date.getHours()*60 + date.getMinutes();
    }

    render(){
        let timeline = document.querySelector('.timetable__timeline');

        let event = document.createElement('div');
        event.classList.add('timeline__event');
        event.style.width = 0;

        event.style.left=0;

        event.innerText = this.title;
        event.style.left = this.position;

        timeline.appendChild(event);

        setTimeout( () => {
            event.style.width = this.width;


        },1);

    }

}

let timetable = new Timetable(timelineStart,timelineEnd);
