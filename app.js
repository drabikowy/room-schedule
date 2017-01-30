class Timetable {
    constructor(from, to) {
        this.tableStart = from;
        this.tableEnd = to;
        this.hours = this.tableEnd-this.tableStart;
        this.events = [];
    }

    addEvent(start,end, title, author, atendants)   {
        let event = {
            start: start,
            end: end,
            title: title,
            author: author,
            atendants: atendants
        }
        this.events.push(event);
    }

    renderTable(){
        let timetable = document.querySelector('.timetable');
        // row
        let row = document.createElement('div');
        row.classList.add("timetable__row");
        // dayTime
        let day = document.createElement('div');
        day.classList.add("timetable__day");

        // hours:
        for (let i=0; i<this.hours; i++) {
            let hour = document.createElement('div');
            hour.classList.add('day__hours');

            for (let y=0; y<4; y++){
                let quater = document.createElement('div');
                quater.classList.add("day__minutes");
                hour.appendChild(quater);
            }
            day.appendChild(hour);
        }

        row.appendChild(day);
        timetable.appendChild(row);


        for (let i=0; i<this.events.length; i++) {
            let event = document.createElement('div');
            event.classList.add(`event#${i}`)
        }


    }


}

// let timetable = new Timetable(10,16);
// timetable.renderTable();
let timetableStart = 10 *60;// in minutes
let timetableEnd = 16 *60; //in minutes
let hours = 6;
let minutePercent = 100/(hours*60);

class Event {
    constructor(startDate, endDate, title, author, atendants){

        this.startDate: startDate,
        this.endDate: endDate,
        this.startMinutes = startDate.getHours()*60 + startDate.getMinutes();

        this.computedPosition= (startDate.getHours()*60 + startDate.getMinutes()) - timetableStart;


        this.title: title,
        this.duration: this.end-this.start,
        this.author: author,
        this.atendants: atendants
        this.appendEvent();
    }

    appendEvent(){
        let event = document.createElement('div');
        event.classList.add('event');
        this.css({
            left: `${minutePercent * this.duration}%`
        })
        document.querySelector('timetable__day').appendChild(event);
    }
}
