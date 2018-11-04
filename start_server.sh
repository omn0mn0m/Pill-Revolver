#!/bin/sh

if ! screen -list | grep -q "nodejs"; then
    #screen -S minecraft -d -m java -jar -Xmx4096M spigot-1.12.2.jar nogui
    screen -S nodejs -d -m node app.js
fi
