        const appState = {
            theme: localStorage.getItem('agenthub-theme') || 'light',
            activeDropdownId: null,
            openAgentSkills: new Set(),
            currentModal: null,
            errors: [
                {
                    id: 'err-1',
                    timestamp: '2026-06-26 09:12',
                    agent: 'Atlas Support',
                    type: 'Critical',
                    description: 'Timeout while summarizing a 400-page policy archive.',
                    trace: 'ErrorTrace: Request exceeded 30s limit while processing policy_archive_v4.pdf. Retry attempts exhausted after 3 fallback calls.',
                    resolved: false
                },
                {
                    id: 'err-2',
                    timestamp: '2026-06-26 08:47',
                    agent: 'Pipeline Analyst',
                    type: 'Warning',
                    description: 'Missing CRM sync payload for contract renewal batch.',
                    trace: 'WarningTrace: CRM adapter returned null payload for batch_4481. Contract summary generated with stale cache snapshot.',
                    resolved: false
                },
                {
                    id: 'err-3',
                    timestamp: '2026-06-25 21:18',
                    agent: 'Compliance Sentinel',
                    type: 'Critical',
                    description: 'Document validator failed on regional onboarding pack.',
                    trace: 'ErrorTrace: Validation schema mismatch at /sections/12/checklist_items/5. Region context EU-West not mapped.',
                    resolved: false
                },
                {
                    id: 'err-4',
                    timestamp: '2026-06-25 19:40',
                    agent: 'Ops Navigator',
                    type: 'Info',
                    description: 'Escalation route recovered after temporary calendar auth loss.',
                    trace: 'InfoTrace: OAuth token refreshed successfully. Escalation schedule service resumed at 19:37.',
                    resolved: true
                },
                {
                    id: 'err-5',
                    timestamp: '2026-06-25 17:03',
                    agent: 'Atlas Support',
                    type: 'Warning',
                    description: 'Knowledge response used stale FAQ entry version.',
                    trace: 'WarningTrace: faq_version=2026.05 served instead of faq_version=2026.06 due to cache invalidation lag.',
                    resolved: false
                },
                {
                    id: 'err-6',
                    timestamp: '2026-06-24 14:26',
                    agent: 'Ops Navigator',
                    type: 'Critical',
                    description: 'Scheduling workflow failed to attach executive approval note.',
                    trace: 'ErrorTrace: approval_note_id missing from schedule_publish workflow. Final dispatch blocked for client Meridian Flow.',
                    resolved: false
                }
            ]
        };

        const metrics = [
            { label: 'Total Revenue', value: '$248,900', icon: '$', accent: 'from-sky-500 to-cyan-400', detail: 'Month to date' },
            { label: 'Discount Losses', value: '$18,450', icon: '%', accent: 'from-cyan-500 to-blue-400', detail: 'Coupons and credits' },
            { label: 'Active Agents', value: '128', icon: 'A', accent: 'from-blue-500 to-sky-400', detail: 'Across all clients' },
            { label: 'Failing Agents', value: '9', icon: '!', accent: 'from-sky-700 to-sky-500', detail: 'Require intervention' }
        ];

        let users = [
            { id: 'usr-1', name: 'Ariana Cole', email: 'ariana@northforge.ai', plan: 'Enterprise', status: 'Active', company: 'Northforge AI', region: 'New York, USA', joined: '2025-11-14' },
            { id: 'usr-2', name: 'Mateo Lin', email: 'mateo@meridianflow.com', plan: 'Growth', status: 'Trial', company: 'Meridian Flow', region: 'Austin, USA', joined: '2026-03-02' },
            { id: 'usr-3', name: 'Sofia Rahal', email: 'sofia@verralabs.io', plan: 'Enterprise', status: 'Active', company: 'Verra Labs', region: 'Toronto, Canada', joined: '2025-09-28' },
            { id: 'usr-4', name: 'Jordan Pike', email: 'jpike@caremesh.health', plan: 'Scale', status: 'Suspended', company: 'CareMesh Health', region: 'Chicago, USA', joined: '2025-12-19' },
            { id: 'usr-5', name: 'Leila Noor', email: 'leila@echobase.co', plan: 'Growth', status: 'Active', company: 'EchoBase', region: 'London, UK', joined: '2026-01-10' }
        ];

        let agents = [
            {
                id: 'agt-1',
                name: 'Atlas Support',
                owner: 'Northforge AI',
                status: 'Active',
                prompt: 'You are Atlas Support, a client-facing service agent focused on billing clarity, product guidance, and escalation triage. Keep tone calm and precise.',
                skills: ['Document Reader', 'Calendar Routing', 'Knowledge Retrieval']
            },
            {
                id: 'agt-2',
                name: 'Pipeline Analyst',
                owner: 'Meridian Flow',
                status: 'Inactive',
                prompt: 'You are Pipeline Analyst, an operations analyst agent that summarizes sales pipeline friction, flags stalled opportunities, and prepares renewal notes.',
                skills: ['CRM Sync', 'Spreadsheet Analysis', 'Weekly Reporting']
            },
            {
                id: 'agt-3',
                name: 'Compliance Sentinel',
                owner: 'CareMesh Health',
                status: 'Failing',
                prompt: 'You are Compliance Sentinel, a document auditing agent that validates regulated onboarding packets and highlights missing controls before submission.',
                skills: ['Document Reader', 'Policy Validator', 'Audit Logging']
            },
            {
                id: 'agt-4',
                name: 'Ops Navigator',
                owner: 'EchoBase',
                status: 'Active',
                prompt: 'You are Ops Navigator, an internal coordination agent that books follow-ups, manages executive calendars, and routes escalations with urgency context.',
                skills: ['Calendar Routing', 'Escalation Planner', 'Priority Tagging']
            }
        ];

        let skills = [
            {
                id: 'skl-1',
                name: 'Document Reader',
                description: 'Parses uploaded files, extracts structured summaries, and highlights key sections for agent workflows.',
                enabledBy: 16,
                detail: 'Used for PDFs, contracts, policy packs, and long-form internal handbooks.'
            },
            {
                id: 'skl-2',
                name: 'Calendar Routing',
                description: 'Handles schedule checks, slot suggestions, and follow-up event creation for human teams.',
                enabledBy: 9,
                detail: 'Supports escalation scheduling, booking confirmations, and executive calendar coordination.'
            },
            {
                id: 'skl-3',
                name: 'Policy Validator',
                description: 'Compares documents against compliance rulesets and flags missing controls or mismatched schema entries.',
                enabledBy: 7,
                detail: 'Often paired with healthcare, finance, and enterprise onboarding flows.'
            },
            {
                id: 'skl-4',
                name: 'Weekly Reporting',
                description: 'Builds operational recaps from structured activity logs and prepares narrative summaries for stakeholders.',
                enabledBy: 11,
                detail: 'Best suited for growth ops, sales pipeline, and customer success review cadences.'
            }
        ];

        const contracts = [
            {
                id: 'ctr-1',
                client: 'Northforge AI',
                agent: 'Atlas Support',
                dates: '2026-01-01 to 2026-12-31',
                amount: '$62,000',
                skills: [
                    { name: 'Document Reader', price: '$12,000' },
                    { name: 'Calendar Routing', price: '$9,000' },
                    { name: 'Knowledge Retrieval', price: '$14,000' }
                ]
            },
            {
                id: 'ctr-2',
                client: 'Meridian Flow',
                agent: 'Pipeline Analyst',
                dates: '2026-02-15 to 2026-08-15',
                amount: '$41,500',
                skills: [
                    { name: 'CRM Sync', price: '$10,000' },
                    { name: 'Spreadsheet Analysis', price: '$8,500' },
                    { name: 'Weekly Reporting', price: '$7,500' }
                ]
            },
            {
                id: 'ctr-3',
                client: 'CareMesh Health',
                agent: 'Compliance Sentinel',
                dates: '2025-11-01 to 2026-10-31',
                amount: '$73,400',
                skills: [
                    { name: 'Document Reader', price: '$13,400' },
                    { name: 'Policy Validator', price: '$19,000' },
                    { name: 'Audit Logging', price: '$11,000' }
                ]
            },
            {
                id: 'ctr-4',
                client: 'EchoBase',
                agent: 'Ops Navigator',
                dates: '2026-04-01 to 2026-09-30',
                amount: '$38,900',
                skills: [
                    { name: 'Calendar Routing', price: '$9,800' },
                    { name: 'Escalation Planner', price: '$8,600' },
                    { name: 'Priority Tagging', price: '$6,500' }
                ]
            }
        ];

        const themeLabel = document.getElementById('theme-label');
        const html = document.documentElement;
        const modalRoot = document.getElementById('modal-root');
        const modalEyebrow = document.getElementById('modal-eyebrow');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        const pageTitle = document.getElementById('page-title');
        const mobileSidebar = document.getElementById('mobile-sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');

        function applyTheme(theme) {
            appState.theme = theme;
            html.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('agenthub-theme', theme);
            themeLabel.textContent = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
        }

        function badgeClasses(status) {
            const tone = status.toLowerCase();
            if (tone === 'active') return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300';
            if (tone === 'trial') return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-300';
            if (tone === 'inactive') return 'bg-slate-200 text-slate-800 dark:bg-neon-700 dark:text-neon-100';
            if (tone === 'suspended') return 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300';
            if (tone === 'failing') return 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300';
            if (tone === 'critical') return 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300';
            if (tone === 'warning') return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-300';
            if (tone === 'info') return 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300';
            return 'bg-sky-100 text-sky-800 dark:bg-neon-800 dark:text-neon-100';
        }

        function renderMetrics() {
            const container = document.getElementById('metric-grid');
            container.innerHTML = metrics.map((metric) => `
                <article class="rounded-[2rem] border border-sky-200 bg-white/75 p-5 shadow-sky transition hover:-translate-y-0.5 dark:border-neon-800 dark:bg-neon-900/35 dark:shadow-neon">
                    <div class="flex items-start justify-between gap-4">
                        <div class="rounded-2xl p-3 -m-1 dark:bg-black/75">
                            <p class="text-sm uppercase tracking-[0.18em] text-sky-600 dark:text-neon-400">${metric.label}</p>
                            <p class="mt-4 font-display text-3xl font-bold tracking-tight">${metric.value}</p>
                            <p class="mt-2 text-sm text-sky-700 dark:text-neon-300">${metric.detail}</p>
                        </div>
                        <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${metric.accent} text-xl font-display font-bold text-white shadow-lg">
                            ${metric.icon}
                        </div>
                    </div>
                </article>
            `).join('');
        }

        function renderUsers() {
            const rows = users.map((user) => `
                <tr class="border-b border-sky-100 text-sm last:border-b-0 dark:border-neon-800/70">
                    <td class="px-6 py-5 font-medium">${user.name}</td>
                    <td class="px-6 py-5 text-sky-700 dark:text-neon-300">${user.email}</td>
                    <td class="px-6 py-5">${user.plan}</td>
                    <td class="px-6 py-5"><span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClasses(user.status)}">${user.status}</span></td>
                    <td class="px-6 py-5 text-right">${renderDropdown('user', user.id, [{ label: 'View detail', action: 'open-user' }, { label: 'Delete', action: 'delete-user' }])}</td>
                </tr>
            `).join('');

            const cards = users.map((user) => `
                <article class="rounded-[1.8rem] border border-sky-200 bg-white/80 p-4 dark:border-neon-800 dark:bg-neon-900/45">
                    <div class="flex items-start justify-between gap-4">
                        <div class="rounded-2xl p-2 -m-1 dark:bg-black/75">
                            <h3 class="font-display text-lg font-semibold">${user.name}</h3>
                            <p class="mt-1 text-sm text-sky-700 dark:text-neon-300">${user.email}</p>
                        </div>
                        ${renderDropdown('user-mobile', user.id, [{ label: 'View detail', action: 'open-user' }, { label: 'Delete', action: 'delete-user' }])}
                    </div>
                    <div class="mt-4 flex flex-wrap items-center gap-3 text-sm">
                        <span class="rounded-full bg-sky-100 px-3 py-1 text-sky-800 dark:bg-neon-800 dark:text-neon-100">${user.plan}</span>
                        <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClasses(user.status)}">${user.status}</span>
                    </div>
                </article>
            `).join('');

            document.getElementById('users-table-body').innerHTML = rows;
            document.getElementById('users-mobile-list').innerHTML = cards;
        }

        function renderAgents() {
            document.getElementById('agents-list').innerHTML = agents.map((agent) => {
                const isOpen = appState.openAgentSkills.has(agent.id);
                return `
                    <article class="rounded-[2rem] border border-sky-200 bg-white/75 p-5 shadow-sky dark:border-neon-800 dark:bg-neon-900/35 dark:shadow-neon">
                        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div class="rounded-2xl p-3 -m-1 dark:bg-black/75">
                                <div class="flex flex-wrap items-center gap-3">
                                    <h3 class="font-display text-2xl font-bold tracking-tight">${agent.name}</h3>
                                    <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClasses(agent.status)}">${agent.status}</span>
                                </div>
                                <p class="mt-2 text-sm text-sky-700 dark:text-neon-300">Owned by ${agent.owner}</p>
                            </div>
                            ${renderDropdown('agent', agent.id, [{ label: 'Configure', action: 'open-agent' }, { label: 'Delete', action: 'delete-agent' }])}
                        </div>
                        <div class="mt-5 rounded-[1.5rem] border border-sky-100 bg-sky-50/80 p-4 dark:border-neon-800 dark:bg-black/45">
                            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p class="text-sm uppercase tracking-[0.18em] text-sky-600 dark:text-neon-400">Skills</p>
                                    <p class="mt-1 text-sm text-sky-700 dark:text-neon-300">${agent.skills.length} linked capabilities</p>
                                </div>
                                <button type="button" class="inline-flex items-center gap-2 self-start rounded-full border border-sky-200 px-4 py-2 text-sm font-medium text-sky-800 transition hover:bg-sky-100 dark:border-neon-700 dark:text-neon-100 dark:hover:bg-neon-900" data-skill-toggle="${agent.id}" aria-expanded="${isOpen}">
                                    <span>${isOpen ? 'Hide skills' : 'Show skills'}</span>
                                    <span class="transition-transform ${isOpen ? 'rotate-180' : ''}">▾</span>
                                </button>
                            </div>
                            <div class="overflow-hidden transition-all duration-300 ${isOpen ? 'mt-4 max-h-48' : 'max-h-0'}">
                                <ul class="grid gap-2 text-sm text-sky-800 dark:text-neon-100">
                                    ${agent.skills.map((skill) => `<li class="rounded-2xl border border-sky-100 bg-white/80 px-4 py-3 dark:border-neon-800 dark:bg-neon-900/60">${skill}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </article>
                `;
            }).join('');
        }

        function renderSkills() {
            document.getElementById('skills-list').innerHTML = skills.map((skill) => `
                <article class="rounded-[2rem] border border-sky-200 bg-white/75 p-5 shadow-sky dark:border-neon-800 dark:bg-neon-900/35 dark:shadow-neon">
                    <div class="flex items-start justify-between gap-4">
                        <div class="rounded-2xl p-3 -m-1 dark:bg-black/75">
                            <p class="text-xs uppercase tracking-[0.24em] text-sky-600 dark:text-neon-400">Skill</p>
                            <h3 class="mt-2 font-display text-2xl font-bold tracking-tight">${skill.name}</h3>
                        </div>
                        ${renderDropdown('skill', skill.id, [{ label: 'View detail', action: 'open-skill' }, { label: 'Delete', action: 'delete-skill' }])}
                    </div>
                    <p class="mt-4 text-sm leading-7 text-sky-700 dark:text-neon-300">${skill.description}</p>
                    <div class="mt-5 flex items-center justify-between rounded-[1.4rem] bg-sky-100/80 px-4 py-3 dark:bg-black/45">
                        <span class="text-sm text-sky-700 dark:text-neon-300">Enabled by</span>
                        <span class="font-display text-xl font-semibold">${skill.enabledBy} agents</span>
                    </div>
                </article>
            `).join('');
        }

        function renderContracts() {
            const rows = contracts.map((contract) => `
                <tr class="border-b border-sky-100 text-sm last:border-b-0 dark:border-neon-800/70">
                    <td class="px-6 py-5 font-medium">${contract.client}</td>
                    <td class="px-6 py-5">${contract.agent}</td>
                    <td class="px-6 py-5 text-sky-700 dark:text-neon-300">${contract.skills.map((skill) => skill.name).join(', ')}</td>
                    <td class="px-6 py-5">${contract.dates}</td>
                    <td class="px-6 py-5 font-semibold">${contract.amount}</td>
                    <td class="px-6 py-5 text-right">${renderDropdown('contract', contract.id, [{ label: 'View detail', action: 'open-contract' }])}</td>
                </tr>
            `).join('');

            const cards = contracts.map((contract) => `
                <article class="rounded-[1.8rem] border border-sky-200 bg-white/80 p-4 dark:border-neon-800 dark:bg-neon-900/45">
                    <div class="flex items-start justify-between gap-4">
                        <div class="rounded-2xl p-2 -m-1 dark:bg-black/75">
                            <h3 class="font-display text-lg font-semibold">${contract.client}</h3>
                            <p class="mt-1 text-sm text-sky-700 dark:text-neon-300">${contract.agent}</p>
                        </div>
                        ${renderDropdown('contract-mobile', contract.id, [{ label: 'View detail', action: 'open-contract' }])}
                    </div>
                    <div class="mt-4 space-y-2 text-sm">
                        <p><span class="font-semibold">Dates:</span> ${contract.dates}</p>
                        <p><span class="font-semibold">Skills:</span> ${contract.skills.map((skill) => skill.name).join(', ')}</p>
                        <p><span class="font-semibold">Amount:</span> ${contract.amount}</p>
                    </div>
                </article>
            `).join('');

            document.getElementById('contracts-table-body').innerHTML = rows;
            document.getElementById('contracts-mobile-list').innerHTML = cards;
        }

        function renderErrors() {
            const rows = appState.errors.map((error) => `
                <tr class="border-b border-sky-100 text-sm last:border-b-0 dark:border-neon-800/70 ${error.resolved ? 'opacity-70' : ''}">
                    <td class="px-6 py-5 font-medium">${error.timestamp}</td>
                    <td class="px-6 py-5">${error.agent}</td>
                    <td class="px-6 py-5"><span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClasses(error.type)}">${error.resolved ? `${error.type} · Resolved` : error.type}</span></td>
                    <td class="px-6 py-5 text-sky-700 dark:text-neon-300">${error.description}</td>
                    <td class="px-6 py-5 text-right">${renderDropdown('error', error.id, [{ label: 'View detail', action: 'open-error' }, { label: error.resolved ? 'Resolved' : 'Mark as resolved', action: 'resolve-error', disabled: error.resolved }])}</td>
                </tr>
            `).join('');

            const cards = appState.errors.map((error) => `
                <article class="rounded-[1.8rem] border border-sky-200 bg-white/80 p-4 dark:border-neon-800 dark:bg-neon-900/45 ${error.resolved ? 'opacity-70' : ''}">
                    <div class="flex items-start justify-between gap-4">
                        <div class="rounded-2xl p-2 -m-1 dark:bg-black/75">
                            <p class="text-sm font-semibold">${error.agent}</p>
                            <p class="mt-1 text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">${error.timestamp}</p>
                        </div>
                        ${renderDropdown('error-mobile', error.id, [{ label: 'View detail', action: 'open-error' }, { label: error.resolved ? 'Resolved' : 'Mark as resolved', action: 'resolve-error', disabled: error.resolved }])}
                    </div>
                    <div class="mt-4 flex items-center gap-3">
                        <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClasses(error.type)}">${error.resolved ? `${error.type} · Resolved` : error.type}</span>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-sky-700 dark:text-neon-300">${error.description}</p>
                </article>
            `).join('');

            document.getElementById('errors-table-body').innerHTML = rows;
            document.getElementById('errors-mobile-list').innerHTML = cards;
        }

        function renderDropdown(prefix, id, items, direction = 'auto') {
            const menuId = `${prefix}-${id}`;
            const itemMarkup = items.map((item) => `
                <button type="button" class="block w-full rounded-xl px-3 py-2 text-left text-sm transition ${item.disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-sky-100 dark:hover:bg-neon-800'}" data-action="${item.action}" data-id="${id}" ${item.disabled ? 'disabled' : ''}>${item.label}</button>
            `).join('');

            return `
                <div class="relative inline-flex">
                    <button type="button" class="dropdown-trigger inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white/80 text-lg text-sky-800 transition hover:bg-sky-100 dark:border-neon-700 dark:bg-black/35 dark:text-neon-100 dark:hover:bg-neon-900" data-dropdown-id="${menuId}" data-dropdown-direction="${direction}" aria-haspopup="true" aria-expanded="false">⋮</button>
                    <div id="${menuId}" class="dropdown-menu absolute right-0 top-12 z-20 hidden min-w-[11rem] rounded-2xl border border-sky-200 bg-white/95 p-2 shadow-sky dark:border-neon-800 dark:bg-black/95 dark:shadow-neon">
                        ${itemMarkup}
                    </div>
                </div>
            `;
        }

        function openModal(eyebrow, title, content) {
            modalEyebrow.textContent = eyebrow;
            modalTitle.textContent = title;
            modalContent.innerHTML = content;
            modalRoot.classList.remove('hidden');
            modalRoot.classList.add('flex');
            document.body.classList.add('overflow-hidden');
        }

        function closeModal() {
            modalRoot.classList.add('hidden');
            modalRoot.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        }

        function openEntityModal(action, id) {
            if (action === 'open-user') {
                const user = users.find((entry) => entry.id === id);
                openModal('User detail', user.name, `
                    <div class="grid gap-4 sm:grid-cols-2">
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Email</p><p class="mt-2 text-sm">${user.email}</p></div>
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Plan</p><p class="mt-2 text-sm">${user.plan}</p></div>
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Status</p><p class="mt-2 text-sm">${user.status}</p></div>
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Company</p><p class="mt-2 text-sm">${user.company}</p></div>
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Region</p><p class="mt-2 text-sm">${user.region}</p></div>
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Joined</p><p class="mt-2 text-sm">${user.joined}</p></div>
                    </div>
                `);
            }

            if (action === 'open-agent') {
                const agent = agents.find((entry) => entry.id === id);
                openModal('Agent configuration', agent.name, `
                    <div class="space-y-5">
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100">
                            <p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Owner</p>
                            <p class="mt-2 text-sm">${agent.owner}</p>
                        </div>
                        <div>
                            <label for="agent-prompt" class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">System prompt</label>
                            <textarea id="agent-prompt" class="mt-3 min-h-[11rem] w-full rounded-[1.7rem] border border-sky-200 bg-white px-4 py-4 text-sm text-black focus:border-sky-400 focus:outline-none dark:border-neon-700 dark:bg-neon-950 dark:text-black">${agent.prompt}</textarea>
                        </div>
                    </div>
                `);
            }

            if (action === 'open-skill') {
                const skill = skills.find((entry) => entry.id === id);
                openModal('Skill detail', skill.name, `
                    <div class="space-y-4">
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100">
                            <p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Description</p>
                            <p class="mt-2 text-sm leading-7">${skill.description}</p>
                        </div>
                        <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100">
                            <p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Platform usage</p>
                            <p class="mt-2 text-sm">${skill.enabledBy} active agents currently have this capability enabled.</p>
                            <p class="mt-3 text-sm leading-7 text-sky-700 dark:text-neon-300">${skill.detail}</p>
                        </div>
                    </div>
                `);
            }

            if (action === 'open-contract') {
                const contract = contracts.find((entry) => entry.id === id);
                openModal('Contract detail', `${contract.client} · ${contract.agent}`, `
                    <div class="space-y-5">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Client</p><p class="mt-2 text-sm">${contract.client}</p></div>
                            <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Contract dates</p><p class="mt-2 text-sm">${contract.dates}</p></div>
                        </div>
                        <div class="rounded-[1.8rem] border border-sky-200 p-4 dark:border-neon-800 dark:bg-neon-950/55 dark:text-neon-100">
                            <p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Itemized skill pricing</p>
                            <div class="mt-4 space-y-3">
                                ${contract.skills.map((skill) => `<div class="flex items-center justify-between rounded-2xl bg-sky-50 px-4 py-3 text-sm dark:bg-neon-900/70 dark:text-neon-100"><span>${skill.name}</span><span class="font-semibold">${skill.price}</span></div>`).join('')}
                            </div>
                            <div class="mt-5 flex items-center justify-between border-t border-sky-200 pt-4 text-sm font-semibold dark:border-neon-800">
                                <span>Total amount paid</span>
                                <span>${contract.amount}</span>
                            </div>
                        </div>
                    </div>
                `);
            }

            if (action === 'open-error') {
                const error = appState.errors.find((entry) => entry.id === id);
                openModal('Error trace', `${error.agent} · ${error.type}`, `
                    <div class="space-y-5">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Timestamp</p><p class="mt-2 text-sm">${error.timestamp}</p></div>
                            <div class="rounded-3xl bg-sky-50 p-4 dark:bg-neon-900/70 dark:text-neon-100"><p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Status</p><p class="mt-2 text-sm">${error.resolved ? 'Resolved' : 'Open incident'}</p></div>
                        </div>
                        <div class="rounded-[1.8rem] border border-sky-200 p-4 dark:border-neon-800 dark:bg-neon-950/55 dark:text-neon-100">
                            <p class="text-xs uppercase tracking-[0.22em] text-sky-600 dark:text-neon-400">Trace payload</p>
                            <pre class="mt-4 overflow-x-auto rounded-3xl bg-sky-50 p-4 text-sm leading-7 text-sky-900 dark:border dark:border-neon-800 dark:bg-black dark:text-neon-100">${error.trace}</pre>
                        </div>
                    </div>
                `);
            }
        }

        function toggleDropdown(menuId) {
            closeAllDropdowns(menuId);
            const menu = document.getElementById(menuId);
            const trigger = document.querySelector(`[data-dropdown-id="${menuId}"]`);
            const preferredDirection = trigger.dataset.dropdownDirection || 'auto';
            const isHidden = menu.classList.contains('hidden');

            if (isHidden) {
                menu.style.top = '3rem';
                menu.style.bottom = 'auto';
                menu.classList.remove('hidden');

                if (preferredDirection === 'up') {
                    menu.style.top = 'auto';
                    menu.style.bottom = '3rem';
                    const forcedUpRect = menu.getBoundingClientRect();
                    if (forcedUpRect.top < 8) {
                        menu.style.top = '3rem';
                        menu.style.bottom = 'auto';
                    }
                    trigger.setAttribute('aria-expanded', 'true');
                    appState.activeDropdownId = menuId;
                    return;
                }

                const triggerRect = trigger.getBoundingClientRect();
                const menuRect = menu.getBoundingClientRect();
                const clippingParent = trigger.closest('.overflow-x-auto');
                const clippingRect = clippingParent ? clippingParent.getBoundingClientRect() : null;

                const lowerBound = Math.min(
                    window.innerHeight - 8,
                    clippingRect ? clippingRect.bottom - 8 : window.innerHeight - 8
                );
                const upperBound = Math.max(
                    8,
                    clippingRect ? clippingRect.top + 8 : 8
                );

                const wouldOverflowBottom = menuRect.bottom > lowerBound;
                const hasRoomAbove = (triggerRect.top - menuRect.height) > upperBound;

                if (wouldOverflowBottom && hasRoomAbove) {
                    menu.style.top = 'auto';
                    menu.style.bottom = '3rem';

                    const upRect = menu.getBoundingClientRect();
                    if (upRect.top < upperBound) {
                        menu.style.top = '3rem';
                        menu.style.bottom = 'auto';
                    }
                }

                trigger.setAttribute('aria-expanded', 'true');
                appState.activeDropdownId = menuId;
            } else {
                menu.classList.add('hidden');
                trigger.setAttribute('aria-expanded', 'false');
                appState.activeDropdownId = null;
            }
        }

        function closeAllDropdowns(exceptId = null) {
            document.querySelectorAll('.dropdown-menu').forEach((menu) => {
                if (menu.id !== exceptId) {
                    menu.classList.add('hidden');
                    const trigger = document.querySelector(`[data-dropdown-id="${menu.id}"]`);
                    if (trigger) trigger.setAttribute('aria-expanded', 'false');
                }
            });
            if (!exceptId) appState.activeDropdownId = null;
        }

        function toggleAgentSkills(agentId) {
            if (appState.openAgentSkills.has(agentId)) {
                appState.openAgentSkills.delete(agentId);
            } else {
                appState.openAgentSkills.add(agentId);
            }
            renderAgents();
        }

        function markErrorResolved(errorId) {
            appState.errors = appState.errors.map((error) => error.id === errorId ? { ...error, resolved: true } : error);
            renderErrors();
        }

        function deleteUser(userId) {
            users = users.filter((user) => user.id !== userId);
            renderUsers();
        }

        function deleteAgent(agentId) {
            agents = agents.filter((agent) => agent.id !== agentId);
            appState.openAgentSkills.delete(agentId);
            renderAgents();
        }

        function deleteSkill(skillId) {
            skills = skills.filter((skill) => skill.id !== skillId);
            renderSkills();
        }

        function renderAll() {
            renderMetrics();
            renderUsers();
            renderAgents();
            renderSkills();
            renderContracts();
            renderErrors();
        }

        function setActiveNav(sectionId) {
            document.querySelectorAll('.nav-link').forEach((link) => {
                const active = link.dataset.section === sectionId;
                link.classList.toggle('bg-sky-100', active);
                link.classList.toggle('text-sky-900', active);
                link.classList.toggle('font-semibold', active);
                link.classList.toggle('dark:bg-neon-900/80', active);
                link.classList.toggle('dark:text-neon-50', active);
            });
            const section = document.getElementById(sectionId);
            if (section) pageTitle.textContent = section.dataset.title;
        }

        function openSidebar() {
            mobileSidebar.classList.remove('-translate-x-full');
            mobileOverlay.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }

        function closeSidebar() {
            mobileSidebar.classList.add('-translate-x-full');
            mobileOverlay.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }

        document.getElementById('theme-toggle').addEventListener('click', () => {
            applyTheme(appState.theme === 'dark' ? 'light' : 'dark');
        });

        document.getElementById('open-sidebar').addEventListener('click', openSidebar);
        document.getElementById('close-sidebar').addEventListener('click', closeSidebar);
        mobileOverlay.addEventListener('click', closeSidebar);
        document.getElementById('close-modal').addEventListener('click', closeModal);
        document.getElementById('modal-backdrop').addEventListener('click', closeModal);

        document.addEventListener('click', (event) => {
            const dropdownTrigger = event.target.closest('.dropdown-trigger');
            const menuAction = event.target.closest('[data-action]');
            const skillToggle = event.target.closest('[data-skill-toggle]');
            const navLink = event.target.closest('.nav-link');

            if (dropdownTrigger) {
                const menuId = dropdownTrigger.dataset.dropdownId;
                toggleDropdown(menuId);
                return;
            }

            if (menuAction) {
                const { action, id } = menuAction.dataset;
                closeAllDropdowns();

                if (action === 'resolve-error') {
                    markErrorResolved(id);
                    return;
                }

                if (action === 'delete-user') {
                    deleteUser(id);
                    return;
                }

                if (action === 'delete-agent') {
                    deleteAgent(id);
                    return;
                }

                if (action === 'delete-skill') {
                    deleteSkill(id);
                    return;
                }

                openEntityModal(action, id);
                return;
            }

            if (skillToggle) {
                toggleAgentSkills(skillToggle.dataset.skillToggle);
                return;
            }

            if (navLink && window.innerWidth < 1024) {
                closeSidebar();
            }

            if (!event.target.closest('.dropdown-menu')) {
                closeAllDropdowns();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeAllDropdowns();
                closeModal();
                closeSidebar();
            }
        });

        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visible) {
                setActiveNav(visible.target.id);
            }
        }, {
            rootMargin: '-20% 0px -55% 0px',
            threshold: [0.2, 0.5, 0.8]
        });

        document.querySelectorAll('main section').forEach((section) => observer.observe(section));

        applyTheme(appState.theme);
        renderAll();
        setActiveNav('dashboard');
