# AUDIT — Portfolio Quality, Performance & Security

> Evidence log only. Never estimate missing metrics or present unverified behavior as complete.

## 0. Audit metadata

| Field | Value |
|---|---|
| Repository | `arfat-alkamly/arfat-alkamly-portfolio` |
| Working branch | `portfolio` |
| Production origin | `https://arfat-phi.vercel.app` |
| Audit started | 2026-11-02 |
| Baseline source commit before this audit update | `77a2413578e7b09b88d1c2433f580a218a970d84` |
| Production deployment used for measurements | Not confirmed |
| Measurement status | Pending |

## 1. Mandatory blocker — identify the exact Vercel restriction

Do not start deployment retries, recommend waiting/upgrading, or treat a generic build failure as proof of a particular quota. Inspect Usage and the deployment's own logs. **Build and Functions are separate resource categories** and can be restricted independently or simultaneously.

### 1.1 Vercel Usage evidence

In Vercel Dashboard → select the portfolio project/team → Usage (or Usage & Billing; labels may vary), record the exact resource/limit name and its accounting window. Inspect at least the categories actually displayed for this account: Deployments, Build Execution/Build Minutes, Functions (invocations, duration or execution), Bandwidth/Data Transfer, and Edge Requests.

| Required evidence | Recorded value |
|---|---|
| Exact resource/limit name as displayed | Pending |
| Project and team | Pending |
| Usage consumed | Pending |
| Included quota / limit | Pending |
| Accounting window (hour/day/month or exact period) | Pending |
| Reset date/time and timezone | Pending |
| Usage dashboard URL or screenshot reference | Pending |

### 1.2 Failure classification and verbatim error

Open Deployments → failed deployment → Build Logs. Copy the decisive error message **verbatim**, preserving capitalization and wording. Do not paraphrase it. Determine whether the failure occurred during the Build phase or during runtime Function execution. If both categories show limits, create a separate record for each.

| Evidence | Recorded value |
|---|---|
| Failure phase: Build / Functions / Other / Unknown | Pending |
| Exact error text copied from logs | Pending |
| Deployment ID and URL | Pending |
| Failure timestamp (with timezone) | Pending |
| Related Usage resource name | Pending |
| Is there also a Functions restriction? | Pending |
| Next action justified by evidence | Pending |

**Gate:** This section must be completed before a new deployment attempt or a hosting/plan decision.

## 2. Deployment baseline — production domain only

The measurement target must be the actual production domain, not a Preview deployment URL. The expected production origin is `https://arfat-phi.vercel.app`; verify in Vercel → Project → Settings → Domains and confirm it is assigned to the intended Production deployment.

| Field | Recorded value |
|---|---|
| Production domain verified in Vercel | Pending |
| Production deployment status | Pending |
| Production URL tested (must be the actual domain) | Pending |
| Deployment ID | Pending |
| Deployment created at (timezone) | Pending |
| Deployed commit SHA | Pending |
| Source branch | Pending |
| Configured Production Branch | Pending |
| Is deployed SHA equal to current `portfolio` head? | Pending |
| If not, label measurements as | Last successful production deployment |

Verification:
1. In Settings → Domains, verify `arfat-phi.vercel.app` is assigned to Production.
2. In Deployments, open the deployment currently serving that Production domain.
3. Record its commit SHA, branch, environment, deployment time, and deployment URL.
4. Compare the SHA with the current branch head.
5. Run Lighthouse and PSI using `https://arfat-phi.vercel.app/` and its production paths, not a `*.vercel.app` preview hostname.
6. If the latest source is not deployed, label all results: **Last successful production deployment**, and record its SHA.

## 3. Performance measurements

Lab and Field are separate datasets. Do not combine their values in one table or substitute one metric for another.

### 3.1 Lab — Lighthouse (priority pages only)

Only these three pages are in the initial baseline:
1. Home: `https://arfat-phi.vercel.app/`
2. AEGIS-TITAN parent/entry page: `https://arfat-phi.vercel.app/aegis-titan`
3. About: `https://arfat-phi.vercel.app/about`

Other AEGIS-TITAN subpages are out of scope until these three pages are stable.

#### Fixed test conditions

- Device: **Mobile**.
- Lighthouse throttling: default settings; keep **Simulated Slow 4G + 4x CPU slowdown** unchanged.
- Browser: Chrome **Incognito** window, with no extensions enabled.
- Do not change Lighthouse settings, browser version, device profile, network conditions, or target deployment between Before and After runs.
- Record the date and exact time of every run, including timezone.
- Perform three valid runs per page and report the median. Retain all three reports.
- TBT is a lab metric, not INP.

