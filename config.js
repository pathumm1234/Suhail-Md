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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_56_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicHEyNnMzRGl5VFJMa1ZpcTFsRU9DdEI2OFFITitQSVBGd3U4WGNtVVBOdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3MzQxNjQ3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUI0RTMxMDdFNjIwNjlFQTk4RTNCN0M4NDhGNDVBNEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzk2MjEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIng3MFRzOF9EUmNxUTFDc3lESDc1OGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGRhZmUzMGUtYzY2OS00NWVmLWJmZTktZjdkM2FiYTQ5MTdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI0NixcbiAgICAgIDEwOCxcbiAgICAgIDUxLFxuICAgICAgMjEyLFxuICAgICAgMTc1LFxuICAgICAgNjUsXG4gICAgICAxNzksXG4gICAgICAxNDIsXG4gICAgICA4MCxcbiAgICAgIDIyNixcbiAgICAgIDIxMixcbiAgICAgIDE5LFxuICAgICAgNTQsXG4gICAgICA4NyxcbiAgICAgIDEwNCxcbiAgICAgIDEzNixcbiAgICAgIDcsXG4gICAgICA2OCxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE3OSxcbiAgICAgIDEzLFxuICAgICAgNTQsXG4gICAgICAyMjYsXG4gICAgICA2NCxcbiAgICAgIDI0MixcbiAgICAgIDExMyxcbiAgICAgIDE4LFxuICAgICAgMTU2LFxuICAgICAgMTUzLFxuICAgICAgMTI0LFxuICAgICAgMTMyLFxuICAgICAgMTM5LFxuICAgICAgMTM0LFxuICAgICAgODksXG4gICAgICAxMTMsXG4gICAgICAxMTksXG4gICAgICAyMjAsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEtNODQ5RlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzczNDE2NDc4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYxMTY0OTgxNjIwOTYzOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFRMMWVzSEVLdUl4YlFHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzUkN4QkhEdERydkIwNUpMOUtXWTlsVjZWTVY1YjNyMjUwdXg1OHBGN1hrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpocjhjc1o1MFZCVzNxTG4zVVVlOHdMdisweU5xUkUzUnBRNXVRNENvU3MyUjZBeGgvRUJ4bkswcEVaUmlTVUtUcitFd3UzTXRVNkFqVnJGSGdybUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdIanFFcjJJeWJpankrRXRlaTd3dWNVT1NrN0czcFAzNEgvaEsvVDZpeTlwWHk3MHBGMlhobzhVUEQyUUVoODNEbEFBSnRpVHZCT1JFSVU1WjYyK2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzczNDE2NDc4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3OTYyMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPNzRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU83NC5qc29uIjogIntcImtleURhdGFcIjpcIkhlNjJ5Z1o2ZTBTSjVrS000M3drV0tRcmpLTVMyMzN0b0IvM0hGMVJSMlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwNDg0NTgxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDU1ODMzODMwXCJ9Igp9"  // PUT your SESSION_ID 


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
