messenger.js
============

Custom event binding and triggering provided by messenger.js (c) 2013 Alexander Ressler.



how to use
==========

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


License
=======

<img src="http://en.wikipedia.org/wiki/File:CC-BY.png">


