# AgentHub Admin Panel - Specification

## 1) Product Description

AgentHub is a SaaS platform where companies rent pre-configured AI agents with attachable skills for business tasks. This project defines an internal admin panel prototype for AgentHub staff to monitor operations, manage users and agents, inspect contracts, and resolve runtime issues.

Primary user:
- Internal admin/operator responsible for platform oversight, support, and operational maintenance.

## 2) Tech Stack And Constraints

Implementation constraints for the prototype:
- Markup: HTML (single page or multiple linked pages).
- Styling: Tailwind CSS loaded via CDN only.
- Interactivity: Vanilla JavaScript only.
- Data source: Hardcoded static data only (no API calls).
- Prohibited: React, Vue, Angular, jQuery, build tools, backend integration, external CSS files, inline style attributes.

Project quality constraints:
- Sidebar navigation must persist across all sections.
- Top bar must include a dark/light mode toggle implemented with Tailwind dark utilities.
- Mode selection must persist while navigating between sections.
- Structure should be semantic and implementation-ready for handoff.

Visual theme constraints:
- Light mode must use a sunset-inspired palette built from warm cream, sand, coral, amber, terracotta, and muted orange tones.
- Dark mode must use a black-first foundation with neon gray accents for panels, borders, text hierarchy, and highlights.
- Both themes must feel deliberate and branded rather than default Tailwind styling.
- Accent colors used in cards, badges, hover states, and active navigation must remain readable in both themes.

## 3) Information Architecture

Required sections in sidebar navigation:
1. Dashboard
2. User Management
3. Agent Management
4. Skills
5. Agent Contracts
6. Error Log

Global shell requirements:
- Persistent left sidebar with clear active-state indicator.
- Top bar with page title area and dark/light toggle.
- Main content container for section views.

## 3.1 Visual Direction

1. Light mode palette:
- Base surfaces should lean warm and sunset-toned rather than pure white.
- Primary accents should come from coral, orange, amber, or terracotta families.
- Success, warning, and error indicators can vary by semantic role, but they should still harmonize with the sunset palette.

2. Dark mode palette:
- Backgrounds should anchor on black, charcoal-black, or near-black values.
- Panels and containers should step up using neon gray and graphite tones instead of flat mid-gray.
- Interactive highlights should glow subtly through cool neon-gray contrast, not saturated neon colors.

3. Cross-theme consistency:
- Layout, spacing, and component hierarchy remain identical across both themes.
- Theme switch changes palette, contrast, and emphasis without changing information architecture.
- The sidebar, top bar, cards, tables, modals, and badges must all have defined light and dark appearances.

## 4) Section Specifications

Each section below includes concrete visual and interaction requirements that are mandatory for implementation.

### 4.1 Dashboard

1. Metric grid:
- Show exactly four metric cards above the fold in a responsive 2x2 layout on desktop/tablet.
- Metrics: total revenue (month), discount/coupon losses, active agents, failing agents.
- Each card includes icon, label, and hardcoded value.

2. Card visual behavior:
- Each metric card uses a distinct accent color by metric type.
- Cards include subtle elevation/shadow and readable contrast in light and dark modes.
- Light mode cards should read as warm sunset surfaces; dark mode cards should sit on black/neon-gray layered panels.
- Values remain static/hardcoded in prototype.

3. Chart placeholder:
- A full-width placeholder block appears under cards.
- Placeholder uses dashed border and centered label Weekly Activity Chart Placeholder.
- No real chart library is used.

### 4.2 User Management

1. User table:
- Render a table with at least 5 hardcoded rows.
- Columns: Name, Email, Plan, Status, Actions.
- Status is shown as a badge per user row.

2. Row actions:
- Each row has a three-dot action trigger (⋮).
- Dropdown includes at minimum View detail and Delete.
- Only one dropdown should be open at a time.

3. User detail modal:
- View detail opens a modal overlay with complete user record fields.
- Modal closes through explicit close button.
- Modal also closes when user clicks backdrop area.

### 4.3 Agent Management

1. Agent listing:
- Show at least 4 hardcoded agents.
- Each item includes agent name, owner, status badge, and skills summary.
- Status values include active, inactive, and failing.

2. Collapsible skill list:
- Skills are collapsed by default for each agent.
- Expand control reveals full skill list with visible smooth transition.
- Re-clicking the control collapses the list back.

3. Agent actions and configuration modal:
- Each agent row/card includes a three-dot dropdown.
- Dropdown includes Configure and Delete.
- Configure opens modal containing system prompt in editable textarea.

### 4.4 Skills

