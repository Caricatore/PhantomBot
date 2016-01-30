(function(){if(!$.inidb.exists("updates","installedv2")||$.inidb.get("settings","installedv2")!="true"){Packages.com.gmt2001.Console.out.println("");Packages.com.gmt2001.Console.out.println("Starting PhantomBot version 2.0 updates...");Packages.com.gmt2001.Console.out.println("This can take several minutes...");Packages.com.gmt2001.Console.out.println("");var s=$.inidb.GetFileList(),t,e,o,n,m=["./games/8ball.js","./games/adventureSystem.js","./games/killCommand.js","./commands/topCommand.js","./games/random.js","./games/roll.js","./games/roulette.js","./games/slotMachine.js","./handlers/followHandler.js","./handlers/hostHandler.js","./handlers/subscribeHandler.js","./systems/cleanupSystem.js","./systems/greetingSystem.js","./systems/noticeSystem.js","./systems/pollSystem.js","./systems/quoteSystem.js","./systems/raffleSystem.js","./systems/raidSystem.js","./systems/youtubePlayer.js"];Packages.com.gmt2001.Console.out.println("Preparing to save commands, times and points...");Packages.com.gmt2001.Console.out.println("Saving custom commands...");t=a("command");Packages.com.gmt2001.Console.out.println("Saving times...");e=a("time");Packages.com.gmt2001.Console.out.println("Saving points...");o=a("points");Packages.com.gmt2001.Console.out.println("Removing old files...");for(n in s){$.inidb.RemoveFile(s[n])}Packages.com.gmt2001.Console.out.println("Restoring custom commands...");i("command",t);Packages.com.gmt2001.Console.out.println("Restoring times...");i("time",e);Packages.com.gmt2001.Console.out.println("Restoring points...");i("points",o);Packages.com.gmt2001.Console.out.println("Disabling some modules...");for(n in m){$.inidb.set("modules",m[n],"false")}$.inidb.set("updates","installedv2","true");Packages.com.gmt2001.Console.out.println("PhantomBot version 2.0 updates completed...");Packages.com.gmt2001.Console.out.println("Now proceeding with normal start up...")}function a(s){var t=[],e=$.inidb.GetKeyList(s,""),o;for(o in e){t[e[o]]=$.inidb.get(s,e[o])}return t}function i(s,t){var e;for(e in t){$.inidb.set(s,e,t[e])}}})();