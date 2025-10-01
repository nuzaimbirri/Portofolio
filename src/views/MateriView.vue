<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="materi">
      <header>
        <div class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Materi Kapita Selekta Informatika</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Ringkasan materi utama Kapita Selekta, 10 Kekuatan Pendatar Dunia, dan Filsafat Open Source
          </h4>
        </div>
      </header>
      <section>
        <div class="space-y-8">
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200 shadow-lg">
            <h5 class="text-xl font-bold text-amber-200 mb-3">1. Konsep Dasar Kapita Selekta</h5>
            <ul class="list-disc ml-5 text-white space-y-2">
              <li>Kapita selekta adalah kumpulan topik pilihan yang relevan dan aktual di bidang informatika.</li>
              <li>Tujuannya memperluas wawasan mahasiswa tentang isu, tren, dan teknologi terbaru.</li>
              <li>Materi dapat meliputi etika IT, keamanan siber, AI, cloud computing, hingga pengembangan karir.</li>
              <li>Pembelajaran bersifat diskusi, studi kasus, dan pemecahan masalah nyata.</li>
            </ul>
          </div>
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200 shadow-lg">
            <h5 class="text-xl font-bold text-amber-200 mb-3">2. 10 Kekuatan Pendatar Dunia (Thomas L. Friedman)</h5>
            <ol class="list-decimal ml-5 text-white space-y-1">
              <li>Runtuhnya Tembok Berlin: Membuka akses global dan kolaborasi lintas negara.</li>
              <li>Internet (Netscape): Memudahkan akses informasi dan komunikasi global.</li>
              <li>Workflow Software: Kolaborasi digital tanpa batas ruang dan waktu.</li>
              <li>Open Sourcing: Perangkat lunak terbuka, kolaborasi komunitas global.</li>
              <li>Outsourcing: Pekerjaan bisa dilakukan dari mana saja di dunia.</li>
              <li>Offshoring: Produksi dan layanan dipindahkan ke negara lain untuk efisiensi.</li>
              <li>Supply-Chaining: Rantai pasok global yang terintegrasi.</li>
              <li>Insourcing: Perusahaan pihak ketiga mengelola proses bisnis perusahaan lain.</li>
              <li>In-forming: Kemudahan pencarian dan akses data (Google, Wikipedia, dsb).</li>
              <li>Teknologi Digital (Mobile, Cloud, AI): Dunia makin terkoneksi dan transparan.</li>
            </ol>
          </div>
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200 shadow-lg">
            <h5 class="text-xl font-bold text-amber-200 mb-3">3. Filsafat Open Source</h5>
            <ul class="list-disc ml-5 text-white space-y-2">
              <li>Open source adalah filosofi berbagi kode, kolaborasi, dan transparansi dalam pengembangan perangkat lunak.</li>
              <li>Siapa saja bisa mempelajari, memodifikasi, dan mendistribusikan ulang software open source.</li>
              <li>Lisensi open source (GPL, MIT, Apache) memastikan kebebasan penggunaan dan pengembangan.</li>
              <li>Open source mendorong inovasi, efisiensi, dan pertumbuhan komunitas global.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  </div>

  <div class="fixed inset-0 flex items-center justify-between pointer-events-none z-40">
    <div class="pointer-events-auto">
      <SlideNav :prev="{ label: 'Porter\'s Five Forces', path: '/porters-five-forces' }" />
    </div>
    <div class="pointer-events-auto">
      <SlideNav :next="{ label: 'Home', path: '/' }" />
    </div>
  </div>
</template>

<script>
import SlideNav from '../components/SlideNav.vue';
export default {
  name: 'MateriView',
  components: { SlideNav }
}
</script>

<style>
.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}
@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
