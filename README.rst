messenger.js
============

Custom event binding and triggering provided by messenger.js (c) 2013 Alexander Ressler.



how to use
==========

It's easy...

| // bind a custom event 
| Messenger.on(*string* <custom event>, *function* <handler>, *this* [context (default window)]);
|
| // trigger an event handler and pass whatever data you want.
| Messenger.send(*string* <event name>, [data_1, data_2, ..., data_n]);
|
| // unbind a handler from an event 
| Messenger.off(*string* <event name>, *function* <handler>);
|
| // unbind all handlers from an event
| Messenger.allOff(*string* <event name>);

note: use the messenger_amd.js for use in AMD loaders like requirejs. 


Examples
========

Bind a custom event, and check if data passed to the anonymous handler.

   +----------------------------------------------------+
   | Messenger.on("myEvent", function(data) {           |
   |     console.log("hi you triggered myEvent");       |
   |     if (data){                                     |
   |         console.log("and you passed some data");   |
   |         console.log(data);                         |
   |     }                                              |
   | });                                                |
   +----------------------------------------------------+
Trigger a custom event name, and send 3 types of data to the handler.

   +----------------------------------------------------+
   | Messenger.send("myEvent",                          |
   |      'sending some data string',                   |
   |      {myAttribute:'has some data'},                |
   |      function(){return 'functions too!!';}         |
   | );                                                 |
   +----------------------------------------------------+

License
=======

messenger.js copyright (c) (CC-BY-NC) 2013 by Alexander Ressler.

.. image :: img/CC-BY-NC.png
