const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_46_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgNzksXG4gICAgICAgIDQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODEsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWTUFpeFZ5REd1RVdpYWJiZFVSd0t5eVVVOEphQ3VNTWdpRkF2T2RESENzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEzNjU1MTg1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUY4NzBCQTk1MjREMkMwMTQxRjA4MDVBMEU2MThFRjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjQ4Mzk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTM2NTUxODU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0M0IxNEY3NjI4MzRDRTg5Q0VFQTEyNUE2NkY2RURDRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNDgzOTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaVJISVAtdFhTR09CWmY4bloycl9vZ1wiLFxuICBcInBob25lSWRcIjogXCJkYzViMGY1MS02NmFjLTRkMTQtYTAxYS0zNDFiMzgzZDVjMmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgNjEsXG4gICAgICAyMjEsXG4gICAgICAxNDEsXG4gICAgICA3OCxcbiAgICAgIDIzMSxcbiAgICAgIDY4LFxuICAgICAgMTY2LFxuICAgICAgMjA0LFxuICAgICAgODUsXG4gICAgICAyMDYsXG4gICAgICAzMCxcbiAgICAgIDY3LFxuICAgICAgMjE4LFxuICAgICAgMjE4LFxuICAgICAgMTY3LFxuICAgICAgMTU2LFxuICAgICAgMTY5LFxuICAgICAgMTkyLFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDI0NixcbiAgICAgIDIyLFxuICAgICAgMjEwLFxuICAgICAgMTk2LFxuICAgICAgNzIsXG4gICAgICAxNjYsXG4gICAgICA2NSxcbiAgICAgIDM2LFxuICAgICAgNjAsXG4gICAgICAxMjMsXG4gICAgICAxMjAsXG4gICAgICA4MyxcbiAgICAgIDE3MixcbiAgICAgIDE1MixcbiAgICAgIDIzOSxcbiAgICAgIDM4LFxuICAgICAgMTcwLFxuICAgICAgMjQ2LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQzI5VFdXMUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzNjU1MTg1NDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg0MjUyODcyNTgyNDE6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLvuLvilabMtcy1zYfMv8y/zL/Mv+KVpOKUgEhBTVpBIOKZmu+4u+KVpsy1zLXNh8y/zL9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQM201Y2dFRU1yUW83UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1tWmZDRUpvVXNJL2VDMjFNYWlQeS9oZ1ZZbE90QXMyOGF5c0FJYlpSalU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZXBwdnUwaXAxNkUzanRZVDR2d0U3RW80VjV3Qng5cUN0QXpIL2cwVHRUbDE4V3RNV2JFTnJraFlFUmNsc3pBcVR6aHcydm8rdUVvV1M0Zk5wM3dWQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQytEWmZqRUw2WFFZNWE0WlYrazhsNXVOVHVZc1VpaUdkMWVXRVViNURSS3NsaTcxRlFpdkRsUWphUmtDZ2lEcXRNdkVnTWYvN2NGNUpKV1JrekdJZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTM2NTUxODU0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNDgzOTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEM1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQzWC5qc29uIjogIntcImtleURhdGFcIjpcImgzZXl5bE83dENpTTBBMkRVUFZ5VlJObWh2NWFKbjJPUDcrV0Nkc2N4UU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyNjQwNDczMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjQxMDQ2MzY2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
