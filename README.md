#No-Robots

Deny all robots from your express server.

##Usage
```
const noRobots = require('no-robots');
const app = express();
app.use(noRobots);
```

Returns the following on /robots.txt
```
User-agent: *
Disallow: /
```
