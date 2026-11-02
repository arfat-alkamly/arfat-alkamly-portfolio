# AUDIT — Portfolio Quality, Performance & Security

> Audit record for the portfolio repository. This document records observed evidence only. Do not estimate missing metrics or describe unverified behavior as complete.

## 0. Audit metadata

| Field | Value |
|---|---|
| Repository | `arfat-alkamly/arfat-alkamly-portfolio` |
| Working branch | `portfolio` |
| Production URL | `https://arfat-phi.vercel.app/` |
| Audit started | 2026-11-02 |
| Current audit commit | `77a2413578e7b09b88d1c2433f580a218a970d84` |
| Production deployment used for measurements | **Not yet confirmed** |
| Measurement status | Pending |
| Auditor | Repository owner |

## 1. Mandatory deployment blocker — identify the exact Vercel limit

**This is a gate before performance measurement or deployment planning.** Do not assume the cause from a generic deployment error or infer a monthly limit from a build failure.

Open Vercel Dashboard → select the portfolio project → **Usage** (or **Usage & Billing**, depending on dashboard layout). Set the relevant time range and inspect the usage/limit details. Record the exact product/resource name, current consumption, included limit, reset period/date, and the affected project/team. Check the relevant categories shown by the account, which may include:

- Deployments / deployment creation limits
- Build execution time / build minutes
- Function invocations or execution
- Bandwidth / data transfer
- Edge requests or other metered resources

Then inspect the failed deployment in **Deployments → select failed deployment → Build Logs**. Record the exact error text and timestamp. A build-rate-limit message is evidence of a build/deployment throttle; it is not by itself proof of a bandwidth, function, or monthly quota issue.

| Required evidence | Recorded value |
|---|---|
| Exact limit/resource name shown by Vercel | Pending |
| Project / team affected | Pending |
| Usage consumed | Pending |
| Included quota / limit | Pending |
| Measurement window (hour/day/month) | Pending |
| Reset date/time (include timezone) | Pending |
| Exact deployment/build error | Pending |
| Dashboard or log URL / screenshot reference | Pending |
| Resulting action | Pending |

**Gate:** Until the exact restriction and reset window are recorded, do not recommend waiting a specific number of hours, upgrading, changing hosting, or repeatedly triggering deployments.

## 2. Deployment baseline and measurement target

Record which deployment is being measured. If the latest source commit is not deployed, measurements must be labelled **“last successful production deployment”** (or **Preview deployment**) and must not be presented as measurements of the current source.

| Field | Value |
|---|---|
| Deployment status | Pending |
| Deployment URL | Pending |
| Environment | Production / Preview — pending |
| Deployment created at | Pending |
| Deployed commit SHA | Pending |
| Source branch | Pending |
| Production branch configured in Vercel | Pending |
| Is this the latest repository commit? | Pending |
| Reason if not latest | Pending |

### Deployment verification steps

1. In Vercel → Project → **Deployments**, identify the newest deployment with status **Ready**.
2. Open it and record its deployment URL, environment, commit SHA, branch, and creation time.
3. Confirm the Production domain is assigned to the intended Production deployment. A Ready Preview deployment does not update the production domain.
4. Compare the deployed commit SHA with the current `portfolio` branch head.
5. If the production deployment is older, state that explicitly in every measurement record.

## 3. Performance measurements

Lab and Field data are separate evidence sets. Never combine them in one metric column or substitute one metric for another.

### 3.1 Lab data — Lighthouse

Run Lighthouse against the exact deployment URL recorded in section 2. Use the same URL, device profile, Lighthouse version, and test conditions for before/after comparisons. Prefer at least three runs per page and report the median; retain the individual reports.

Suggested pages:
- Home: `/`
- About: `/about`
- AEGIS-TITAN: `/aegis-titan`
- Contact: `/contact`

**Browser procedure**
1. Open the target deployment URL in Chrome.
2. Open DevTools → **Lighthouse**.
3. Select Mobile (and optionally run a separate Desktop pass); categories: Performance and Accessibility. Keep the selected settings consistent.
4. Run the audit; save the HTML report or copy the report URL.
5. Repeat until there are three valid runs per page/device. Do not cherry-pick the best run.

