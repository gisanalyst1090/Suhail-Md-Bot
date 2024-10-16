const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347036793237";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_07_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM3LFxuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjltRnhaOEtUNFE1dkdiZEM0OVB0cUdUOTk3Ky9FUVpRUGtuVWRrKy9hZUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldGQVowU2lVUTJTblo2UW5zajRCR2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzI3NmZhY2QtOWIxZi00NzFmLTk3NTktY2VkNjRiMWYzMTk2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDI1MSxcbiAgICAgIDM5LFxuICAgICAgMTA3LFxuICAgICAgMjEzLFxuICAgICAgMTQ3LFxuICAgICAgMTU5LFxuICAgICAgMjQ2LFxuICAgICAgOSxcbiAgICAgIDEzOCxcbiAgICAgIDI1LFxuICAgICAgMjI1LFxuICAgICAgNTksXG4gICAgICAzNixcbiAgICAgIDE0NCxcbiAgICAgIDE3NSxcbiAgICAgIDY1LFxuICAgICAgMTgsXG4gICAgICA5MixcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDE0OSxcbiAgICAgIDE4NyxcbiAgICAgIDE3NyxcbiAgICAgIDE2MyxcbiAgICAgIDEzMSxcbiAgICAgIDIwNyxcbiAgICAgIDIwLFxuICAgICAgMTA4LFxuICAgICAgNTgsXG4gICAgICA0LFxuICAgICAgMTA0LFxuICAgICAgMjA0LFxuICAgICAgMTM4LFxuICAgICAgNzksXG4gICAgICAyNixcbiAgICAgIDkxLFxuICAgICAgMjE2LFxuICAgICAgNjIsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzVFBLQ0ZGOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzNjc5MzIzNzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1TQUxfQ0xPVEhJTkdcIixcbiAgICBcImxpZFwiOiBcIjE0NzU5MjQwNzE4NzQ2MzoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNjB6OEFKRUpQV3dMZ0dHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFWRDBYdDd5WTZIbkxOR1E1Zlhsb1U5OHFVK21NWXIyZTc0SkdFaWhnazQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiajQ1UU9WVTJmeHZjRkRDeWIwR0NrSk1icjNTMlkzVlZqdDh4OGJXcS9IbUJzYzdielA4SkhPcW5YSEhSUWNhdHdNVVhUWXAyOXJvMDMyWGhLS1B3QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibFlsWG5SbHZZN3Z3bnAvMW82dWhDdnduYWF4RVJmcUlTNlVES1BlalVmRWxRYUxIYWRVVXlrUVNnQnl4TnJVYVpWOVBtOVFWbVo2b1ZWRjY3aHlSQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzNjc5MzIzNzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MTEyODU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUl4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJSXguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3U2lHVCtnUVYwcEVwdGxtYm80N2lEM3BQaW9qZ0MwREYwSzh1ZXoxTDZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1NTE0Mzc4NTQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDMsMF19LFwidGltZXN0YW1wXCI6XCIxNzIyMDA1ODQ2NTI4XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
