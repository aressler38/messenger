messenger.js
============
A module that gives you simple, custom event bindings and triggers.  


how to use
==========

It's easy...

// bind a custom event 
```
Messenger.on("myEvent", (handler) , [context]);
```
// trigger an event handler and pass whatever data you want.
```
Messenger.send("myEvent", [data_1, data_2, ..., data_n]); 
```
// unbind a handler from an event 
```
Messenger.off("myEvent", (handler));
```
// unbind all handlers from an event
```
Messenger.allOff("myEvent");
```
note: use the messenger\_amd.js for use in AMD loaders like requirejs. 


Examples
========

Bind a custom event, and check if data passed to the anonymous handler.

```
Messenger.on("myEvent", function(data) {          
    console.log("hi you triggered myEvent");       
});
```                                               

Trigger a custom event name, and send 3 types of data to the handler.

```
Messenger.send("myEvent",                          
    'sending some data string',                   
    {myAttribute:'has some data'},                
    function(){return 'functions too!!';}         
);                                                 
```

Get the return value of an event handler (currently only works for last bound event handler).

```
var myVal = Messenger.send("someEvent", {some:"optional data"});
```

License
=======

Creative Commons (CC-BY) 2013 Alexander Ressler.

![Alt text](img/CC-BY.png)
