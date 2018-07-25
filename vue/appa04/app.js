// vue-app001 起手式
var app = new Vue({
    el: '#app',
    data: {
        open1: false,
        message: 'Hello Vue!',
        eventData: {
            title: '',
            start: '07:30',
            end: '16:30'
        }
    },
    methods: {
        showEditor: function (start, end) {
            var vm = this;
            vm.eventData.start = start;
            vm.eventData.end = end;
            vm.open1 = true;
        },
        addEvent: function () {
            var vm = this;
            vm.open1 = false;
            $('#calendar').fullCalendar('renderEvent', vm.eventData, true); // stick? = true
            $('#calendar').fullCalendar('unselect');

            vm.eventData = {
                title: '',
                start: '07:30',
                end: '16:30'
            }
        }
    }
})


$(function () {

    $('#calendar').fullCalendar({
        locale: 'zh-tw',
        themeSystem: 'bootstrap3',
        customButtons: {
            myCustomButton: {
                text: '客製按鈕',
                click: function () {
                    app.$alert({
                        title: '系統訊息',
                        content: '這是一個fullcalendar裡透過vue啟用的方法。'
                    }, (msg) => {
                        // callback after modal dismissed
                        app.$notify(`這個也是，然後你按下了 ${msg}.`)
                    })
                }
            }
        },
        header: {
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,agendaDay',
        },
        defaultDate: '2018-03-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        businessHours: {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            dow: [1, 2, 3, 4, 5], // Monday - Thursday

            start: '07:30', // a start time (10am in this example)
            end: '17:30', // an end time (6pm in this example)
        },
        selectable: true,
        select: function (start, end) {
            app.showEditor(start, end);
            //eventData = {
            //    title: title,
            //    start: start,
            //    end: end
            //};
            //$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true

            //$('#calendar').fullCalendar('unselect');
        },
        events: [
            {
                title: 'All Day Event',
                start: '2018-03-01'
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T10:30:00',
                end: '2018-03-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-03-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2018-03-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-03-28'
            }
        ]
    });
});