1. Skill catalog layout:
- Display at least 4 hardcoded skills.
- Each skill shows Name, short Description, and Enabled by X agents counter.
- Items can be cards or rows as long as metadata is clear.

2. Context explanation:
- Include a short explanatory panel defining skill in AgentHub context.
- Explanation must be visible in-section, not hidden in tooltip.
- Language should help non-technical admin users interpret the catalog.

3. Skill row actions:
- Each skill item has action dropdown via three-dot trigger.
- Dropdown includes View detail and Delete.
- Dropdown supports outside-click dismissal.

### 4.5 Agent Contracts

1. Contract table:
- Render at least 4 hardcoded contract rows.
- Columns: Client, Agent, Contracted Skills, Start Date, End Date, Total Amount Paid, Actions.
- Data formatting must be legible and consistent.

2. Contract detail action:
- Each row includes three-dot action dropdown.
- Dropdown includes View detail.
- View detail opens modal with full contract breakdown.

3. Itemized pricing in modal:
- Contract detail modal includes list of contracted skills.
- Each skill line includes individual price.
- Modal also includes aggregate total amount paid.

### 4.6 Error Log

1. Error entries:
- Render at least 6 hardcoded error records.
- Each record includes timestamp, agent name, error type, and short description.
- Entries are displayed in list or table format.

2. Severity/type badges:
- Error type/severity must be color-coded using badges.
- Color semantics are consistent across all entries.
- Badges remain readable in both light and dark modes.

3. Error actions:
- Each entry has three-dot dropdown with View detail and Mark as resolved.
- View detail opens modal containing full error trace payload.
- Mark as resolved is represented as an interactive control (state can remain local/static in prototype).

## 5) Shared Component Inventory

Reusable UI components to implement across sections:
1. Sidebar navigation
- Persistent vertical nav, icons optional, active item highlight required.

2. Top bar + dark mode toggle
- Toggle control flips root dark state using Tailwind dark utilities.

3. Metric card
- Icon + label + value + accent style variant.

4. Action dropdown
- Triggered by three-dot button.
- Supports open/close and outside-click close.

5. Modal overlay
- Backdrop + centered modal panel + close control.
- Close on backdrop click and close button.

6. Status/error badge
- Pill-like badge with semantic color variants.

7. Collapsible skill list
- Expand/collapse content region with transition.

## 6) Global Interaction Contracts

1. Dropdown behavior:
- Clicking three-dot trigger opens that row/item menu.
- Opening one menu closes any other open menu.
- Clicking outside menu/trigger closes open menu.

2. Modal behavior:
- Trigger action opens modal with section-specific detail content.
- Close button dismisses modal.
- Clicking backdrop dismisses modal.

3. Collapsible behavior:
- Skill details hidden initially.
- Expand/collapse control toggles visibility.
- Transition is noticeable but brief and does not shift unrelated layout abruptly.

4. Dark/light mode behavior:
- Toggle updates entire interface theme via Tailwind dark classes.
- Mode persists while moving between sections/views.
- All core components preserve contrast/accessibility in both themes.
- Light mode applies the sunset palette consistently; dark mode applies the black and neon-gray palette consistently.

## 7) Wire Sketches (Low-Fidelity)

These sketches define structure only. They are not final visual design.

### 7.1 App Shell (Desktop)

```text
+----------------------------------------------------------------------------------+
| SIDEBAR (fixed)        | TOP BAR: [Section Title]              [Light/Dark Toggle] |
| - Dashboard            +----------------------------------------------------------+
| - User Management      | MAIN CONTENT AREA                                       |
| - Agent Management     |                                                          |
| - Skills               |  [Section-specific layout rendered here]                 |
| - Agent Contracts      |                                                          |
| - Error Log            |                                                          |
+----------------------------------------------------------------------------------+
```

### 7.2 Dashboard Wire

```text
MAIN CONTENT
+------------------+ +------------------+
| Card: Revenue    | | Card: Losses     |
| Icon  Label  $   | | Icon  Label  $   |
+------------------+ +------------------+
+------------------+ +------------------+
| Card: Active Ag. | | Card: Failing Ag.|
| Icon  Label  #   | | Icon  Label  #   |
+------------------+ +------------------+
+--------------------------------------------------------------+
| Weekly Activity Chart Placeholder (dashed boundary)          |
+--------------------------------------------------------------+
```

### 7.3 Table Views Wire (Users / Contracts / Error Log)

