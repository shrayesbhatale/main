// Image specs for each post. Every number here matches the verified figure in the draft.
module.exports = ({ stats, barsV, barsH, quote, list, panels, C, W, esc }) => ({

P01: { kicker: 'AI × Jobs', h: 'For juniors, the competitor is a senior using AI.',
  body: stats([
    { v: '19%', c: 'warn', l: 'below trend: employment of 22 to 25 year olds in the most AI-exposed jobs' },
    { v: 'No comparable decline', size: 60, l: 'for experienced workers in the same jobs' },
    { v: 'Fewer hires, not more firings', size: 60, l: 'drive the gap' },
  ]),
  src: 'Stanford Digital Economy Lab, “Canaries in the Coal Mine?”, August 2026 update. US payroll data (ADP).' },

P02: { kicker: 'AI × Branding', h: 'Americans are cooling on AI.',
  sub: 'US adults who feel more concerned than excited about AI in daily life',
  body: barsV({ bars: [{ l: '2021', v: 37, d: '37%', c: 'neutral' }, { l: '2026', v: 52, d: '52%', c: 'accent' }], max: 60, h: 600 }),
  note: 'Adults under 30 in 2026: 55%, the first time a majority of young adults said so.',
  src: 'Pew Research Center, August 2026 (survey conducted June 2026).' },

P03: { kicker: 'AI × Organisations', h: 'AI’s impact at work is mostly an organisation problem.',
  sub: 'Share of AI’s real impact traced to each factor',
  body: `<svg width="${W}" height="320" viewBox="0 0 ${W} 320">
    <path d="M0,40 H${W * 0.67 - 2} V200 H0 Z" fill="${C.accent}"/>
    <path d="M${W * 0.67 + 2},40 H${W - 4} Q${W},40 ${W},44 V196 Q${W},200 ${W - 4},200 H${W * 0.67 + 2} Z" fill="${C.neutral}"/>
    <text x="24" y="150" class="bv" text-anchor="start" font-size="88">67%</text>
    <text x="${W * 0.67 + 24}" y="150" class="bv" text-anchor="start" font-size="64">32%</text>
    <text x="0" y="252" class="bl" text-anchor="start" font-size="28">Organisation: culture, manager support,</text>
    <text x="0" y="290" class="bl" text-anchor="start" font-size="28">talent practices</text>
    <text x="${W * 0.67 + 2}" y="252" class="bl" text-anchor="start" font-size="28">Individual</text>
    <text x="${W * 0.67 + 2}" y="290" class="bl" text-anchor="start" font-size="28">capability</text></svg>`,
  note: 'People are ready. Organisations are not. Microsoft calls the gap the Transformation Paradox.',
  src: 'Microsoft Work Trend Index 2026. Shares as reported.' },

P04: { kicker: 'Media × AI', h: 'News now has two gatekeepers: the feed and the chatbot.', hs: 70,
  body: stats([
    { v: '52%', c: 'accent', l: 'of 18 to 24 year olds get news mainly from social media, video platforms or AI' },
    { v: '10%', l: 'use AI chatbots for news every week, up from 7% a year earlier' },
    { v: '1%', l: 'call AI their main news source. The shift is early.' },
  ]),
  src: 'Reuters Institute Digital News Report 2026.' },

P05: { kicker: 'India × Payments', h: 'More payments. Smaller payments.',
  body: stats([
    { v: '24.51 bn', c: 'accent', l: 'UPI transactions in August 2026, a record, worth ₹29.82 lakh crore' },
    { v: '₹1,217', l: 'average payment, down from about ₹1,263 in July' },
  ]),
  note: 'One month proves nothing alone. The direction fits what removing friction does to spending.',
  src: 'NPCI data, via Business Standard, September 2026.' },

P06: { kicker: 'Trust × Branding', h: 'Trust now flows through people, not institutions.', hs: 72,
  body: stats([{ v: '7 in 10', c: 'accent', l: 'hesitate to trust someone with different values, backgrounds or information sources' }])
    + `<div style="height:48px"></div><div class="pk" style="margin-bottom:18px">Trust in each institution</div>`
    + barsH({ bars: [
      { l: 'My employer (among employees)', v: 78, d: '78%', c: 'accent' },
      { l: 'Business', v: 64, d: '64%', c: 'neutral' },
      { l: 'Government', v: 53, d: '53%', c: 'neutral' }], max: 100, rowH: 118 }),
  src: '2026 Edelman Trust Barometer.' },

P07: { kicker: 'AI × Startups', h: 'Same company. Two headlines.',
  body: panels([
    { k: 'PYMNTS, 2026', t: '“The One-Person Billion-Dollar Company Is Here”', ts: 44, c: 'accent' },
    { k: 'Moneywise, 2026', t: '“A $1.8 billion startup with just 2 employees was hailed as the future. Now, the negative allegations are piling up”', ts: 36, c: 'warn' },
  ], { dir: 'column' }),
  note: 'The FDA had already sent the company a warning letter on 20 February 2026. Allegations are not verdicts.',
  src: 'Headlines quoted as published by PYMNTS and Moneywise. FDA warning letter dated 20 Feb 2026.' },

P08: { kicker: 'AI × Productivity', h: 'AI made developers feel faster. The stopwatch disagreed.', hs: 70,
  sub: 'Speed change from AI tools. Positive means faster.',
  body: barsV({ bars: [
    { l: ['Expected', 'before'], v: 24, d: '+24%', c: 'neutral' },
    { l: ['Felt', 'afterwards'], v: 20, d: '+20%', c: 'neutral' },
    { l: ['Measured'], v: -19, d: '−19%', c: 'warn' }], min: -30, max: 30, h: 660 }),
  note: '16 experienced open-source developers, 246 real tasks in their own codebases.',
  src: 'METR, randomized controlled trial, July 2025.' },

P09: { kicker: 'Creator economy', h: 'Same revenue. Opposite results.',
  sub: '2024 profit or loss, each on roughly $250 million of revenue',
  body: barsV({ bars: [
    { l: ['MrBeast', 'media'], v: -80, d: '−$80M', c: 'warn' },
    { l: ['Feastables', 'chocolate'], v: 20, d: '+$20M', c: 'accent' }], min: -100, max: 40, h: 640 }),
  note: 'The content was the distribution. The product was the business.',
  src: 'Bloomberg, investor documents (March 2025), via Fortune. Approximate, not audited accounts.' },

P10: { kicker: 'AI × Work', h: 'AI’s frontier is jagged.',
  body: (() => {
    const pts = [[0, 250], [90, 170], [170, 300], [260, 130], [350, 260], [430, 190], [520, 320], [610, 150], [700, 280], [790, 180], [904, 240]];
    const d = 'M' + pts.map(p => p.join(',')).join(' L');
    return `<svg width="${W}" height="470" viewBox="0 0 ${W} 470">
      <path d="${d} L904,0 L0,0 Z" fill="${C.accent}" fill-opacity=".16"/>
      <path d="${d} L904,470 L0,470 Z" fill="${C.warn}" fill-opacity=".12"/>
      <path d="${d}" fill="none" stroke="${C.ink}" stroke-width="3"/>
      <text x="24" y="54" class="bl" text-anchor="start" font-size="26" style="fill:${C.ink};font-weight:600">AI strong</text>
      <text x="24" y="96" class="bl" text-anchor="start" font-size="24">Summarise a report · Draft a first version</text>
      <text x="24" y="420" class="bl" text-anchor="start" font-size="26" style="fill:${C.ink};font-weight:600">AI weak</text>
      <text x="24" y="456" class="bl" text-anchor="start" font-size="24">Spot a subtle error in numbers · Judge hidden context</text>
    </svg><div class="note" style="margin-top:6px;font-size:21px;color:${C.muted}">Example tasks are illustrative.</div>`
      + `<div style="height:34px"></div>` + panels([
        { k: 'Inside the frontier', v: '+40%', vc: 'accent', t: 'higher quality with GPT-4', ts: 26 },
        { k: 'Outside the frontier', v: '−19 pts', vc: 'warn', t: 'likelihood of a correct answer', ts: 26 }]);
  })(),
  src: 'Dell’Acqua et al., Harvard Business School and BCG, 2023. 758 BCG consultants.' },

P11: { kicker: 'AI × Branding', h: 'Where AI production helps a brand, and where AI hurts.', hs: 72,
  body: panels([
    { k: 'Lower risk', c: 'accent', html: list({ items: ['Performance ads', 'Product shots', 'Variations and resizes', 'Localisation'], size: 30 }) },
    { k: 'Higher risk', c: 'warn', html: list({ items: ['Heritage and ritual moments', 'Festive ads people wait for', 'Anything sold on nostalgia', 'Moments where effort signals care'], size: 30 }) },
  ]),
  note: 'Rough rule: use AI for the 90% nobody remembers. Protect the 10% people remember.',
  src: 'Framework by Shrayes Bhatale, prompted by Coca-Cola’s 2024 and 2025 AI holiday ads.' },

P12: { kicker: 'AI × Skills', h: 'AI lifts beginners the most.',
  sub: 'Gain in issues resolved per hour from AI assistance, 5,179 support agents',
  body: barsH({ bars: [
    { l: 'Novice and low-skilled agents', v: 34, d: '+34%', c: 'accent' },
    { l: 'All agents, average', v: 14, d: '+14%', c: 'neutral' },
    { l: 'Most experienced agents', v: 0.6, d: 'Minimal', c: 'neutral' }], max: 40, rowH: 150 }),
  note: 'AI packages what top performers know and hands the package to everyone.',
  src: 'Brynjolfsson, Li and Raymond, “Generative AI at Work”, Quarterly Journal of Economics, 2025.' },

P13: { kicker: 'AI × Healthcare', h: 'Giving doctors AI barely helped. The AI alone did better.', hs: 68,
  sub: 'Diagnostic reasoning score on complex cases, 50 physicians',
  body: barsV({ bars: [
    { l: ['Doctors,', 'usual resources'], v: 74, d: '74%', c: 'neutral' },
    { l: ['Doctors', '+ GPT-4'], v: 76, d: '76%', c: 'neutral' },
    { l: ['GPT-4', 'alone'], v: 90, d: '+16 pts', c: 'accent' }], max: 100, h: 620, valueSize: 46 }),
  note: 'GPT-4 alone scored 16 percentage points above doctors using usual resources. Doctors’ scores are medians.',
  src: 'Goh et al., randomized clinical trial, JAMA Network Open, October 2024.' },

P14: { kicker: 'AI × Customer experience', h: 'Klarna’s AI support story, in two moments.', hs: 70,
  body: `<div style="display:flex;flex-direction:column;gap:0;border-left:3px solid ${C.rule};padding-left:40px;margin-left:10px">
    <div style="position:relative;padding-bottom:56px">
      <div style="position:absolute;left:-54px;top:6px;width:24px;height:24px;border-radius:50%;background:${C.accent}"></div>
      <div class="pk">February 2024 · Klarna</div>
      <div class="pt" style="font-size:40px;margin-top:10px">AI assistant handles two thirds of support chats, the equivalent work of 700 full-time agents.</div></div>
    <div style="position:relative">
      <div style="position:absolute;left:-54px;top:6px;width:24px;height:24px;border-radius:50%;background:${C.warn}"></div>
      <div class="pk">May 2025 · CEO to Bloomberg</div>
      <div class="serif" style="font-size:44px;line-height:1.15;margin-top:12px">“As cost unfortunately seems to have been a too predominant evaluation factor when organizing this, what you end up having is lower quality.”</div></div></div>`,
  note: 'Klarna moved to a hybrid model and began hiring human agents again.',
  src: 'Klarna press release, Feb 2024. Sebastian Siemiatkowski interview with Bloomberg, May 2025.' },

P15: { kicker: 'AI × Product design', h: 'People abandon algorithms after one mistake. A small dial brings them back.', hs: 64,
  body: panels([
    { k: '2015 finding', c: 'warn', t: 'After watching an algorithm err, people chose a human forecaster, even though the algorithm was more accurate.', ts: 32 },
    { k: '2018 fix', c: 'accent', t: 'When people were allowed to adjust the forecast, even slightly, they used the algorithm more and did better.', ts: 32 },
  ], { dir: 'column' }),
  note: 'People don’t need a perfect AI. People need to feel in charge of an imperfect one.',
  src: 'Dietvorst, Simmons and Massey, 2015 (J. Exp. Psych.: General) and 2018 (Management Science).' },

P16: { kicker: 'India × Creators', h: 'Indian creators move markets. Few get paid well.', hs: 72,
  body: stats([
    { v: '$350–400 bn', c: 'accent', size: 100, l: 'of consumer spending shaped by creators' },
    { v: '2–2.5 mn', size: 100, l: 'active creators with 1,000+ followers' },
    { v: '8–10%', c: 'warn', size: 100, l: 'monetise effectively' },
  ]),
  src: 'BCG, “From Content to Commerce: Mapping India’s Creator Economy”, May 2025.' },

P17: { kicker: 'AI × Thinking', h: 'Who does the thinking?',
  body: panels([
    { k: 'More confidence in AI', c: 'warn', v: 'Less critical thinking', vs: 56, vc: 'ink' },
    { k: 'More confidence in yourself', c: 'accent', v: 'More critical thinking', vs: 56, vc: 'ink' },
  ], { dir: 'column' }),
  note: 'Survey of 319 knowledge workers, 936 real examples. Self-reported. Association, not proof of cause.',
  src: 'Lee et al., Microsoft Research and Carnegie Mellon University, CHI 2025.' },

P18: { kicker: 'Leverage', body: quote({ q: 'Code and media are permissionless leverage.', who: 'Naval Ravikant', where: '“How to Get Rich (without getting lucky)”, 31 May 2018', size: 96 }),
  src: 'nav.al/rich' },

P19: { kicker: 'Strategy for 2027', h: 'What won’t change in 2027.',
  sub: 'Jeff Bezos, 2012: “I almost never get the question: ‘What’s not going to change in the next 10 years?’”',
  body: list({ items: ['People buy from people they trust.', 'Attention goes to what feels specific and personal.', 'Customers want problems solved with less effort.', 'Scarce skills get paid. Common skills get commoditised.', 'Reputation compounds. So does a bad one.'], numbered: true, size: 36 }),
  src: 'List by Shrayes Bhatale. Bezos quote: AWS re:Invent 2012, via Quote Investigator.' },

P21: { kicker: 'AI × Jobs', h: 'Three AI jobs numbers. Only one is data.',
  body: panels([
    { k: 'Forecast', c: 'neutral', v: '+78 mn', vs: 60, t: 'net jobs by 2030 (170 mn created, 92 mn displaced)', ts: 24, s: 'WEF, Jan 2025' },
    { k: 'Warning', c: 'neutral', v: 'Half', vs: 60, t: 'of entry-level white-collar jobs at risk within 1 to 5 years', ts: 24, s: 'Dario Amodei to Axios, May 2025' },
    { k: 'Data', c: 'accent', v: '19%', vc: 'accent', vs: 60, t: 'below trend: employment of 22 to 25 year olds in AI-exposed US jobs', ts: 24, s: 'Stanford, Aug 2026' },
  ]),
  note: 'Read forecasts for direction. Read data for decisions.',
  src: 'WEF Future of Jobs Report 2025. Axios, 28 May 2025. Stanford Digital Economy Lab, Aug 2026.' },

P22: { kicker: 'AI × Healthcare', h: 'After AI arrived, detection without AI dropped.', hs: 70,
  sub: 'Adenoma detection rate in colonoscopies done without AI, 19 experienced endoscopists',
  body: barsV({ bars: [
    { l: ['Before', 'AI rollout'], v: 28.4, d: '28.4%', c: 'neutral' },
    { l: ['After', 'AI rollout'], v: 22.4, d: '22.4%', c: 'warn' }], max: 35, h: 600 }),
  note: 'Observational study, debated by other experts. A warning signal, not proof.',
  src: 'The Lancet Gastroenterology & Hepatology, 2025. Four centres in Poland.' },

P23: { kicker: 'Consumer psychology', h: 'Labour leads to love. Only when you finish.',
  body: panels([
    { k: 'The IKEA effect', c: 'accent', t: 'People valued products they built themselves more, and saw their amateur work as close to an expert’s.', ts: 32 },
    { k: 'The boundary', c: 'warn', t: 'When people didn’t finish, or destroyed what they built, the extra love disappeared.', ts: 32 },
  ], { dir: 'column' }),
  note: 'One-click AI products remove the building. What happens to the love?',
  src: 'Norton, Mochon and Ariely, “The IKEA effect”, Journal of Consumer Psychology, 2012.' },

P24: { kicker: 'AI × Healthcare', h: 'The study measured who had time.',
  sub: 'Average answer length to real patient questions on Reddit’s r/AskDocs',
  body: barsV({ bars: [
    { l: ['Physicians'], v: 52, d: '52 words', c: 'neutral' },
    { l: ['ChatGPT'], v: 211, d: '211 words', c: 'accent' }], max: 240, h: 600, valueSize: 44 }),
  note: 'Evaluators preferred ChatGPT’s answers 79% of the time. Longer answers take time doctors rarely have.',
  src: 'Ayers et al., JAMA Internal Medicine, 2023. 195 question-answer pairs.' },

P25: { kicker: 'AI × Hiring', body: quote({ q: 'Reflexive AI usage is now a baseline expectation at Shopify.', who: 'Tobi Lütke, CEO of Shopify', where: 'Internal memo, April 2025', size: 84 }),
  note: 'Teams must show why AI won’t do the work before asking for more headcount.',
  src: 'Reported by CNBC, 7 April 2025.' },

P26: { kicker: 'India × Consumer protection', h: '13 dark patterns India banned in 2023.', hs: 72,
  body: list({ items: ['False urgency', 'Basket sneaking', 'Confirm shaming', 'Forced action', 'Subscription trap', 'Interface interference', 'Bait and switch', 'Drip pricing', 'Disguised advertisement', 'Nagging', 'Trick question', 'SaaS billing', 'Rogue malware'], numbered: true, size: 29, cols: 2 }),
  note: '97% of major platforms still used manipulative design in a June to September 2025 LocalCircles study.',
  src: 'CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023. LocalCircles, 2025.' },

P27: { kicker: 'AI × Personal branding', body: quote({ q: 'There’s a new kind of coding I call “vibe coding”, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.', who: 'Andrej Karpathy', where: 'Post on X, 2 February 2025', size: 58 }),
  note: 'Nine months later, Collins Dictionary named “vibe coding” its Word of the Year 2025.',
  src: 'x.com/karpathy. Collins Dictionary, November 2025.' },

P28: { kicker: 'Reading AI research', h: 'Before you share an “AI beats experts” headline:', hs: 70,
  body: list({ items: ['Which cases or tasks?', 'What were the humans allowed to use?', 'Which errors weren’t measured?'], numbered: true, size: 48 }),
  note: 'Case in point: Microsoft’s MAI-DxO scored 85.5% vs doctors’ 20% on 304 rare NEJM cases. The doctors worked without colleagues or textbooks.',
  src: 'Microsoft AI, “The Path to Medical Superintelligence”, June 2025.' },

P29: { kicker: 'AI × Mental health', h: 'AI for emotional support: design decides.',
  body: panels([
    { k: 'Purpose-built, clinically tested', c: 'accent', t: 'Therabot trial: 210 adults. Greater symptom reductions than a waitlist group.', ts: 30, s: 'NEJM AI, March 2025' },
    { k: 'General chatbot, heavy daily use', c: 'warn', t: 'Higher daily use correlated with more loneliness and emotional dependence.', ts: 30, s: 'OpenAI and MIT Media Lab, March 2025' },
  ]),
  note: 'Correlation, not cause. If you are struggling, talk to a professional. India: Tele-MANAS, 14416.',
  src: 'Heinz et al., NEJM AI, 2025. OpenAI and MIT Media Lab affective-use studies, 2025.' },

P30: { kicker: 'AI × Strategy', body: quote({ q: 'The real benchmark is: the world growing at 10%.', who: 'Satya Nadella, CEO of Microsoft', where: 'Dwarkesh Podcast, February 2025', size: 96 }),
  src: 'dwarkesh.com/p/satya-nadella' },

P31: { kicker: 'Marketing myths', h: '“Humans have an 8-second attention span.” Source?', hs: 76,
  body: `<svg width="${W}" height="330" viewBox="0 0 ${W} 330">
    <g transform="translate(250,40)">
      <path d="M40,125 C110,20 300,20 360,125 C300,230 110,230 40,125 Z" fill="${C.warn}"/>
      <path d="M40,125 L-40,55 L-20,125 L-40,195 Z" fill="${C.warn}" fill-opacity=".8"/>
      <circle cx="300" cy="105" r="14" fill="${C.bg}"/>
      <path d="M150,70 C175,110 175,140 150,180" stroke="${C.bg}" stroke-width="5" fill="none" opacity=".5"/>
    </g>
    <g transform="translate(590,20) rotate(10)">
      <rect x="0" y="0" width="300" height="92" rx="6" fill="none" stroke="${C.ink}" stroke-width="4"/>
      <text x="150" y="62" class="bv" text-anchor="middle" font-size="44">NO SOURCE</text></g></svg>`,
  note: 'The figure traces to a 2015 Microsoft Canada report, which cited a website. A 2017 BBC investigation found no research behind the number. Attention spans aren’t shrinking. Tolerance for boring is.',
  src: 'BBC News, “Busting the attention span myth”, 2017. Fast Company, 2024.' },

P32: { kicker: 'AI × Teams', h: 'One person with AI matched a team without AI.', hs: 72,
  body: (() => {
    const cell = (t, s, c) => `<div style="background:${C.panel};border-radius:6px;padding:30px;border-top:4px solid ${c};min-height:190px;display:flex;flex-direction:column;gap:10px"><div style="font-size:34px;font-weight:600">${t}</div><div style="font-size:26px;color:${C.ink2};line-height:1.35">${s}</div></div>`;
    return `<div style="display:grid;grid-template-columns:160px 1fr 1fr;gap:18px;align-items:stretch">
      <div></div><div class="pk" style="align-self:end">Without AI</div><div class="pk" style="align-self:end">With AI</div>
      <div class="pk" style="align-self:center">Alone</div>${cell('Individual', 'Baseline', C.rule)}${cell('Individual + AI', '≈ a two-person team without AI', C.accent)}
      <div class="pk" style="align-self:center">In pairs</div>${cell('Team', '≈ an individual with AI', C.accent)}${cell('Team + AI', 'Also tested', C.rule)}</div>`;
  })(),
  note: 'AI groups worked 12 to 16% faster, and R&D and commercial staff produced more balanced ideas.',
  src: 'Dell’Acqua et al., “The Cybernetic Teammate”, NBER, 2025. 776 Procter & Gamble professionals.' },

P33: { kicker: 'Marketing × AI', h: 'Activation spikes. Brand compounds.',
  body: (() => {
    const h = 440, base = 360;
    let spikes = '';
    for (let i = 0; i < 6; i++) { const x = 60 + i * 140; spikes += `M${x},${base} L${x + 20},${base - 170} L${x + 60},${base} `; }
    return `<svg width="${W}" height="${h}" viewBox="0 0 ${W} ${h}">
      <path d="${spikes}" fill="none" stroke="${C.warn}" stroke-width="3"/>
      <path d="M0,${base} C250,${base - 20} 550,${base - 120} ${W},${base - 290}" fill="none" stroke="${C.accent}" stroke-width="5"/>
      <line x1="0" x2="${W}" y1="${base}" y2="${base}" stroke="${C.muted}" stroke-width="2"/>
      <text x="${W}" y="${base - 305}" class="bl" text-anchor="end" font-size="28" style="fill:${C.ink};font-weight:600">Brand building</text>
      <text x="80" y="${base - 190}" class="bl" text-anchor="start" font-size="28" style="fill:${C.ink};font-weight:600">Sales activation</text>
      <text x="0" y="${base + 50}" class="bl" text-anchor="start" font-size="24">Time →</text></svg>`;
  })(),
  note: 'Average best split across 996 campaigns: about 60% brand, 40% activation. AI makes activation cheap for everyone. Memory in the customer’s head stays scarce.',
  src: 'Illustrative chart. Based on Binet and Field, “The Long and the Short of It”, IPA, 2013.' },

P34: { kicker: 'After the “AI-first” memo backlash', body: quote({ q: 'I do not see AI as replacing what our employees do (we are in fact continuing to hire at the same speed as before).', who: 'Luis von Ahn, CEO of Duolingo', where: 'LinkedIn, May 2025', size: 66 }),
  note: 'Every AI announcement is a brand event.',
  src: 'Reported by Entrepreneur and Fortune, May 2025.' },

P35: { kicker: 'AI × Thinking', h: 'Who owned their essay?',
  sub: '54 students wrote essays in three groups while EEG recorded brain activity',
  body: panels([
    { k: 'Brain only', c: 'accent', t: 'Strongest, most widespread brain connectivity', ts: 34 },
    { k: 'Search engine', c: 'neutral', t: 'Moderate connectivity', ts: 34 },
    { k: 'ChatGPT', c: 'warn', t: 'Weakest connectivity, lowest sense of ownership, trouble recalling their own essay', ts: 34 },
  ], { dir: 'column' }),
  note: 'Small study, released as a preprint and debated. The ownership finding is the part to take seriously.',
  src: 'Kosmyna et al., “Your Brain on ChatGPT”, MIT Media Lab, June 2025 (arXiv 2506.08872).' },

P36: { kicker: 'Consumer psychology', h: 'The jam study vs what came after.',
  body: panels([
    { k: '2000 · The jam study', c: 'warn', html: (() => { const base = 330, sc = 8; const bar = (x, v, d, l, c) => `<path d="M${x},${base} V${base - v * sc + 4} Q${x},${base - v * sc} ${x + 4},${base - v * sc} H${x + 96} Q${x + 100},${base - v * sc} ${x + 100},${base - v * sc + 4} V${base} Z" fill="${c}"/><text x="${x + 50}" y="${base - v * sc - 18}" class="bv" text-anchor="middle" font-size="44">${d}</text><text x="${x + 50}" y="${base + 40}" class="bl" text-anchor="middle" font-size="26">${l}</text>`;
      return `<svg width="100%" height="390" viewBox="0 0 340 390">${bar(40, 3, '3%', '24 jams', C.neutral)}${bar(200, 30, '30%', '6 jams', C.warn)}<line x1="0" x2="340" y1="${base}" y2="${base}" stroke="${C.muted}" stroke-width="2"/></svg>`; })(), s: 'Share of tasters who bought' },
    { k: '2010 · Meta-analysis', c: 'accent', v: '≈ 0', vs: 150, vc: 'accent', t: 'average effect of more choice across 50 experiments and 5,000+ people', ts: 28 },
  ]),
  note: 'Choice overload is real only under certain conditions. The rule isn’t “offer less”. The rule is “make choosing easy”.',
  src: 'Iyengar and Lepper, 2000. Scheibehenne, Greifeneder and Todd, Journal of Consumer Research, 2010.' },

P37: { kicker: 'India × Healthcare × AI', h: 'India’s AI health story is distribution.', hs: 72,
  body: stats([
    { v: '~80%', c: 'warn', size: 104, l: 'of specialist posts unfilled at rural community health centres (March 2022)' },
    { v: '282 mn', c: 'accent', size: 104, l: 'eSanjeevani teleconsultations, April 2023 to November 2025' },
    { v: '~12 mn', size: 104, l: 'of those assisted by AI clinical decision support' },
  ]),
  src: 'Rural Health Statistics, MoHFW (4,485 specialists in place vs 21,920 required). eSanjeevani implementation study, medRxiv, 2025.' },

P38: { kicker: 'AI × Writing', h: 'One is Shakespeare. One is AI. Which?', hs: 76,
  body: panels([
    { k: 'A', c: 'rule', html: `<div class="serif" style="font-size:40px;line-height:1.3">When autumn strips the colour from the tree<br>And evening lays its hand upon the hill,<br>I count the hours that time has stol’n from me<br>And find thy face in every hour still.</div>` },
    { k: 'B', c: 'rule', html: `<div class="serif" style="font-size:40px;line-height:1.3">That time of year thou mayst in me behold<br>When yellow leaves, or none, or few, do hang<br>Upon those boughs which shake against the cold,<br>Bare ruin’d choirs, where late the sweet birds sang.</div>` },
  ], { dir: 'column' }),
  note: 'In a 2024 study, 1,634 readers spotted AI poems only 46.6% of the time. Answer in the comments.',
  src: 'Porter and Machery, Scientific Reports, 2024.' },

P39: { kicker: 'AI × Trust', body: `<div class="serif" style="font-size:108px;line-height:1.02">When persuasion becomes cheap, identity becomes valuable.</div>`,
  note: 'AI bots in an unauthorised 2025 Reddit experiment were reportedly 3 to 6 times more persuasive than humans (unreviewed draft).',
  src: 'University of Zurich experiment on r/changemyview, reported by Engadget and Live Science, April 2025.' },
});