Procedure:
1. Open a new Chrome Incognito window. Ensure no extensions are active.
2. Navigate to the actual production-domain page listed above.
3. Open DevTools → Lighthouse.
4. Select Mobile; leave throttling and CPU settings at Lighthouse defaults (Simulated Slow 4G and 4x CPU).
5. Run Performance. Save each HTML report.
6. Repeat until there are three runs per page. Do not choose the best run.

Optional CLI alternative (use the same Chrome/Lighthouse version and settings for all runs):
```bash
npm install --global lighthouse
lighthouse "https://arfat-phi.vercel.app/" --form-factor=mobile --throttling-method=simulate --output=html --output-path="./lighthouse-home-mobile-run1.html"
```
Repeat with unique output filenames for runs 2 and 3, then for the other two pages. Record Lighthouse and Chrome versions. If CLI defaults differ from the browser procedure, do not mix those runs in one sample set.

#### Individual runs

| Page | Run | Date/time + timezone | Chrome version | Lighthouse version | LCP ms | CLS | TBT ms | Performance score | Report |
|---|---:|---|---|---|---:|---:|---:|---:|---|
| Home | 1 | Pending | Pending | Pending | — | — | — | — | — |
| Home | 2 | Pending | Pending | Pending | — | — | — | — | — |
| Home | 3 | Pending | Pending | Pending | — | — | — | — | — |
| AEGIS-TITAN | 1 | Pending | Pending | Pending | — | — | — | — | — |
| AEGIS-TITAN | 2 | Pending | Pending | Pending | — | — | — | — | — |
| AEGIS-TITAN | 3 | Pending | Pending | Pending | — | — | — | — | — |
| About | 1 | Pending | Pending | Pending | — | — | — | — | — |
| About | 2 | Pending | Pending | Pending | — | — | — | — | — |
| About | 3 | Pending | Pending | Pending | — | — | — | — | — |

#### Lab summary — median of three runs

| Page | LCP median ms | CLS median | TBT median ms | Score median | Sample count | Outlier note |
|---|---:|---:|---:|---:|---:|---|
| Home | — | — | — | — | 0 | — |
| AEGIS-TITAN | — | — | — | — | 0 | — |
| About | — | — | — | — | 0 | — |

#### Variability and outlier policy

- Lighthouse run-to-run variation can be material. For TBT, differences around ±20–30% may occur naturally; do not announce an improvement smaller than that range as a meaningful performance gain without stronger repeated evidence.
- Compare Before and After using the same conditions and the three-run median.
- If a run is clearly anomalous (for example, approximately three times the median), **keep it in the record**, flag it in Outlier note, and investigate. Never silently delete it. Report both the full set and the median; if a run is excluded from a secondary analysis, document the reason and show the result with and without it.
- Do not call a small numeric change an improvement when it is within normal measurement noise.

### 3.2 Field — Chrome UX Report (CrUX)

CrUX represents real Chrome user experiences. Its standard collection window is a rolling **28-day** period. The reporting period and the data scope must be recorded for every check.

#### Availability check using PageSpeed Insights (PSI)

1. Open <https://pagespeed.web.dev/>.
2. Enter the exact production URL, beginning with `https://arfat-phi.vercel.app`.
3. Inspect the field-data section titled **Discover what your real users are experiencing**.
4. PSI's field data is CrUX data; **PSI does not require the user's CrUX API key**.
5. If PSI shows URL-level field data, record it as URL-level.
6. If URL-level data is absent but origin-level field data is shown, record it only as **Origin-level — applies to the origin, not this page**.
7. If PSI reports no field data at both scopes, record Not available with the check date and displayed reporting period (if shown). Do not interpret this as an API-key problem.

#### Scope separation — never mix URL and Origin records

In a personal portfolio, origin-level data may be available while individual URL-level records are not. These are different populations/scopes and must not be merged or compared as if they described the same page.

**Origin-level table**

| Origin | Form factor | Checked at (timezone) | CrUX collection period | LCP p75 ms | INP p75 ms | CLS p75 | Availability / PSI evidence |
|---|---|---|---|---:|---:|---:|---|
| `https://arfat-phi.vercel.app` | Phone | Pending | Pending (28-day rolling window) | Not checked | Not checked | Not checked | Pending |

**URL-level table**