```text
+----------------------------------------------------------------------------+
| Section Header                                            [Optional Filter] |
+----------------------------------------------------------------------------+
| Column A | Column B | Column C | Column D | ... | Actions (⋮)             |
|--------------------------------------------------------------------------  |
| row 1                                                         [⋮]           |
| row 2                                                         [⋮]           |
| row 3                                                         [⋮]           |
| row n                                                         [⋮]           |
+----------------------------------------------------------------------------+
```

### 7.4 Agent Management Wire

```text
+----------------------------------------------------------------------------+
| Agent Name | Owner | Status Badge | Skills (collapsed by default) | [⋮]   |
|   > Show skills (expand control)                                          |
|   - Skill A                                                                |
|   - Skill B                                                                |
+----------------------------------------------------------------------------+
| Agent Name | Owner | Status Badge | Skills (collapsed)             | [⋮]   |
+----------------------------------------------------------------------------+
```

### 7.5 Skills Catalog Wire

```text
+----------------------------------------------------------------------------+
| Info Panel: What is a skill in AgentHub?                                   |
+----------------------------------------------------------------------------+
| Skill Card/Row: Name | Short Description | Enabled by X agents | Actions ⋮ |
| Skill Card/Row: Name | Short Description | Enabled by X agents | Actions ⋮ |
| Skill Card/Row: Name | Short Description | Enabled by X agents | Actions ⋮ |
+----------------------------------------------------------------------------+
```

### 7.6 Modal Overlay Wire (Used In Multiple Sections)

```text
+--------------------------- PAGE BACKDROP ----------------------------------+
|                                                                            |
|            +--------------------------------------------------+            |
|            | Modal Title                          [X Close]   |            |
|            |--------------------------------------------------|            |
|            | Detail content area (user/agent/contract/error) |            |
|            |                                                  |            |
|            +--------------------------------------------------+            |
|                                                                            |
+----------------------------------------------------------------------------+
```

### 7.7 Tablet Adaptation Wire

```text
+--------------------------------------------------------------+
| Top Bar: [Menu] [Section Title]           [Theme Toggle]     |
+--------------------------------------------------------------+
| Sidebar can collapse to icon rail or slide panel             |
+--------------------------------------------------------------+
| Content stacks more vertically                               |
| - Dashboard cards may become 1x4 or 2x2 based on width       |
| - Tables remain scrollable horizontally if needed             |
+--------------------------------------------------------------+
```

## 8) Acceptance Criteria (Numbered, Verifiable)

1. SPECS file exists at repository root as SPECS.md and is complete before HTML implementation starts.
2. Spec includes short product description and identifies admin/operator as primary user.
3. Spec enforces constraints: HTML, Tailwind CDN, vanilla JavaScript, hardcoded data, no backend/frameworks.
4. Sidebar includes all six required sections and remains persistent in app shell.
5. Dashboard spec defines four metric cards with icon, label, and value plus chart placeholder.
6. User Management spec defines table with at least 5 rows and status badges.
7. Agent Management spec defines at least 4 agents with collapsed-by-default skill lists.
8. Skills section spec defines at least 4 skills and includes in-panel skill explanation.
9. Contracts section spec defines at least 4 contracts and modal itemized skill pricing.
10. Error Log spec defines at least 6 entries with color-coded type/severity badges.
11. Every table/list row item that requires actions includes a three-dot dropdown menu.
12. Dropdown menus close when clicking outside the menu area.
13. At least one modal interaction is specified for Users, Agent Management, Contracts, and Error Log.
14. All modals are required to close through both close button and backdrop click.
15. Agent skill expand/collapse behavior includes visible transition and default collapsed state.
16. Dark/light toggle is required in top bar and uses Tailwind dark utilities.
17. Dark/light mode preference persists while navigating sections.
18. Light mode uses a sunset palette and dark mode uses a black with neon-gray palette across primary surfaces and components.
19. Cross-section entity naming is consistent (same agent can appear in agent list, contracts, and error log).
20. Semantic HTML structure is required in implementation guidance (nav, header, main, section, table where applicable).
21. Layout requirements include usable desktop and tablet presentation.
22. Wire sketches section is present and includes shell, dashboard, table views, agent list, skills, modal, and tablet adaptation.
23. Stitch-generated visual proposal is explicitly treated as design guidance and not final source of truth.
24. Git workflow requirement is explicit: SPECS.md commit must happen before first HTML commit.

## 9) Delivery Workflow Notes

1. Commit SPECS.md first in a dedicated commit before creating/modifying HTML files.
2. Use SPECS.md as prompt input for Google Stitch to generate a visual concept.
3. Adapt generated concept manually to match these requirements exactly.
4. Keep this document as source of truth if visual proposal conflicts with requirements.