**CLI alternative** (requires Node.js and Lighthouse installed):
```bash
npm install --global lighthouse
lighthouse "https://YOUR-DEPLOYMENT-URL/" --form-factor=mobile --only-categories=performance,accessibility --output=html --output-path="./lighthouse-home-mobile.html"
```

For each run, record Lighthouse's lab metrics. TBT is a lab metric and is not INP.

| Page / device | Run | Lighthouse version | LCP (ms) | CLS | TBT (ms) | Performance score | Report reference |
|---|---:|---|---:|---:|---:|---:|---|
| Home / Mobile | 1 | Pending | — | — | — | — | — |
| Home / Mobile | 2 | Pending | — | — | — | — | — |
| Home / Mobile | 3 | Pending | — | — | — | — | — |
| About / Mobile | 1–3 | Pending | — | — | — | — | — |
| AEGIS / Mobile | 1–3 | Pending | — | — | — | — | — |
| Contact / Mobile | 1–3 | Pending | — | — | — | — | — |

**Lab summary (median of valid runs)**

| Page / device | LCP (ms) | CLS | TBT (ms) | Performance score | Sample count |
|---|---:|---:|---:|---:|---:|
| Home / Mobile | — | — | — | — | 0 |
| About / Mobile | — | — | — | — | 0 |
| AEGIS / Mobile | — | — | — | — | 0 |
| Contact / Mobile | — | — | — | — | 0 |

### 3.2 Field data — Chrome UX Report (CrUX)

CrUX is real-user field data, not a Lighthouse simulation. It may be unavailable for a low-traffic site, a specific URL, or a metric. Record unavailable values as **Not available**; do not estimate them and do not replace INP with TBT.

#### Check availability first

**Option A — PageSpeed Insights (quick check)**
1. Open <https://pagespeed.web.dev/>.
2. Enter the exact Production URL (not a local URL and not an un-deployed source branch).
3. Run the report and inspect the **Discover what your real users are experiencing** / field-data section.
4. Record whether the report says URL-level data is available. If URL-level data is absent, check whether origin-level data is shown; label it **Origin-level**, not URL-level.
5. Record the reporting period shown by the report. If no field-data section or metric appears, record **Not available**.

**Option B — CrUX API (explicit programmatic check)**
The CrUX API requires an API key from Google Cloud with the Chrome UX Report API enabled. Store the key in an environment variable; do not commit it or paste it into this file.

For the origin:
```bash
export CRUX_API_KEY="YOUR_API_KEY"
curl -sS -X POST \
  "https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${CRUX_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "https://arfat-phi.vercel.app",
    "formFactor": "PHONE",
    "metrics": [
      "largest_contentful_paint",
      "interaction_to_next_paint",
      "cumulative_layout_shift"
    ]
  }'
```

For a specific URL, replace the `origin` property with `url` and its exact URL value:
```json
{
  "url": "https://arfat-phi.vercel.app/",
  "formFactor": "PHONE",
  "metrics": [
    "largest_contentful_paint",
    "interaction_to_next_paint",
    "cumulative_layout_shift"
  ]
}
```

Interpretation:
- A successful response containing `record.metrics` means field data was returned for that query. Record the query scope (URL or origin), form factor, collection period, and each metric's `percentiles.p75` and histogram.
- HTTP 404 / `Not Found` or a response with no record means no matching CrUX record was returned for that query. Record **Not available** for that scope; do not infer a value.
- HTTP 400 may indicate an invalid request or unsupported metric; inspect the error before concluding data is absent.
- HTTP 403 / 401 usually indicates API key, API enablement, or permission trouble; it does **not** prove CrUX data is unavailable. Fix access and retry.
- Do not publish the API key or raw response if it contains account-specific information.

**Field-data table (CrUX)**

| Scope / page | Form factor | Reporting period | LCP p75 (ms) | INP p75 (ms) | CLS p75 | Availability / source |
|---|---|---|---:|---:|---:|---|
| Origin: `https://arfat-phi.vercel.app` | Phone | Pending | Not checked | Not checked | Not checked | Pending |
| Home: `/` | Phone | Pending | Not checked | Not checked | Not checked | Pending |
| About: `/about` | Phone | Pending | Not checked | Not checked | Not checked | Pending |
| AEGIS: `/aegis-titan` | Phone | Pending | Not checked | Not checked | Not checked | Pending |
| Contact: `/contact` | Phone | Pending | Not checked | Not checked | Not checked | Pending |

