(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={owner:`Pahrurozi`,since:2024},t={id:`Sembalun, Lombok Timur`,en:`Sembalun, East Lombok`},n=[{slug:`gunung-rinjani`,name:`Gunung Rinjani`,elevation:3726,date:null,location:t,coords:[-8.4117,116.4581]},{slug:`bukit-sempana`,name:`Bukit Sempana`,elevation:2329,date:null,location:t,coords:[-8.4191,116.5714]},{slug:`bukit-gedong`,name:`Bukit Lembah Gedong`,elevation:2200,date:`2026-09-13`,location:t,coords:[-8.413,116.516],cover:`photos/bukit-gedong/01.jpeg`,story:{id:`Bukit pertama dari tujuh. Jalurnya pendek tapi menanjak, dan dari atas lembah Sembalun terbentang seperti permadani hijau.`,en:`The first of seven. A short but steep trail, and from the top the Sembalun valley unfolds like a green carpet.`},photos:[{src:`photos/bukit-gedong/01.jpeg`,caption:{id:`Merah Putih di Puncak Bukit Gedong, 2200 mdpl`,en:`The red and white flag on the Bukit Gedong summit, 2,200 m`}},{src:`photos/bukit-gedong/02.jpeg`,caption:{id:`Bersama tim di papan puncak`,en:`With the team at the summit sign`}},{src:`photos/bukit-gedong/03.jpeg`,caption:{id:`Merayakan tiba di puncak`,en:`Celebrating at the top`}},{src:`photos/bukit-gedong/04.jpeg`,caption:{id:`Memandang Gunung Rinjani dari punggungan`,en:`Looking out at Mount Rinjani from the ridge`}},{src:`photos/bukit-gedong/05.jpeg`,caption:{id:`Menuruni jalur yang berdebu`,en:`Heading down the dusty trail`}},{src:`photos/bukit-gedong/06.jpeg`,caption:{id:`Penanda TOP 2200 mdpl berlatar Rinjani`,en:`The 2,200 m TOP marker with Rinjani behind`}}]},{slug:`bukit-kondo`,name:`Bukit Kondo`,elevation:1937,date:null,location:t,coords:[-8.4352,116.5169]},{slug:`bukit-anak-dara`,name:`Bukit Anak Dara`,elevation:1923,date:null,location:t,coords:[-8.364,116.5606]},{slug:`bukit-pergasingan`,name:`Bukit Pergasingan`,elevation:1806,date:`2026-07-19`,location:t,coords:[-8.34294,116.54067],cover:`photos/bukit-pergasingan/01.jpeg`,story:{id:`Camp semalam di punggungan, menunggu matahari terbit di atas petak-petak sawah Sembalun dengan Rinjani berdiri di belakang.`,en:`A night camped on the ridge, waiting for sunrise over the patchwork fields of Sembalun with Rinjani standing behind.`},photos:[{src:`photos/bukit-pergasingan/01.jpeg`,caption:{id:`Bersama tim di Puncak Pergasingan, 1806 mdpl`,en:`With the team on the Pergasingan summit, 1,806 m`}},{src:`photos/bukit-pergasingan/02.jpeg`,caption:{id:`Awan menyelimuti Lembah Sembalun`,en:`Clouds drifting over the Sembalun valley`}},{src:`photos/bukit-pergasingan/03.jpeg`,caption:{id:`Menikmati lembah dari tepi punggungan`,en:`Taking in the valley from the ridge edge`}},{src:`photos/bukit-pergasingan/04.jpeg`,caption:{id:`Petak-petak ladang Sembalun saat langit cerah`,en:`The patchwork fields of Sembalun under a clear sky`}},{src:`photos/bukit-pergasingan/05.jpeg`,caption:{id:`Tugu puncak di tengah kabut`,en:`The summit marker in the mist`}},{src:`photos/bukit-pergasingan/06.jpeg`,caption:{id:`Menyusuri punggungan berkabut`,en:`Walking the misty ridge`}}]},{slug:`bukit-bao-ritip`,name:`Bukit Bao Ritip`,elevation:1500,date:null,location:t,coords:null}],r=[{slug:`pantai-pink`,name:`Pantai Pink`,category:{id:`Pantai`,en:`Beach`},date:`2025-03-02`,location:{id:`Jerowaru, Lombok Timur`,en:`Jerowaru, East Lombok`},coords:[-8.8592,116.5776],cover:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80`,story:{id:`Pasir berwarna merah muda, air sebening kaca, dan perjalanan panjang yang terbayar lunas.`,en:`Pink-tinted sand, glass-clear water, and a long drive that paid for itself.`},photos:[{src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80`},{src:`https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80`}]},{slug:`gunung-bromo`,name:`Gunung Bromo`,category:{id:`Gunung`,en:`Mountain`},date:`2024-09-21`,location:{id:`Probolinggo, Jawa Timur`,en:`Probolinggo, East Java`},coords:[-7.9421,112.953],cover:`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80`,story:{id:`Berangkat dini hari, menembus lautan pasir, lalu diam menyaksikan kawah yang berasap.`,en:`Leaving before dawn, crossing the sea of sand, then standing quietly before the smoking crater.`},photos:[{src:`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80`},{src:`https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80`}]},{slug:`ubud-bali`,name:`Ubud`,category:{id:`Kota & Desa`,en:`Town & Village`},date:`2024-12-28`,location:{id:`Gianyar, Bali`,en:`Gianyar, Bali`},coords:[-8.5069,115.2625],cover:`https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80`,story:{id:`Pura, sawah berundak, dan pagi yang lambat di antara hujan tropis.`,en:`Temples, terraced fields, and slow mornings between tropical rain.`},photos:[{src:`https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80`}]}],i={id:{navLabel:`Navigasi utama`,navAbout:`Tentang`,navSummit:`Seven Summit`,navJourneys:`Perjalanan`,brandSub:`CATATAN PERJALANAN`,langLabel:`Pilih bahasa`,heroEyebrow:`CATATAN PERJALANAN  /  LOMBOK, INDONESIA`,heroTitle:`Satu langkah,<br>satu <em>cerita.</em>`,heroIntro:`Jurnal pribadi tentang tempat-tempat yang pernah kusinggahi: puncak bukit, garis pantai, dan jalan-jalan kecil di antaranya.`,heroCta:`Lihat<br>perjalanan`,heroSide:`PERGILAH<br>SELAGI BISA.<br><span>LALU CERITAKAN.</span>`,ticker:[`MELANGKAH PERLAHAN`,`MELIHAT LEBIH DALAM`,`PULANG BERUBAH`,`MELANGKAH PERLAHAN`],aboutKicker:`01 / TENTANG JURNAL INI`,aboutLarge:`Bukan hanya soal puncak.<br><em>Ini tentang perjalanan menuju ke sana.</em>`,aboutBody:`Gunung, pantai, kota kecil, dan desa. Setiap perjalanan tercatat di sini, lengkap dengan tanggal, lokasi, dan dokumentasi fotonya.`,aboutLink:`Mulai dari Seven Summit`,aboutCircle:`TERUS<br>MENJELAJAH`,aboutAside:`Catatan perjalanan<br>dari berbagai penjuru.`,summitKicker:`02 / SEVEN SUMMIT SEMBALUN`,summitTitle:`Tujuh puncak,<br>satu <em>janji.</em>`,summitBody:`Tujuh puncak yang mengelilingi lembah Sembalun, dari Bukit Bao Ritip hingga Gunung Rinjani. Satu per satu sedang kutuntaskan.`,summited:`TERDAKI`,comingSoon:`Coming soon`,notYet:`BELUM DIDAKI`,progress:`PROGRES`,ofSeven:`dari 7 puncak`,masl:`mdpl`,height:`KETINGGIAN`,journeysKicker:`03 / JEJAK PERJALANAN`,journeysTitle:`Tempat yang<br>pernah <em>kusinggahi.</em>`,journeysBody:`Di luar pendakian: pantai, kota, dan desa yang meninggalkan sesuatu untuk diingat.`,statPlaces:`TEMPAT<br>DISINGGAHI`,statSummits:`DARI 7<br>PUNCAK`,statPhotos:`FOTO<br>TERSIMPAN`,statNote:`Setiap angka adalah cerita<br>yang masih terus bertambah.`,nextEyebrow:`PERJALANAN BERIKUTNYA`,nextTitle:e=>`Berikutnya:<br><em>${e}.</em>`,nextBody:`Masih ada puncak yang menunggu di Sembalun. Halaman ini akan terus bertambah setiap kali aku pulang.`,doneTitle:`Tujuh dari tujuh.<br><em>Tuntas.</em>`,doneBody:`Seven Summit Sembalun sudah selesai. Ke mana lagi setelah ini?`,nextLink:`Lihat progres`,footerTagline:`DIBUAT DI ANTARA PERJALANAN`,backTop:`KEMBALI KE ATAS ↑`,back:`Kembali`,visited:`TANGGAL`,place:`LOKASI`,photos:`FOTO`,gallery:`Galeri foto`,mapKicker:`TITIK LOKASI`,openMap:`Buka di Google Maps`,mapTitle:e=>`Peta lokasi ${e}`,prevTrip:`Sebelumnya`,nextTrip:`Berikutnya`,close:`Tutup`,prevPhoto:`Foto sebelumnya`,nextPhoto:`Foto berikutnya`,notFoundTitle:`Belum ada<br><em>cerita.</em>`,notFoundBody:`Tempat ini belum dikunjungi, atau halamannya tidak ditemukan.`},en:{navLabel:`Main navigation`,navAbout:`About`,navSummit:`Seven Summit`,navJourneys:`Journeys`,brandSub:`TRAVEL JOURNAL`,langLabel:`Choose language`,heroEyebrow:`TRAVEL JOURNAL  /  LOMBOK, INDONESIA`,heroTitle:`One step,<br>one <em>story.</em>`,heroIntro:`A personal journal of the places I have been: hilltops, coastlines, and the small roads in between.`,heroCta:`See the<br>journeys`,heroSide:`GO WHILE<br>YOU CAN.<br><span>THEN TELL IT.</span>`,ticker:[`WALK SLOWLY`,`LOOK DEEPLY`,`RETURN CHANGED`,`WALK SLOWLY`],aboutKicker:`01 / ABOUT THIS JOURNAL`,aboutLarge:`It is not only about summits.<br><em>It is about the journey to get there.</em>`,aboutBody:`Mountains, beaches, small towns and villages. Every journey is logged here, with its date, location and photo documentation.`,aboutLink:`Start with the Seven Summit`,aboutCircle:`KEEP<br>WANDERING`,aboutAside:`Travel notes<br>from near and far.`,summitKicker:`02 / SEVEN SUMMIT SEMBALUN`,summitTitle:`Seven summits,<br>one <em>promise.</em>`,summitBody:`Seven summits around the Sembalun valley, from Bukit Bao Ritip all the way up to Mount Rinjani. I am finishing them one by one.`,summited:`SUMMITED`,comingSoon:`Coming soon`,notYet:`NOT YET CLIMBED`,progress:`PROGRESS`,ofSeven:`of 7 summits`,masl:`m asl`,height:`ELEVATION`,journeysKicker:`03 / JOURNEYS`,journeysTitle:`Places I have<br><em>been.</em>`,journeysBody:`Beyond the climbs: beaches, towns and villages that left something worth remembering.`,statPlaces:`PLACES<br>VISITED`,statSummits:`OF 7<br>SUMMITS`,statPhotos:`PHOTOS<br>KEPT`,statNote:`Every number is a story<br>that keeps on growing.`,nextEyebrow:`THE NEXT JOURNEY`,nextTitle:e=>`Up next:<br><em>${e}.</em>`,nextBody:`There are still summits waiting in Sembalun. This page grows every time I come home.`,doneTitle:`Seven of seven.<br><em>Done.</em>`,doneBody:`The Sembalun Seven Summit is complete. Where to next?`,nextLink:`See progress`,footerTagline:`MADE BETWEEN JOURNEYS`,backTop:`BACK TO TOP ↑`,back:`Back`,visited:`DATE`,place:`LOCATION`,photos:`PHOTOS`,gallery:`Photo gallery`,mapKicker:`LOCATION`,openMap:`Open in Google Maps`,mapTitle:e=>`Map of ${e}`,prevTrip:`Previous`,nextTrip:`Next`,close:`Close`,prevPhoto:`Previous photo`,nextPhoto:`Next photo`,notFoundTitle:`No story<br><em>yet.</em>`,notFoundBody:`This place has not been visited yet, or the page could not be found.`}},a=document.querySelector(`#app`),o=[...n,...r],s=x(),c=null,l=0,u=e=>i[s][e],d=e=>e&&typeof e==`object`?e[s]??e.id:e??``,f=e=>/^https?:\/\//.test(e)?e:`/adventure/`+e.replace(/^\//,``),p=e=>!!e.date,m=e=>String(e).padStart(2,`0`),h=e=>e.elevation?`${e.elevation.toLocaleString(s===`id`?`id-ID`:`en-US`)} ${u(`masl`)}`:``,g=e=>e.elevation?`<p class="card-elev">▲ ${h(e)}</p>`:``,_=()=>o.filter(p);function v(e,t,n){let r=Math.abs(e),i=Math.floor(r),a=(r-i)*60;return`${m(i)}° ${a.toFixed(2).padStart(5,`0`)}′ ${e<0?n:t}`}function y(e){if(!e.coords)return``;let[t,n]=e.coords,r=.018,i=`https://www.openstreetmap.org/export/embed.html?bbox=${[n-r,t-r*.75,n+r,t+r*.75].map(e=>e.toFixed(5)).join(`%2C`)}&layer=mapnik&marker=${t}%2C${n}`;return`
    <section class="section-wrap trip-map">
      <div class="trip-map-head">
        <div><div class="section-kicker">${u(`mapKicker`)}</div><p class="trip-map-coord">${v(t,`N`,`S`)}  /  ${v(n,`E`,`W`)}</p></div>
        <a class="text-link" href="https://www.google.com/maps/search/?api=1&query=${t},${n}" target="_blank" rel="noopener">${u(`openMap`)} <span>↗</span></a>
      </div>
      <div class="trip-map-frame"><iframe src="${i}" title="${u(`mapTitle`)(e.name)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </section>`}function b(e){return new Date(`${e}T00:00:00`).toLocaleDateString(s===`id`?`id-ID`:`en-GB`,{day:`numeric`,month:`long`,year:`numeric`})}function x(){try{return localStorage.getItem(`journal-language`)===`en`?`en`:`id`}catch{return`id`}}function S(){return`
  <header class="site-header">
    <a class="brand" href="#top" aria-label="${e.owner}"><span class="brand-mark">${e.owner[0]}</span><span>${e.owner.toUpperCase()}<br><small>${u(`brandSub`)}</small></span></a>
    <nav aria-label="${u(`navLabel`)}"><a href="#about">${u(`navAbout`)}</a><a href="#seven-summit">${u(`navSummit`)}</a><a href="#journeys">${u(`navJourneys`)}</a></nav>
    <div class="header-actions"><div class="language-switch" aria-label="${u(`langLabel`)}"><button type="button" data-language="id" class="${s===`id`?`active`:``}">ID</button><span>/</span><button type="button" data-language="en" class="${s===`en`?`active`:``}">EN</button></div></div>
  </header>`}function C(){return`<footer><span>© ${new Date().getFullYear()} ${e.owner.toUpperCase()}</span><span>${u(`footerTagline`)}</span><a href="#top">${u(`backTop`)}</a></footer>`}function w(e,t){let n=`${m(t+1)} / 07`;return p(e)?`
  <a class="summit-card" href="#/trip/${e.slug}" aria-label="${e.name}, ${b(e.date)}">
    <img src="${f(e.cover)}" alt="" loading="lazy">
    <span class="summit-no">${n}</span><span class="summit-check">✓ ${u(`summited`)}</span>
    <div class="card-info"><h3>${e.name}</h3><div class="card-more"><div><span>${b(e.date)}</span>${g(e)}<p>${d(e.location)} <b>↗</b></p></div></div></div>
  </a>`:`
    <article class="summit-card is-soon" tabindex="0" aria-label="${e.name}, ${u(`comingSoon`)}">
      <span class="summit-no">${n}</span>
      <div class="soon-mark"><i>✳</i>${u(`comingSoon`)}</div>
      <div class="card-info"><h3>${e.name}</h3><div class="card-more"><div><span>${u(`notYet`)}</span>${g(e)}<p>${d(e.location)}</p></div></div></div>
    </article>`}function T(e){return`
  <a class="journey-card" href="#/trip/${e.slug}" aria-label="${e.name}, ${b(e.date)}">
    <img src="${f(e.cover)}" alt="" loading="lazy">
    <span class="journey-tag">${d(e.category)}</span>
    <div class="card-info"><h3>${e.name}</h3><div class="card-more"><div><span>${b(e.date)}</span><p>${d(e.location)} <b>↗</b></p></div></div></div>
  </a>`}function E(){let e=n.filter(p).length,t=n.filter(e=>!p(e)).sort((e,t)=>e.elevation-t.elevation)[0],i=r.filter(p).sort((e,t)=>t.date.localeCompare(e.date)),a=_().reduce((e,t)=>e+(t.photos?.length??0),0),o=u(`ticker`).map(e=>`<span>${e}</span>`).join(`<i>✳</i>`);return`
  ${S()}
  <main id="top">
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> ${u(`heroEyebrow`)}</p>
        <h1>${u(`heroTitle`)}</h1>
        <p class="hero-intro">${u(`heroIntro`)}</p>
        <a class="round-cta" href="#seven-summit"><span>${u(`heroCta`)}</span><b>↓</b></a>
      </div>
      <div class="hero-photo"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85" alt=""><span class="photo-label">SEMBALUN, LOMBOK<br><strong>08° 22′ S  /  116° 32′ E</strong></span><span class="image-stamp">${m(e)}/07</span></div>
      <div class="hero-side-note">${u(`heroSide`)}</div>
    </section>

    <section class="ticker" aria-hidden="true">${o}</section>

    <section class="manifesto section-wrap" id="about">
      <div class="section-kicker">${u(`aboutKicker`)}</div>
      <div class="manifesto-content"><p class="large-copy">${u(`aboutLarge`)}</p><p class="body-copy">${u(`aboutBody`)}</p><a class="text-link" href="#seven-summit">${u(`aboutLink`)} <span>↗</span></a></div>
      <div class="manifesto-aside"><div class="circle-mark">◎<small>${u(`aboutCircle`)}</small></div><p>${u(`aboutAside`)}</p></div>
    </section>

    <section class="summit-section" id="seven-summit">
      <div class="section-wrap">
        <div class="section-heading"><div><div class="section-kicker">${u(`summitKicker`)}</div><h2>${u(`summitTitle`)}</h2></div><p class="body-copy">${u(`summitBody`)}</p></div>
        <div class="summit-grid">
          ${n.map(w).join(``)}
          <div class="summit-progress">
            <span class="section-kicker">${u(`progress`)}</span>
            <strong>${e}<small>/7</small></strong>
            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="7" aria-valuenow="${e}"><i style="width:${e/7*100}%"></i></div>
            <p>${e} ${u(`ofSeven`)}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="journeys section-wrap" id="journeys">
      <div class="section-heading"><div><div class="section-kicker">${u(`journeysKicker`)}</div><h2>${u(`journeysTitle`)}</h2></div><p class="body-copy">${u(`journeysBody`)}</p></div>
      <div class="journey-grid">${i.map(T).join(``)}</div>
    </section>

    <section class="stats-section"><div class="section-wrap stats"><div><strong>${m(_().length)}</strong><span>${u(`statPlaces`)}</span></div><div><strong>${m(e)}</strong><span>${u(`statSummits`)}</span></div><div><strong>${m(a)}</strong><span>${u(`statPhotos`)}</span></div><p>${u(`statNote`)}</p></div></section>

    <section class="join-section"><div class="join-inner"><p class="eyebrow">${u(`nextEyebrow`)}</p><h2>${t?u(`nextTitle`)(t.name):u(`doneTitle`)}</h2><p>${u(t?`nextBody`:`doneBody`)}</p><a class="text-link" href="#seven-summit">${u(`nextLink`)} <span>↗</span></a></div><div class="join-coordinate">08° 22′ S<br>116° 32′ E</div></section>
  </main>
  ${C()}`}function D(e){let t=_(),r=t.indexOf(e),i=t[(r-1+t.length)%t.length],a=t[(r+1)%t.length],o=n.indexOf(e),s=o>=0?`SEVEN SUMMIT SEMBALUN  ·  ${m(o+1)} / 07`:d(e.category).toUpperCase(),c=o>=0?`#seven-summit`:`#journeys`,l=e.photos??[];return`
  ${S()}
  <main id="top" class="detail">
    <section class="detail-hero">
      <img src="${f(e.cover)}" alt="">
      <div class="detail-hero-copy">
        <a class="back-link" href="${c}">← ${u(`back`)}</a>
        <p class="eyebrow"><span class="eyebrow-line"></span> ${s}</p>
        <h1>${e.name}</h1>
        <dl class="detail-meta">
          <div><dt>${u(`visited`)}</dt><dd>${b(e.date)}</dd></div>
          <div><dt>${u(`place`)}</dt><dd>${d(e.location)}</dd></div>
          ${e.elevation?`<div><dt>${u(`height`)}</dt><dd>${h(e)}</dd></div>`:``}
          <div><dt>${u(`photos`)}</dt><dd>${m(l.length)}</dd></div>
        </dl>
      </div>
    </section>

    <section class="section-wrap detail-body">
      ${e.story?`<p class="large-copy detail-story">${d(e.story)}</p>`:``}
      <h2 class="visually-hidden">${u(`gallery`)}</h2>
      <div class="photo-grid">
        ${l.map((t,n)=>`<figure><button type="button" class="photo-item" data-photo="${n}"><img src="${f(t.src)}" alt="${d(t.caption)||`${e.name} ${n+1}`}" loading="lazy"></button><figcaption>${m(n+1)}${t.caption?`  /  ${d(t.caption)}`:``}</figcaption></figure>`).join(``)}
      </div>
    </section>

    ${y(e)}

    ${t.length>1?`
    <nav class="trip-pager section-wrap" aria-label="${u(`prevTrip`)} / ${u(`nextTrip`)}">
      <a href="#/trip/${i.slug}"><span>← ${u(`prevTrip`)}</span><strong>${i.name}</strong></a>
      <a href="#/trip/${a.slug}"><span>${u(`nextTrip`)} →</span><strong>${a.name}</strong></a>
    </nav>`:``}
  </main>
  ${C()}
  <dialog class="lightbox" aria-label="${e.name}">
    <button type="button" class="lightbox-close" data-lightbox="close" aria-label="${u(`close`)}">✕</button>
    <button type="button" class="lightbox-nav prev" data-lightbox="prev" aria-label="${u(`prevPhoto`)}">←</button>
    <figure><img alt=""><figcaption></figcaption></figure>
    <button type="button" class="lightbox-nav next" data-lightbox="next" aria-label="${u(`nextPhoto`)}">→</button>
  </dialog>`}function O(){return`
  ${S()}
  <main id="top" class="detail">
    <section class="detail-hero is-empty">
      <div class="detail-hero-copy">
        <a class="back-link" href="#seven-summit">← ${u(`back`)}</a>
        <h1>${u(`notFoundTitle`)}</h1>
        <p class="hero-intro">${u(`notFoundBody`)}</p>
      </div>
    </section>
  </main>
  ${C()}`}function k(){let e=location.hash.match(/^#\/trip\/([\w-]+)/);return e?o.find(t=>t.slug===e[1])??null:void 0}function A({keepScroll:t=!1}={}){let n=k(),r=n===void 0?`home`:`trip:${n?.slug??`missing`}`;if(!t&&r===`home`&&c===`home`)return;let o=window.scrollY;a.innerHTML=n===void 0?E():n&&p(n)?D(n):O(),document.documentElement.lang=s,document.title=n?`${n.name} — ${e.owner}`:`${e.owner} — ${i[s].brandSub.toLowerCase()}`,t?window.scrollTo(0,o):r===`home`&&location.hash.length>1?document.getElementById(location.hash.slice(1))?.scrollIntoView():window.scrollTo(0,0),c=r}function j(e){let t=k(),n=a.querySelector(`.lightbox`);if(!t||!n)return;let r=t.photos;l=(e+r.length)%r.length;let i=r[l];n.querySelector(`img`).src=f(i.src),n.querySelector(`img`).alt=d(i.caption)||t.name,n.querySelector(`figcaption`).textContent=`${m(l+1)} / ${m(r.length)}${i.caption?`  ·  ${d(i.caption)}`:``}`,n.open||n.showModal()}a.addEventListener(`click`,e=>{let t=e.target.closest(`[data-language]`);if(t){s=t.dataset.language;try{localStorage.setItem(`journal-language`,s)}catch{}A({keepScroll:!0});return}let n=e.target.closest(`[data-photo]`);if(n)return j(Number(n.dataset.photo));let r=e.target.closest(`[data-lightbox]`)?.dataset.lightbox,i=a.querySelector(`.lightbox`);r===`close`||e.target===i?i.close():r===`prev`?j(l-1):r===`next`&&j(l+1)}),document.addEventListener(`keydown`,e=>{a.querySelector(`.lightbox[open]`)&&(e.key===`ArrowLeft`&&j(l-1),e.key===`ArrowRight`&&j(l+1))}),window.addEventListener(`hashchange`,()=>A()),A();