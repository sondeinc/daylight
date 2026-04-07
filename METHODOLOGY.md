# Sonde Score Methodology

**Version:** v0.1 (calibrating)
**Status:** Living standard — updated as we learn from community feedback

---

## What is the Sonde Score?

The Sonde Score is a universal 0-1000 compliance index for measuring website
accessibility. Think of it like a credit score: higher is better, and the
number reflects the overall health of a site's accessibility posture.

The 1000-point scale was chosen deliberately. A percentage-based score creates
a pass/fail mental model ("you got a C"). A credit-score-style number creates
a *diagnostic* mental model ("here's where you stand, and here's how to
improve"). Every point of improvement matters.

---

## The Formula

```
Score = round(1000 × S / (S + P/N))
```

Where:

| Symbol | Meaning | Current Value |
|--------|---------|:------------:|
| **S** | Sensitivity (curve midpoint) | 750 |
| **P** | Total weighted penalty: Σ(weight × count) | *per scan* |
| **N** | Number of pages scanned | *per scan* |

The harmonic curve maps the penalty range [0, infinity) onto the score range
(0, 1000]. This eliminates zero scores (every site gets a meaningful number)
while preserving rank order. A site with P/N = S scores exactly 500.

---

## Severity Weights

Each finding is classified by its impact on human access:

| Severity | Weight | Rationale |
|----------|:------:|-----------|
| **Critical** | 10.0 | Blocks access entirely — keyboard traps, missing page language, focus loops |
| **High** | 3.0 | Significant barrier — missing alt text on meaningful images, insufficient contrast on body text |
| **Medium** | 1.0 | Reduces usability — heading hierarchy violations, unclear link purpose |
| **Low** | 0.25 | Best practice — informational suggestions that improve but don't block access |

The 40:1 ratio between critical and low reflects the real-world impact
difference: a keyboard trap makes a page completely unusable for some people,
while a best-practice violation is an improvement opportunity.

---

## Per-Page Normalization

The raw penalty (P) is divided by the number of pages scanned (N) before
applying the harmonic curve. This makes scores *comparable across sites of
any size*:

- A 5-page site with 10 critical findings scores lower than a 500-page site
  with 10 critical findings (same absolute count, but 100x more pages dilute
  the per-page impact)
- A site that scans 3 pages is directly comparable to a site that scans 300

---

## Element Compliance Rate (ECR)

In addition to the Sonde Score, each report includes an **Element Compliance
Rate** — the percentage of DOM elements with zero findings:

```
ECR = ((totalElements - elementsWithFindings) / totalElements) × 100
```

The ECR is a *breadth* metric (how many elements are clean?) while the Sonde
Score is a *depth* metric (how severe are the problems?). A site can have a
high ECR but a low Sonde Score if the few problematic elements have critical
issues.

---

## Edge Cases

| Scenario | Score | Reasoning |
|----------|:-----:|-----------|
| Zero findings | 1000 | Clean bill of health |
| Zero pages scanned | 0 | Incomplete scan, not a clean result |
| Only low-severity findings | 950-999 | Mild penalty, still excellent |
| Mix of critical + low | Varies | Dominated by critical findings due to 40:1 weight ratio |

---

## Calibration

The weights and sensitivity parameter are in **calibrating** status. After
15+ government site scans, we will evaluate the score distribution against
these targets:

- **Target median:** 400-600 (most sites should cluster around the middle)
- **Target spread:** 250-750 (scores should use most of the 1000-point range)

If the actual distribution is too compressed or too skewed, we adjust the
sensitivity parameter (S) and re-score all sites. Score changes from
calibration are always documented in the changelog below.

---

## What We Scan

Each site is scanned using:

- **axe-core** — industry-standard WCAG 2.1 AA rule engine
- **Custom probes** — keyboard navigation, focus management, color contrast
  with suggested fixes, heading hierarchy, page language detection
- **Source tracing** — findings are traced back to source code locations where
  possible, with confidence levels (high/medium/low)

Pages are discovered by crawling from the site's homepage. The number of pages
scanned varies by site size and configuration.

---

## Section 508 Crosswalk

Each WCAG 2.1 AA criterion is mapped to the corresponding Section 508
provision using the official crosswalk. Reports show both the WCAG criterion
(e.g., "1.1.1 Non-text Content") and the Section 508 provision (e.g.,
"E205.4, 602.3") for each finding.

---

## Changelog

| Date | Change | Impact |
|------|--------|--------|
| 2026-04 | Initial weights published | First public version |

---

## Feedback

This methodology is published here specifically so you can review it, question
it, and help us improve it. If you see a problem:

- **Methodology questions:** [Start a discussion](../../discussions/categories/methodology)
- **Scoring issues on a specific site:** [Report it](../../issues/new?template=report-scanning-issue.yml)
- **Weight calibration suggestions:** Open a discussion with your analysis

We take every report seriously. If we got something wrong, we fix it and
re-score.