| Exact URL | Form factor | Checked at (timezone) | CrUX collection period | LCP p75 ms | INP p75 ms | CLS p75 | Availability / PSI evidence |
|---|---|---|---|---:|---:|---:|---|
| `https://arfat-phi.vercel.app/` | Phone | Pending | Pending | Not checked | Not checked | Not checked | Pending |
| `https://arfat-phi.vercel.app/aegis-titan` | Phone | Pending | Pending | Not checked | Not checked | Not checked | Pending |
| `https://arfat-phi.vercel.app/about` | Phone | Pending | Pending | Not checked | Not checked | Not checked | Pending |

Repeat with Desktop only as a separate form-factor dataset if required. Do not mix Phone and Desktop.

#### Direct CrUX API command (optional independent query)

The API requires a Google Cloud API key and the Chrome UX Report API enabled. This key is only for the direct API call below; PSI does not need it. Run in Bash, WSL, macOS/Linux terminal, or Git Bash. Do not commit the key or put it in AUDIT.md.

Origin query:
```bash
export CRUX_API_KEY='PASTE_YOUR_GOOGLE_CLOUD_API_KEY_HERE'

curl --fail-with-body -sS -X POST \
  "https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${CRUX_API_KEY}" \
  -H 'Content-Type: application/json' \
  --data-binary '{
    "origin": "https://arfat-phi.vercel.app",
    "formFactor": "PHONE",
    "metrics": [
      "largest_contentful_paint",
      "interaction_to_next_paint",
      "cumulative_layout_shift"
    ]
  }'
```

URL-level query for the home page (change the `url` value to query another exact page):
```bash
curl --fail-with-body -sS -X POST \
  "https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${CRUX_API_KEY}" \
  -H 'Content-Type: application/json' \
  --data-binary '{
    "url": "https://arfat-phi.vercel.app/",
    "formFactor": "PHONE",
    "metrics": [
      "largest_contentful_paint",
      "interaction_to_next_paint",
      "cumulative_layout_shift"
    ]
  }'
```

Interpretation of direct API responses:
- A successful response with `record.metrics` provides data for the requested scope and form factor. Record the collection period (typically 28 days), p75 values and histogram.
- A response indicating no record / not found means no CrUX record was returned for that query. Record **Not available** for that scope, with check timestamp and collection period if supplied.
- HTTP 401/403 is an API authentication, API enablement, or permission issue. It is not evidence that CrUX has no user data. Resolve access and retry.
- HTTP 400 is a request error until investigated; do not classify it as missing field data.
- Keep URL and Origin queries in their respective tables. Do not paste the API key or secrets into this repository.

#### Not available recording rule

When a PSI check or valid API query has no CrUX record, replace “Not checked” with **Not available** and fill:
- exact scope (Origin or exact URL);
- check date/time and timezone;
- CrUX collection period shown (normally rolling 28 days; if not displayed, say “not displayed”);
- form factor;
- source (PSI or direct API);
- evidence link or screenshot reference.

A later check may return data because the rolling population/window changes. Preserve the old dated result; do not overwrite history without adding a new dated entry.

### 3.3 Metric interpretation rules

- LCP and CLS have separate Lab (Lighthouse) and Field (CrUX) values.
- INP is recorded as Field data from CrUX. TBT is a Lighthouse lab metric and is never an estimate or replacement for INP.
- CrUX comparisons use p75 and must identify scope, form factor and collection period.
- “Not available” is a valid recorded result only when accompanied by a dated check and scope; API authentication failures are not “Not available”.
- Never compare different deployment SHAs as if they were the same release.

## 4. Contact form integrity checks

No additional visible fields are planned. Honeypot and/or rate limiting are backend safeguards, not additional user-facing form fields.

| Check | Procedure | Result / evidence |
|---|---|---|
| Normal submission | Send a valid test message and verify expected delivery/receipt | Pending |
| Required-field validation | Submit with required values missing | Pending |
| Invalid email | Submit malformed email | Pending |
| Honeypot (if implemented) | Controlled test with honeypot populated | Pending |
| Rate limit (if implemented) | Controlled repeated requests; verify throttling | Pending |
| Error handling | Test server/network failure; ensure no false success | Pending |
| Mobile usability | Complete submission on mobile viewport | Pending |
| Privacy | Verify secrets/tokens/message content are not exposed in public responses or client logs | Pending |

Do not claim protection until both implementation and behavior are verified. Repeat after deployment.

## 5. Security and quality review

| Area | Evidence / method | Status |
|---|---|---|
| Security headers | Inspect production response headers and record actual values | Pending |
| Content Security Policy | Start in report-only mode; validate assets and flows before enforcement | Pending |
| Dependencies | Run package audit; review applicability | Pending |
| Accessibility | Lighthouse plus keyboard/focus and form-label checks | Pending |
| Responsive layout | Verify mobile/tablet/desktop | Pending |
| Metadata | Verify title, description, canonical and Open Graph | Pending |
| GitHub integration | Deferred; see full appendix below | Deferred |

