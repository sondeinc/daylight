# Contributing to Daylight

Daylight is a community-driven project. You don't need to write code to make
a meaningful contribution — in fact, the most valuable contributions come from
people who use the results.

---

## Ways to Contribute

### 1. Nominate a Government Site

Know a federal, state, or local government website that should be scanned?

**[Open a nomination](../../issues/new?template=nominate-site.yml)**

Include:
- The website URL
- The entity name (e.g., "Dallas County")
- The jurisdiction (state, federal, territory)
- *Optional:* Why this site matters to you

Nominations with upvotes are prioritized in each scan batch. If you see a
nomination you support, upvote it.

### 2. Report a Scanning Issue

Found something wrong in a report? False positive? Missing finding?
Questionable score?

**[Report it](../../issues/new?template=report-scanning-issue.yml)**

Include:
- Which site/report is affected
- What seems wrong (false positive, missed finding, score concern)
- The finding ID or WCAG criterion if applicable

Every report directly improves the scanner. You are our quality assurance
team, and we take every report seriously.

### 3. Discuss the Methodology

Have questions about how the Sonde Score works? Ideas for improving the
weighting algorithm? Concerns about how a specific criterion is evaluated?

**[Join the Methodology discussion](../../discussions/categories/methodology)**

The scoring methodology is published in full in
[METHODOLOGY.md](METHODOLOGY.md). We chose to open-source it specifically
so experts can review and improve it.

### 4. Verify Findings

If you have accessibility expertise, pick a report and spot-check the
findings against the live site. If you find discrepancies:

1. Note the finding ID and the report URL
2. Describe what you observed on the live site
3. [Report it](../../issues/new?template=report-scanning-issue.yml)

Community verification is one of the most powerful ways to improve accuracy.

### 5. Share Results

If a report is useful to you — share it. Every report has a stable URL and
individual findings have direct links. Share specific findings with your
team, include them in Jira tickets, reference them in internal audits.

The more people who see the data, the more likely it is to drive improvement.

---

## What Happens After You Contribute

- **Nominations:** Added to the scan queue. You'll be credited when the scan
  is published ("Nominated by @username").
- **Issue reports:** Investigated as soon as possible. Confirmed issues are
  corrected in the next scan batch.
- **Methodology feedback:** Discussed in the open. If we change the algorithm
  based on your input, we credit you in the changelog.

---

## What We Don't Accept

- Pull requests modifying scan data (data is generated, not hand-edited)
- Issues targeting individual government employees
- Commercial solicitation or promotion

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for the full community guidelines.

---

## Questions?

Start a thread in [General discussion](../../discussions/categories/general)
or email **daylight@sonde.life**.
