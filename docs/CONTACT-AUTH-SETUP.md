# Contact form authentication setup

The contact form requires a verified Google account. No Google token or client secret is exposed to the browser.

## Google OAuth client

Create an OAuth 2.0 Client ID of type **Web application** in Google Cloud Console.

Authorized redirect URI (must match exactly):

https://arfat-phi.vercel.app/api/auth/google/callback

Add these environment variables to Vercel (Production, Preview only if intentionally enabled):

- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_REDIRECT_URI=https://arfat-phi.vercel.app/api/auth/google/callback
- AUTH_SESSION_SECRET (at least 32 random characters)
- UPSTASH_REDIS_REST_URL
- UPSTASH_REDIS_REST_TOKEN

Keep the existing FORMSPREE_FORM_ID=myeenwaq.

Generate a session secret locally with:
openssl rand -base64 48

## Google OAuth consent screen

Configure the app name and support email. Add only the required scopes:
openid, email, profile.

For an External app in Testing mode, add each tester's Google account to the test-user list. Before public launch, complete the consent-screen verification steps required by Google.

## Upstash Redis

Create a Redis database and copy its REST URL and REST token into Vercel. Redis is used for per-account, per-IP, and global daily send limits, plus a short audit trail. Do not expose these values in client-side variables.

## Limits currently enforced

- 5 messages per verified Google account per 24 hours
- 8 attempts per source IP per hour
- 40 messages globally per UTC day
- 30-minute signed, HttpOnly, Secure-in-production session cookie
- OAuth state, nonce, and PKCE
- Server-side Google ID-token signature and claims validation
- Email address is read-only in the form and must match the verified Google identity

After adding variables, redeploy and test with a Google account. Also test a second account, logout, expired session, and rate-limit responses. Do not announce the form as production-ready until those tests pass.