Repeat separately for Desktop if required. Never merge Phone and Desktop records.

### 3.3 Measurement rules

- LCP and CLS can each have Lab (Lighthouse) and Field (CrUX) values; keep them in their respective tables.
- INP is a Field metric in CrUX. Lighthouse lab TBT is not a substitute or estimate for INP.
- Use p75 for CrUX comparisons and report the collection period and scope.
- Record “Not available” when CrUX does not return a metric. Distinguish missing data from API/authentication errors.
- Do not compare measurements from different deployments as if they were a before/after test of the same release.
- Preserve raw reports and timestamps so the result can be reproduced.

## 4. Contact form integrity checks

No additional user-facing fields are planned. Anti-automation protection (honeypot and/or rate limiting) is a backend safety control, not a new visible form field.

| Check | Procedure | Result / evidence |
|---|---|---|
| Normal submission | Submit a valid test message and verify the expected delivery/receipt path | Pending |
| Required-field validation | Submit with required values missing | Pending |
| Invalid email | Submit malformed email value | Pending |
| Honeypot (if implemented) | Submit with honeypot populated; verify safe rejection/ignore behavior | Pending |
| Rate limit (if implemented) | Send controlled repeated test requests; verify throttling and response | Pending |
| Error handling | Test server/network failure; verify understandable feedback and no false success | Pending |
| Mobile usability | Complete a test submission on a mobile viewport | Pending |
| Privacy | Ensure secrets, tokens, and message contents are not exposed in client logs or public responses | Pending |

Do not claim the form is protected by a control until the implementation and behavior have both been verified. Re-run these checks after deployment.

## 5. Security and quality review

| Area | Evidence / method | Status |
|---|---|---|
| Security headers | Inspect production response headers; record actual values | Pending |
| Content Security Policy | Introduce in report-only mode first; verify required assets and flows before enforcement | Pending |
| Dependencies | Run package audit; review findings and applicability | Pending |
| Accessibility | Lighthouse plus keyboard/focus and form-label checks | Pending |
| Responsive layout | Verify mobile/tablet/desktop on key pages | Pending |
| Metadata | Verify title, description, canonical and Open Graph output | Pending |
| GitHub integration | **Deferred appendix / future task. No GitHub API code in this audit step.** | Deferred |

Useful commands:
```bash
# Inspect production response headers
curl -sSI https://arfat-phi.vercel.app/

# Inspect package vulnerabilities (run from repository root)
npm audit
```

Record the command date, tool/runtime version, full relevant output, and any accepted risk. Do not label a site “secure” based only on header presence or a clean dependency audit.

## 6. Change log

| Date (UTC) | Branch | Commit | Change | Verification |
|---|---|---|---|---|
| 2026-11-02 | `portfolio` | `77a2413578e7b09b88d1c2433f580a218a970d84` | Baseline before this audit document | Branch head verified |
| 2026-11-02 | `portfolio` | Pending | Add `AUDIT.md` with deployment gate, separate Lab/Field tables, CrUX checks, form checks, and change log | Pending |

## 7. Working and release rules

1. Do not commit directly to `main`. Work on a feature/audit branch and review changes before merging.
2. Keep `main` deployable; do not use it as a scratch branch.
3. Do not change the established visual identity, typography, or working components without a demonstrated reason and a scoped change.
4. Do not add a CV download button unless a real CV file is present.
5. Do not add fabricated testimonials, badges, awards, metrics, or project claims.
6. Avoid unsupported superlatives such as “expert”, “advanced”, or “professional”. Describe specific work and verifiable evidence instead.
7. Preserve existing content and behavior unless a change is explicitly justified and tested.
8. A successful Git commit is not proof of a successful Vercel deployment. Verify deployment status and the live page separately.
9. Record limitations honestly. Never fabricate missing CrUX, Lighthouse, Vercel usage, or contact-form results.

## 8. Future appendix — GitHub data integration

**Deferred.** No GitHub API code, token, endpoint, or integration is included in this audit document. This appendix is reserved for the later implementation plan, including server-side access, cache/revalidation policy, error fallback, and secret handling.
