const Discord = require('discord.js');
var schedule = require('node-schedule');

const client = new Discord.Client();

client.login("ADD YOUR TOKEN HERE FROM DISCORD BOT").then(() => {
console.log("I am ready");
 var guild = client.guilds.get('495177088840499201');
 	var A = schedule.scheduleJob({hour: 4 , minute: 2}, function(){
 		console.log('Fajar');
 		guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان الفجر في بغداد وضواحيها");
 	})	
 	var B = schedule.scheduleJob({hour: 12 , minute: 5}, function(){
 		console.log('Thor');
	 	guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان الظهر في بغداد وضواحيها");
	 })
 	var C = schedule.scheduleJob({hour: 16 , minute: 45}, function(){
 		console.log('3sar');
 		guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان العصر في بغداد وضواحيها");
 	})
 	var D = schedule.scheduleJob({hour: 18 , minute: 41}, function(){
 		console.log('mgrb');
 		guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان المغرب في بغداد وضواحيها");
 	})
 	var E = schedule.scheduleJob({hour: 20 , minute: 3}, function(){
 		console.log('3sha');
 		guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان العشاء في بغداد وضواحيها");
 	})


 	var ATurki = schedule.scheduleJob({hour: 4 , minute: 32}, function(){
 		guild.channels.get('495177088840499203').send("<@292746389560098817>حان الان موعد اذان الفجر في مدينة دوزجي التركية وضواحيها");
 	})	
	
	var BTurki = schedule.scheduleJob({hour: 13 , minute: 5}, function(){
	 	guild.channels.get('495177088840499203').send("<@292746389560098817>حان الان موعد اذان الظهر في مدينة دوزجي التركية وضواحيها");
	 })
 	
 	var CTurki = schedule.scheduleJob({hour: 16 , minute: 48}, function(){
 		guild.channels.get('495177088840499203').send("<@292746389560098817>حان الان موعد اذان العصر في مدينة دوزجي التركية وضواحيها");
 	})
 	
 	var DTurki = schedule.scheduleJob({hour: 19 , minute: 49}, function(){
 		guild.channels.get('495177088840499203').send("<@292746389560098817>حان الان موعد اذان المغرب في مدينة دوزجي التركية وضواحيها");
 	})
 	
 	var ETurki = schedule.scheduleJob({hour: 21 , minute: 16}, function(){
 		guild.channels.get('495177088840499203').send("<@292746389560098817>حان الان موعد اذان العشاء في مدينة دوزجي التركية وضواحيها");
 	})
});
client.on('message' ,  msg => {
	if(msg.content === 'بشار')
		msg.reply('اقوة لاعب بالشرق الاوسط');
	if(msg.content === 'dd')
		msg.reply('The best friend of Bashar');
	if(msg.content === 'يدوريد')
		msg.reply('dd لبيست فرند مال');
	if(msg.content === 'ذوذو')
		msg.reply('ملك الطاقة الايجابية');
	if(msg.content === 'قناة ذوذو')
		msg.reply('https://www.youtube.com/channel/UCb2pT0_RuMV39v3VVXAhkNA');
	if(msg.content === 'فيوريس')
		msg.reply('توكسك خرة');	
	if(msg.content === 'طه')
		msg.reply('جلب الدروبات');
	if(msg.content === 'twm')
		msg.reply('Task Windows Manager <@430434233861799938>');	


});



// if(d.getHours() === 4 && d.getMinutes() === 2)  
//     	  guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان الفجر في بغداد وضواحيها").then(() => client.destroy());
//     else if(d.getHours() === 12 && d.getMinutes() === 5)  
//     	  guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان الظهر في بغداد وضواحيها").then(() => client.destroy());
// 	else if(d.getHours() === 16 && d.getMinutes() === 45)  
// 	    	  guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان العصر في بغداد وضواحيها").then(() => client.destroy());
// 	else if(d.getHours() === 18 && d.getMinutes() === 41)  
// 	    	  guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان المغرب في بغداد وضواحيها").then(() => client.destroy());	
// 	else if(d.getHours() === 20 && d.getMinutes() === 3)  
// 	    	  guild.channels.get('495177088840499203').send("@everyoneحان الان موعد اذان العشاء في بغداد وضواحيها").then(() => client.destroy());