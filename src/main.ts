import './styles.css';

const paymentLinks = {
  founder: import.meta.env.VITE_SCRIBER_FOUNDER_PAYMENT_LINK || 'https://buy.stripe.com/6oU4gz2Wz2Rb5TJ0Us9sk04',
  pro: import.meta.env.VITE_SCRIBER_PRO_PAYMENT_LINK || 'https://buy.stripe.com/9B614n54HezT6XNav29sk06',
  studio: import.meta.env.VITE_SCRIBER_STUDIO_PAYMENT_LINK || 'https://buy.stripe.com/6oU00jbt5crL95VgTq9sk05',
};

const downloadLink = import.meta.env.VITE_SCRIBER_DOWNLOAD_LINK || 'https://scriber.aetherpro.us/downloads/Scriber_1.1.5_amd64.deb';
const contactEmail = import.meta.env.VITE_SCRIBER_CONTACT_EMAIL || 'cory@aetherpro.us';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root not found.');
}

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-block">
        <span class="brand-mark">scriber</span>
        <span class="brand-sub">by AetherPro Technologies</span>
      </div>
      <nav class="topnav">
        <a href="#why">Why</a>
        <a href="#pricing">Pricing</a>
        <a href="#download">Download</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Linux-first desktop product</p>
          <h1>Linux-first realtime transcription.</h1>
          <p class="hero-text">
            Talk once. Get clean text anywhere. Built for Ubuntu and Linux operators, developers,
            founders, and creators who live in terminals, browsers, IDEs, docs, and real work.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="${downloadLink}" target="_blank" rel="noreferrer">Download for Linux</a>
            <a class="button secondary" href="#pricing">See Pricing</a>
          </div>
          <p class="hero-note">Includes 30 free minutes. Upgrade inside the app when you hit the hosted usage cap. .deb available now. AppImage coming soon.</p>
        </div>

        <div class="hero-card">
          <div class="hero-card-top">
            <span class="status-dot"></span>
            <span>Scriber live capture</span>
          </div>
          <div class="transcript-card final">"The rough thought becomes usable text before the moment is gone."</div>
          <div class="transcript-card partial">Built for long-form thinking, operator notes, prompts, docs, and real desktop flow...</div>
          <div class="hero-metrics">
            <span>Realtime</span>
            <span>.txt / .md export</span>
            <span>Linux-first</span>
          </div>
        </div>
      </section>

      <section class="proof-band">
        <p>AetherPro goes where work actually happens: terminals, docs, browsers, operator consoles, and voice workflows.</p>
      </section>

      <section class="section-grid" id="why">
        <div>
          <p class="eyebrow">Why Scriber</p>
          <h2>Most dictation tools treat Linux like an afterthought. Scriber starts there.</h2>
        </div>
        <div class="feature-grid">
          <article class="feature-card">
            <h3>Realtime transcription</h3>
            <p>Fast speech-to-text built for active desktop use, not buried in a browser demo.</p>
          </article>
          <article class="feature-card">
            <h3>Linux-first workflow</h3>
            <p>Built around Ubuntu and Linux operator reality instead of waiting behind Mac-first roadmaps.</p>
          </article>
          <article class="feature-card">
            <h3>Clean export</h3>
            <p>Copy fast, export to text, or save Markdown for docs, notes, prompts, and archives.</p>
          </article>
          <article class="feature-card">
            <h3>Long-form thinking</h3>
            <p>Useful when you are drafting while moving, thinking aloud, or working through messy ideas.</p>
          </article>
          <article class="feature-card">
            <h3>Real desktop contexts</h3>
            <p>Built for IDEs, docs, terminals, browser tabs, ops notes, and founder brain-dump sessions.</p>
          </article>
          <article class="feature-card">
            <h3>Private deployment roadmap</h3>
            <p>Launch with the hosted workflow now, with more private deployment options planned later.</p>
          </article>
        </div>
      </section>

      <section class="use-cases">
        <div class="section-header">
          <p class="eyebrow">Use cases</p>
          <h2>Built for people who do actual work at a keyboard all day.</h2>
        </div>
        <div class="case-grid">
          <article>
            <h3>Developers</h3>
            <p>Dictate issues, prompts, commit notes, design thoughts, and code-adjacent documentation.</p>
          </article>
          <article>
            <h3>Operators</h3>
            <p>Capture runbooks, incident notes, handoff summaries, deployment steps, and environment observations.</p>
          </article>
          <article>
            <h3>Creators</h3>
            <p>Draft scripts, posts, transcripts, outlines, and rough ideas before they evaporate.</p>
          </article>
          <article>
            <h3>Founders</h3>
            <p>Turn thinking out loud into usable text when there is too much going on to stop and type it cleanly.</p>
          </article>
        </div>
      </section>

      <section class="pricing" id="pricing">
        <div class="section-header">
          <p class="eyebrow">Pricing</p>
          <h2>Pick the lane. Buy with Stripe. Download and go.</h2>
        </div>
        <div class="pricing-grid">
          <article class="price-card featured">
            <p class="plan-name">Scriber Founder</p>
            <p class="price">$99</p>
            <p class="price-sub">one-time</p>
            <ul>
              <li>Lifetime early access</li>
              <li>First 100 buyers</li>
              <li>Founder supporter lane</li>
              <li>Future updates in the founder tier</li>
            </ul>
            <a class="button primary block" href="${paymentLinks.founder}" target="_blank" rel="noreferrer">Buy Founder Access</a>
          </article>
          <article class="price-card">
            <p class="plan-name">Scriber Pro</p>
            <p class="price">$12</p>
            <p class="price-sub">per month</p>
            <ul>
              <li>Realtime transcription</li>
              <li>Copy plus export workflow</li>
              <li>Premium usage lane</li>
              <li>Ongoing product updates</li>
            </ul>
            <a class="button secondary block" href="${paymentLinks.pro}" target="_blank" rel="noreferrer">Start Pro</a>
          </article>
          <article class="price-card">
            <p class="plan-name">Scriber Studio</p>
            <p class="price">$29</p>
            <p class="price-sub">per month</p>
            <ul>
              <li>Higher-capacity usage</li>
              <li>Priority feature lane</li>
              <li>Creator and operator workflows</li>
              <li>Earlier access to new capabilities</li>
            </ul>
            <a class="button secondary block" href="${paymentLinks.studio}" target="_blank" rel="noreferrer">Start Studio</a>
          </article>
        </div>
      </section>

      <section class="download-section" id="download">
        <div class="section-header">
          <p class="eyebrow">Download</p>
          <h2>Install like a Linux app, not a side quest.</h2>
        </div>
        <div class="download-grid">
          <article class="download-card">
            <h3>Primary release</h3>
            <p><strong>.deb</strong> is the main path for the first public release.</p>
            <a class="button primary" href="${downloadLink}" target="_blank" rel="noreferrer">Download for Linux</a>
          </article>
          <article class="download-card">
            <h3>Install flow</h3>
            <ol>
              <li>Download the current .deb installer.</li>
              <li>Install it with your package manager or double-click installer.</li>
              <li>Open Scriber, use the included free minutes, and upgrade inside the app if you need more hosted usage.</li>
            </ol>
            <pre><code>sudo apt install ./Scriber_1.1.5_amd64.deb</code></pre>
          </article>
          <article class="download-card">
            <h3>Roadmap packages</h3>
            <p>.AppImage is the secondary Linux path. .rpm comes later. Windows and Mac come after Linux is stable.</p>
          </article>
        </div>
      </section>

      <section class="faq-section" id="faq">
        <div class="section-header">
          <p class="eyebrow">FAQ</p>
          <h2>What people will ask first.</h2>
        </div>
        <div class="faq-list">
          <article>
            <h3>Is Scriber free?</h3>
            <p>Every install includes free hosted transcription minutes. After that, you can upgrade inside the app or buy one of the public paid lanes.</p>
          </article>
          <article>
            <h3>Does it require Linux?</h3>
            <p>The first public release is Linux-first. Ubuntu and Linux are the current focus.</p>
          </article>
          <article>
            <h3>Is this fully local?</h3>
            <p>Not in the current release. More private deployment options may come later.</p>
          </article>
          <article>
            <h3>Can I use it for coding?</h3>
            <p>Yes. It was built for operators, developers, and founders working in IDEs, terminals, browsers, and docs all day.</p>
          </article>
          <article>
            <h3>What happens after Founder access sells out?</h3>
            <p>Founder pricing is the early supporter lane. After that, buyers move to the standard paid plans.</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div>
        <strong>Scriber</strong>
        <p>Linux-first realtime transcription by AetherPro Technologies.</p>
      </div>
      <div class="footer-links">
        <a href="/privacy.html">Privacy</a>
        <a href="/terms.html">Terms</a>
        <a href="mailto:${contactEmail}">Contact</a>
        <a href="#download">Download</a>
      </div>
    </footer>
  </div>
`;
