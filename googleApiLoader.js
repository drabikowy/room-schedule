// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
const CLIENT_ID = '478605934959-f258bi1hgfnlpck417sdvs5c2qaooi50.apps.googleusercontent.com';
const CALENDAR_ID = 'creativestyle.pl_pjdp57e7h8vr8piscd5nsg421o@group.calendar.google.com';
// const CALENDAR_ID = 'tomasz.drabik@creativestyle.pl';
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];



/**
* Check if current user has authorized this application.
*/
function checkAuth() {
    gapi.auth.authorize(
        {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
        }, handleAuthResult);
    }

    /**
    * Handle response from authorization server.
    *
    * @param {Object} authResult Authorization result.
    */
    function handleAuthResult(authResult) {
        let authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
            // Hide auth UI, then load client library.
            authorizeDiv.style.display = 'none';
            loadCalendarApi();
        } else {
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            authorizeDiv.style.display = 'inline';
        }
    }

    /**
    * Initiate auth flow in response to user clicking authorize button.
    *
    * @param {Event} event Button click event.
    */
    function handleAuthClick(event) {
        gapi.auth.authorize(
            {client_id: CLIENT_ID, scope: SCOPES, immediate: true},
            handleAuthResult);
            return false;
        }
        /**
        * Load Google Calendar client library. List upcoming events
        * once client library is loaded.
        */
        function loadCalendarApi() {
            gapi.client.load('calendar', 'v3', loadEvents);
        }
        /**
        * Print the summary and start datetime/date of the next ten events in
        * the authorized user's calendar. If no events are found an
        * appropriate message is printed.
        */

        function loadEvents() {
            let currentDate = new Date();
            let midnight = new Date((new Date()).setHours(24,0,0,0));
            console.log(currentDate);
            console.log(midnight);
            let request = gapi.client.calendar.events.list({
                'calendarId': CALENDAR_ID,
                'timeMin': currentDate.toISOString(),
                'timeMax': midnight.toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime',
            });
            request.execute(function(resp) {
                listEvents(resp);
            });
        }

        // function listEvents(response) {
        //     console.log(response);
        // }
