'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/api', (req, res) => {
    res.json('Hello World')
})

app.get('/status', async function(req, res) {

    const uptimePG = await client.query("SELECT date_trunc('second', current_timestamp - pg_postmaster_start_time()) as uptime;");

    const uptime = uptimePG.rows[0].uptime;

    const uptimeString = () => {
        let time = "";

        time += uptime.hours ? `${uptime.hours}h ` : "";
        time += uptime.minutes ? `${uptime.minutes}m ` : "";
        time += uptime.seconds ? `${uptime.seconds}s` : "";
        return time
    };

    // response
    res.json({
        status: 'OK',
        postgresUptime: uptimeString(),
        redisConnectedClients:Number(redisClient.server_info.connected_clients)
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
app.listen(3000, function () {
    console.log("Express is running on port 3000");
});
