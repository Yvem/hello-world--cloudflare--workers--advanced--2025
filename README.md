# hello-world--cloudflare--workers--advanced--2025

- using hono
- pre-built
- auth
- DB
- durable object?
  
IMPORTANT

Cloudflare differentiate browser navigation and fetches, and applies `not_found_handling` only to navigations. Fetches are sent to the worker:
```
[wrangler:info] GET /foo 404 Not Found (5ms) `Sec-Fetch-Mode: navigate` header present - using `not_found_handling` behavior
```


* https://developers.cloudflare.com/workers/
* https://developers.cloudflare.com/workers/examples/
