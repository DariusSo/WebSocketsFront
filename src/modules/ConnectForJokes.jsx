import SockJS from 'sockjs-client/dist/sockjs.min.js';
import Stomp from 'stompjs';




export default function ConnectForJokes({messagesRef}, setShowJoke) {
    console.log(messagesRef);
    var stompClient = null;
    // Connect to the SockJS endpoint
    var socket = new SockJS('http://localhost:8080/websocket');
    stompClient = Stomp.over(socket);

    // Connect to the STOMP server
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        // Subscribe to the /topic/heyhey endpoint
        stompClient.subscribe('/topic/jokes', function (message) {
            showMessage(message.body);  // Display the received message
        });
    }, function (error) {
        console.log('Error: ' + error);
    });

    function showMessage(message) {
        setShowJoke(true);
        messagesRef.current.textContent = message;
    }
}