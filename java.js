var schedule = require('node-schedule');

var j = schedule.scheduleJob({hour: 15, minute: 8}, function(){
  console.log('Time for tea!');
})
var x = schedule.scheduleJob({hour: 15, minute: 9}, function(){
  console.log('Time for tea!');
})