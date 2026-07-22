// Hansan Staff Manager — Service Worker
// Ujeeddo: Android/Chrome ha u ogolaato install "hal-taabo" ah (installable PWA).
// MUHIIM: Ma kaydiyo/cache-garaynayo wax — app-ku had iyo jeer wuu cusboonaanayaa
// (marka aad GitHub Pages cusub deploy garayso, isla markiiba ayaa la helayaa).

self.addEventListener('install', function (event) {
  // Isla markiiba fal-gal
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

// Fetch handler — waa lagama maarmaan si app-ku "installable" u noqdo.
// Network-passthrough kaliya: dhammaan codsiyada toos ayay internet-ka uga imanayaan,
// cache lama isticmaalayo, sidaas darteed app-ku weligiis wuu cusub yahay.
self.addEventListener('fetch', function (event) {
  // Wax lagama qabto — browser-ka ha ka soo qaato network-ka sida caadiga ah.
});
