// Messenger.js is essentially an IIFE, which returns an object that 
// allows you to bind custom DOM events to custom event handlers.
//
// copyright (c) 2013 By Alexander Ressler
    
var Messenger = (function(){
    String.prototype.hashCode = function(){
        var hash = 0, i, char, l;
        if (this.length == 0) return hash;
        for (i = 0, l = this.length; i < l; i++) {
            char  = this.charCodeAt(i);
            hash  = ((hash<<5)-hash)+char;
            hash |= 0; // Convert to 32bit integer
        }
        return String(hash);
    };

    function customEvent(trigger) {
        this.event = document.createEvent("Event");
        this.event.initEvent(this.trigger, true, true);
        this.data = {};
        return this.event;
    };

    var events = {}; // store events created by makeEvent

    return ({
        on: function(trigger, handler, context) {
            if (typeof handler != "function") {throw new Error("Messenger can't bind an undefined method");}
            if (!events[trigger]) {
                events[trigger] = new customEvent(trigger); // bind the trigger to a method
                events[trigger].handlers = {};
            }
            events[trigger].handlers[handler.toString().hashCode()] = handler;
            events[trigger].handlers[handler.toString().hashCode()].context = context;
        },
        off: function(trigger, handler) {
            delete events[trigger].handlers[handler.toString().hashCode()];
        },
        allOff: function(trigger) {
            delete events[trigger];
        },
        // fire the event and pass the event handler custom data
        send: function(event, dataThru) {
            var result;
            if (dataThru) {
                var argLen = arguments.length;
                var dataThrus = new Array(argLen);
                for (var i=0; i<argLen; i++) {
                    dataThrus[i] = arguments[i];
                }
                dataThrus.shift();
            }
            if (events[event]) {
                    events[event].data = dataThrus;
            }
            // call the handler function manually and pass in the data
            if (events[event] && events[event].handlers) {
                for (var handle in events[event].handlers) {
                    var context = events[event].handlers[handle].context;
                    if (context) {
                        result = (function() {
                            return events[event].handlers[handle].apply(context, events[event].data);
                        }());
                    }
                    else {
                        result = (function() {
                            return events[event].handlers[handle].apply(this, events[event].data);
                        }());
                    }
                }
                return result; // returns the last item in the event handler stack. 
            }
        }
    });
}());