Commands:
```bash
curl -sSI https://arfat-phi.vercel.app/
npm audit
```

Record date/time, tool/runtime version, relevant output and accepted risks. Header presence or a clean dependency audit alone does not prove the site is secure.

## 6. Change log

| Date (UTC) | Branch | Commit | Change | Verification |
|---|---|---|---|---|
| 2026-11-02 | `portfolio` | `77a2413578e7b09b88d1c2433f580a218a970d84` | Source baseline before audit record | Branch head verified |
| 2026-11-02 | `portfolio` | `ddde4bd8c63d949346b3dfa3f1f9924921c7f6d6` | Initial AUDIT.md | File fetched and inspected |
| 2026-11-02 | `portfolio` | Pending | Refine Vercel blocker, three-page scope, fixed Lab conditions, variability policy, CrUX scope/availability, and integration appendix | Pending |

## 7. Working and release rules

1. Do not commit directly to `main`. Work on branch `portfolio`; review changes before any merge.
2. Keep `main` deployable; do not use it as a scratch branch.
3. Preserve the established visual identity and working components unless a scoped, evidence-based change is justified and tested.
4. Do not add a CV download button until a real CV file exists.
5. Do not add fabricated testimonials, badges, awards, metrics, or project claims.
6. Avoid unsupported superlatives such as “expert”, “advanced”, or “professional”. Describe specific work and verifiable evidence.
7. Preserve existing content and behavior unless a change is justified and tested.
8. A Git commit is not proof of a successful Vercel deployment. Verify deployment and live behavior separately.
9. Never fabricate missing CrUX, Lighthouse, Vercel Usage, or form-test results.

## 8. Future appendix — GitHub public profile data integration (proposal only)

**Status: deferred — not implemented in this audit step.** This is the complete proposed scope for later review; it is not permission to implement it now.

### Objective
Display selected public GitHub profile and repository information on the portfolio without making the site depend on GitHub availability.

### Data scope
- Public profile fields only: username, public avatar URL, public profile URL, and public bio if suitable.
- Selected public repositories only: repository name, description, URL, primary language, stars, forks, and last updated timestamp.
- Do not display private repository names, private contribution data, tokens, email addresses, or any data that requires elevated permissions.
- Do not imply that stars, repository counts, or language statistics measure skill or code quality.

### Architecture
1. Fetch GitHub data on the server only; never call GitHub with a personal access token from browser code.
2. Prefer unauthenticated public REST requests if rate limits are sufficient. Add a narrowly scoped server-side token only if observed rate-limit evidence justifies it.
3. If a token is used, store it as a Vercel server-side environment variable. Never prefix it with `NEXT_PUBLIC_`, commit it, render it, or include it in logs.
4. Implement a Next.js App Router Route Handler or server-only data module. Validate and normalize the GitHub response before rendering.
5. Apply explicit caching/revalidation (initial proposal: one hour) and document the chosen policy. Avoid a request to GitHub on every visitor page load.
6. Provide a static fallback state when GitHub is unavailable, rate-limited, or returns incomplete data. The portfolio must remain usable without GitHub.
7. Handle 403/429 rate-limit responses and transient 5xx/network failures without exposing upstream error bodies or credentials.
8. Set timeouts and avoid unbounded retries. Do not make client-side rendering wait indefinitely for GitHub.

### Security and privacy
- Request only public data and the minimum scopes required; public unauthenticated access is preferred.
- Keep secrets server-only and redact authorization headers from logs.
- Validate external URLs and render only expected GitHub HTTPS links.
- Do not accept arbitrary repository names or URLs from query parameters as upstream fetch targets.
- Do not expose raw API responses to the browser.

### Verification and acceptance criteria
- Build succeeds with and without a configured token.
- Page renders a useful fallback when GitHub is unavailable or rate-limited.
- No token appears in client bundles, page source, network responses, or logs.
- Cache/revalidation behavior is verified and documented.
- Displayed fields match the public GitHub API response at the time checked.
- Existing page layout, accessibility, and responsive behavior remain intact.
- Any displayed metric includes a retrieval timestamp and is not presented as a skill rating.

### Deferred implementation record
| Item | Value |
|---|---|
| Implementation branch | `portfolio` |
| Status | Not started |
| API code added | No |
| Token configured | No |
| Cache policy implemented | No |
| Verification | Pending |
