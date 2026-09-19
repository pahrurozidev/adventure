import './style.css'
import { site, summits, journeys } from './data/trips.js'
import { dict } from './i18n.js'

const app = document.querySelector('#app')
const allTrips = [...summits, ...journeys]

let lang = readStoredLanguage()
let view = null
let lightboxIndex = 0

const t = (key) => dict[lang][key]
const L = (value) => (value && typeof value === 'object' ? value[lang] ?? value.id : value ?? '')
const asset = (src) => (/^https?:\/\//.test(src) ? src : import.meta.env.BASE_URL + src.replace(/^\//, ''))
const isVisited = (trip) => Boolean(trip.date)
const pad = (n) => String(n).padStart(2, '0')
const elevation = (trip) => (trip.elevation ? `${trip.elevation.toLocaleString(lang === 'id' ? 'id-ID' : 'en-US')} ${t('masl')}` : '')
const elevationLine = (trip) => (trip.elevation ? `<p class="card-elev">▲ ${elevation(trip)}</p>` : '')
const visitedTrips = () => allTrips.filter(isVisited)

function formatCoord(value, pos, neg) {
  const abs = Math.abs(value)
  const deg = Math.floor(abs)
  const min = (abs - deg) * 60
  return `${pad(deg)}° ${min.toFixed(2).padStart(5, '0')}′ ${value < 0 ? neg : pos}`
}

function mapSection(trip) {
  if (!trip.coords) return ''
  const [lat, lon] = trip.coords
  const d = 0.018
  const bbox = [lon - d, lat - d * 0.75, lon + d, lat + d * 0.75].map((n) => n.toFixed(5)).join('%2C')
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`
  return `
    <section class="section-wrap trip-map">
      <div class="trip-map-head">
        <div><div class="section-kicker">${t('mapKicker')}</div><p class="trip-map-coord">${formatCoord(lat, 'N', 'S')}  /  ${formatCoord(lon, 'E', 'W')}</p></div>
        <a class="text-link" href="https://www.google.com/maps/search/?api=1&query=${lat},${lon}" target="_blank" rel="noopener">${t('openMap')} <span>↗</span></a>
      </div>
      <div class="trip-map-frame"><iframe src="${src}" title="${t('mapTitle')(trip.name)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </section>`
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function readStoredLanguage() {
  try { return localStorage.getItem('journal-language') === 'en' ? 'en' : 'id' } catch { return 'id' }
}

function header() {
  return `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="${site.owner}"><span class="brand-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7.5" cy="7" r="1.8" fill="var(--lime)"/><path d="M3 18 9 10.5l3 3.7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M7 18 14 7.5 21 18Z" fill="currentColor"/></svg></span><span>${site.owner.toUpperCase()}<br><small>${t('brandSub')}</small></span></a>
    <nav aria-label="${t('navLabel')}"><a href="#about">${t('navAbout')}</a><a href="#seven-summit">${t('navSummit')}</a><a href="#journeys">${t('navJourneys')}</a></nav>
    <div class="header-actions"><div class="language-switch" aria-label="${t('langLabel')}"><button type="button" data-language="id" class="${lang === 'id' ? 'active' : ''}">ID</button><span>/</span><button type="button" data-language="en" class="${lang === 'en' ? 'active' : ''}">EN</button></div></div>
  </header>`
}

function footer() {
  return `<footer><span>© ${new Date().getFullYear()} ${site.owner.toUpperCase()}</span><span>${t('footerTagline')}</span><a href="#top">${t('backTop')}</a></footer>`
}

function summitCard(trip, index) {
  const no = `${pad(index + 1)} / 07`
  if (!isVisited(trip)) {
    return `
    <article class="summit-card is-soon" tabindex="0" aria-label="${trip.name}, ${t('comingSoon')}">
      <span class="summit-no">${no}</span>
      <div class="soon-mark"><i>✳</i>${t('comingSoon')}</div>
      <div class="card-info"><h3>${trip.name}</h3><div class="card-more"><div><span>${t('notYet')}</span>${elevationLine(trip)}<p>${L(trip.location)}</p></div></div></div>
    </article>`
  }
  return `
  <a class="summit-card" href="#/trip/${trip.slug}" aria-label="${trip.name}, ${formatDate(trip.date)}">
    <img src="${asset(trip.cover)}" alt="" loading="lazy">
    <span class="summit-no">${no}</span><span class="summit-check">✓ ${t('summited')}</span>
    <div class="card-info"><h3>${trip.name}</h3><div class="card-more"><div><span>${formatDate(trip.date)}</span>${elevationLine(trip)}<p>${L(trip.location)} <b>↗</b></p></div></div></div>
  </a>`
}

function journeyCard(trip) {
  return `
  <a class="journey-card" href="#/trip/${trip.slug}" aria-label="${trip.name}, ${formatDate(trip.date)}">
    <img src="${asset(trip.cover)}" alt="" loading="lazy">
    <span class="journey-tag">${L(trip.category)}</span>
    <div class="card-info"><h3>${trip.name}</h3><div class="card-more"><div><span>${formatDate(trip.date)}</span><p>${L(trip.location)} <b>↗</b></p></div></div></div>
  </a>`
}

function homeView() {
  const summitsDone = summits.filter(isVisited).length
  const nextSummit = summits.filter((trip) => !isVisited(trip)).sort((a, b) => a.elevation - b.elevation)[0]
  const sortedJourneys = journeys.filter(isVisited).sort((a, b) => b.date.localeCompare(a.date))
  const photoCount = visitedTrips().reduce((total, trip) => total + (trip.photos?.length ?? 0), 0)
  const ticker = t('ticker').map((word) => `<span>${word}</span>`).join('<i>✳</i>')

  return `
  ${header()}
  <main id="top">
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> ${t('heroEyebrow')}</p>
        <h1>${t('heroTitle')}</h1>
        <p class="hero-intro">${t('heroIntro')}</p>
        <a class="round-cta" href="#seven-summit"><span>${t('heroCta')}</span><b>↓</b></a>
      </div>
      <div class="hero-photo"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85" alt=""><span class="photo-label">SEMBALUN, LOMBOK<br><strong>08° 22′ S  /  116° 32′ E</strong></span><span class="image-stamp">${pad(summitsDone)}/07</span></div>
      <div class="hero-side-note">${t('heroSide')}</div>
    </section>

    <section class="ticker" aria-hidden="true">${ticker}</section>

    <section class="manifesto section-wrap" id="about">
      <div class="section-kicker">${t('aboutKicker')}</div>
      <div class="manifesto-content"><p class="large-copy">${t('aboutLarge')}</p><p class="body-copy">${t('aboutBody')}</p><a class="text-link" href="#seven-summit">${t('aboutLink')} <span>↗</span></a></div>
      <div class="manifesto-aside"><div class="circle-mark">◎<small>${t('aboutCircle')}</small></div><p>${t('aboutAside')}</p></div>
    </section>

    <section class="summit-section" id="seven-summit">
      <div class="section-wrap">
        <div class="section-heading"><div><div class="section-kicker">${t('summitKicker')}</div><h2>${t('summitTitle')}</h2></div><p class="body-copy">${t('summitBody')}</p></div>
        <div class="summit-grid">
          ${summits.map(summitCard).join('')}
          <div class="summit-progress">
            <span class="section-kicker">${t('progress')}</span>
            <strong>${summitsDone}<small>/7</small></strong>
            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="7" aria-valuenow="${summitsDone}"><i style="width:${(summitsDone / 7) * 100}%"></i></div>
            <p>${summitsDone} ${t('ofSeven')}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="journeys section-wrap" id="journeys">
      <div class="section-heading"><div><div class="section-kicker">${t('journeysKicker')}</div><h2>${t('journeysTitle')}</h2></div><p class="body-copy">${t('journeysBody')}</p></div>
      <div class="journey-grid">${sortedJourneys.map(journeyCard).join('')}</div>
    </section>

    <section class="stats-section"><div class="section-wrap stats"><div><strong>${pad(visitedTrips().length)}</strong><span>${t('statPlaces')}</span></div><div><strong>${pad(summitsDone)}</strong><span>${t('statSummits')}</span></div><div><strong>${pad(photoCount)}</strong><span>${t('statPhotos')}</span></div><p>${t('statNote')}</p></div></section>

    <section class="join-section"><div class="join-inner"><p class="eyebrow">${t('nextEyebrow')}</p><h2>${nextSummit ? t('nextTitle')(nextSummit.name) : t('doneTitle')}</h2><p>${nextSummit ? t('nextBody') : t('doneBody')}</p><a class="text-link" href="#seven-summit">${t('nextLink')} <span>↗</span></a></div><div class="join-coordinate">08° 22′ S<br>116° 32′ E</div></section>
  </main>
  ${footer()}`
}

function detailView(trip) {
  const list = visitedTrips()
  const index = list.indexOf(trip)
  const prev = list[(index - 1 + list.length) % list.length]
  const next = list[(index + 1) % list.length]
  const summitIndex = summits.indexOf(trip)
  const kicker = summitIndex >= 0 ? `SEVEN SUMMIT SEMBALUN  ·  ${pad(summitIndex + 1)} / 07` : L(trip.category).toUpperCase()
  const backHref = summitIndex >= 0 ? '#seven-summit' : '#journeys'
  const photos = trip.photos ?? []

  return `
  ${header()}
  <main id="top" class="detail">
    <section class="detail-hero">
      <img src="${asset(trip.cover)}" alt="">
      <div class="detail-hero-copy">
        <a class="back-link" href="${backHref}">← ${t('back')}</a>
        <p class="eyebrow"><span class="eyebrow-line"></span> ${kicker}</p>
        <h1>${trip.name}</h1>
        <dl class="detail-meta">
          <div><dt>${t('visited')}</dt><dd>${formatDate(trip.date)}</dd></div>
          <div><dt>${t('place')}</dt><dd>${L(trip.location)}</dd></div>
          ${trip.elevation ? `<div><dt>${t('height')}</dt><dd>${elevation(trip)}</dd></div>` : ''}
          <div><dt>${t('photos')}</dt><dd>${pad(photos.length)}</dd></div>
        </dl>
      </div>
    </section>

    <section class="section-wrap detail-body">
      ${trip.story ? `<p class="large-copy detail-story">${L(trip.story)}</p>` : ''}
      <h2 class="visually-hidden">${t('gallery')}</h2>
      <div class="photo-grid">
        ${photos.map((photo, i) => `<figure><button type="button" class="photo-item" data-photo="${i}"><img src="${asset(photo.src)}" alt="${L(photo.caption) || `${trip.name} ${i + 1}`}" loading="lazy"></button><figcaption>${pad(i + 1)}${photo.caption ? `  /  ${L(photo.caption)}` : ''}</figcaption></figure>`).join('')}
      </div>
    </section>

    ${mapSection(trip)}

    ${list.length > 1 ? `
    <nav class="trip-pager section-wrap" aria-label="${t('prevTrip')} / ${t('nextTrip')}">
      <a href="#/trip/${prev.slug}"><span>← ${t('prevTrip')}</span><strong>${prev.name}</strong></a>
      <a href="#/trip/${next.slug}"><span>${t('nextTrip')} →</span><strong>${next.name}</strong></a>
    </nav>` : ''}
  </main>
  ${footer()}
  <dialog class="lightbox" aria-label="${trip.name}">
    <button type="button" class="lightbox-close" data-lightbox="close" aria-label="${t('close')}">✕</button>
    <button type="button" class="lightbox-nav prev" data-lightbox="prev" aria-label="${t('prevPhoto')}">←</button>
    <figure><img alt=""><figcaption></figcaption></figure>
    <button type="button" class="lightbox-nav next" data-lightbox="next" aria-label="${t('nextPhoto')}">→</button>
  </dialog>`
}

function notFoundView() {
  return `
  ${header()}
  <main id="top" class="detail">
    <section class="detail-hero is-empty">
      <div class="detail-hero-copy">
        <a class="back-link" href="#seven-summit">← ${t('back')}</a>
        <h1>${t('notFoundTitle')}</h1>
        <p class="hero-intro">${t('notFoundBody')}</p>
      </div>
    </section>
  </main>
  ${footer()}`
}

function currentTrip() {
  const match = location.hash.match(/^#\/trip\/([\w-]+)/)
  return match ? allTrips.find((trip) => trip.slug === match[1]) ?? null : undefined
}

function render({ keepScroll = false } = {}) {
  const trip = currentTrip()
  const nextView = trip === undefined ? 'home' : `trip:${trip?.slug ?? 'missing'}`

  // Anchor links on the home page are handled natively by the browser.
  if (!keepScroll && nextView === 'home' && view === 'home') return

  const scrollY = window.scrollY
  if (trip === undefined) app.innerHTML = homeView()
  else if (trip && isVisited(trip)) app.innerHTML = detailView(trip)
  else app.innerHTML = notFoundView()

  document.documentElement.lang = lang
  document.title = trip ? `${trip.name} — ${site.owner}` : `${site.owner} — ${dict[lang].brandSub.toLowerCase()}`

  if (keepScroll) window.scrollTo(0, scrollY)
  else if (nextView === 'home' && location.hash.length > 1) document.getElementById(location.hash.slice(1))?.scrollIntoView()
  else window.scrollTo(0, 0)
  view = nextView
}

function showPhoto(index) {
  const trip = currentTrip()
  const dialog = app.querySelector('.lightbox')
  if (!trip || !dialog) return
  const photos = trip.photos
  lightboxIndex = (index + photos.length) % photos.length
  const photo = photos[lightboxIndex]
  dialog.querySelector('img').src = asset(photo.src)
  dialog.querySelector('img').alt = L(photo.caption) || trip.name
  dialog.querySelector('figcaption').textContent = `${pad(lightboxIndex + 1)} / ${pad(photos.length)}${photo.caption ? `  ·  ${L(photo.caption)}` : ''}`
  if (!dialog.open) dialog.showModal()
}

app.addEventListener('click', (event) => {
  const languageButton = event.target.closest('[data-language]')
  if (languageButton) {
    lang = languageButton.dataset.language
    try { localStorage.setItem('journal-language', lang) } catch {}
    render({ keepScroll: true })
    return
  }

  const photoButton = event.target.closest('[data-photo]')
  if (photoButton) return showPhoto(Number(photoButton.dataset.photo))

  const lightboxAction = event.target.closest('[data-lightbox]')?.dataset.lightbox
  const dialog = app.querySelector('.lightbox')
  if (lightboxAction === 'close' || event.target === dialog) dialog.close()
  else if (lightboxAction === 'prev') showPhoto(lightboxIndex - 1)
  else if (lightboxAction === 'next') showPhoto(lightboxIndex + 1)
})

document.addEventListener('keydown', (event) => {
  if (!app.querySelector('.lightbox[open]')) return
  if (event.key === 'ArrowLeft') showPhoto(lightboxIndex - 1)
  if (event.key === 'ArrowRight') showPhoto(lightboxIndex + 1)
})

window.addEventListener('hashchange', () => render())
render()
