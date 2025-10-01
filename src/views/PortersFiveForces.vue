<script>
import SlideNav from '@/components/SlideNav.vue'

export default {
  components: {
    SlideNav
  },
  data() {
    return {
      forces: {
        threatOfNewEntrants: [
          'Mahasiswa lain lebih cepat beradaptasi dengan teknologi baru (AI, blockchain, cloud computing).',
          'banyak pesaing dalam bidang penelitian atau perebutan peluang kerja praktek.',
          'Persaingan portofolio digital tinggi'
        ],
        bargainingPowerOfSuppliers: [
          'Sumber utama: dosen, mentor, kursus online, komunitas open-source, dan platform belajar (Udemy, Coursera, YouTube).',
          'Tools IT (seperti GitHub, Linux, Arduino, Laravel, Docker) juga menjadi "supplier" skill.',
          'Banyak sumber terbuka (open-source, forum, dokumentasi resmi) yang bisa dimanfaatkan secara gratis.'
        ],
        bargainingPowerOfBuyers: [
          'Perusahaan tempat KP atau dosen pembimbing punya kontrol penuh atas standar yang harus dipenuhi.',
          'Harga jasa web developer sangat kompetitif',
          'Kualitas dan portofolio sangat menentukan keputusan klien'
        ],
        threatOfSubstitutes: [
          'Perusahaan/dosen bisa memilih solusi non-manusia, seperti No-code/Low-code platform ',
          'Ancaman juga datang dari mahasiswa lintas jurusan (misalnya Sistem Informasi, Matematika, bahkan Ekonomi) yang belajar ITsecara otodidak.',
          'Alternatif platform digital lain (media sosial, marketplace)'
        ],
        rivalryAmongCompetitors: [
          'Banyak developer dengan skill serupa',
          'Persaingan harga dan kualitas sangat ketat',
          'Inovasi dan personal branding menjadi kunci'
        ]
      }
    }
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
  <article data-page="porters-five-forces">
      <header>
        <div class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Porter’s Five Forces Analysis</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Threat of New Entrants, Bargaining Power of Suppliers, Bargaining Power of Buyers, Threat of Substitutes, Rivalry Among Competitors
          </h4>
        </div>
      </header>
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 fade-zoom-in">
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200">
            <h5 class="text-xl font-bold text-amber-200 mb-3">Threat of New Entrants</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in forces.threatOfNewEntrants" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200">
            <h5 class="text-xl font-bold text-amber-200 mb-3">Bargaining Power of Suppliers</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in forces.bargainingPowerOfSuppliers" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200">
            <h5 class="text-xl font-bold text-amber-200 mb-3">Bargaining Power of Buyers</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in forces.bargainingPowerOfBuyers" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200">
            <h5 class="text-xl font-bold text-amber-200 mb-3">Threat of Substitutes</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in forces.threatOfSubstitutes" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center mt-8">
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200 w-full md:w-2/3 lg:w-1/2">
            <h5 class="text-xl font-bold text-amber-200 mb-3 text-center">Rivalry Among Competitors</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in forces.rivalryAmongCompetitors" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- SlideNav overlay moved outside article for global overlay -->
  </article>
  <div class="fixed inset-0 flex items-center justify-between pointer-events-none z-40">
    <div class="pointer-events-auto">
      <SlideNav :prev="{ label: 'SWOT', path: '/swot' }" />
    </div>
    <div class="pointer-events-auto">
      <SlideNav :next="{ label: 'Materi', path: '/materi' }" />
    </div>
  </div>
  </div>
</template>

<style>
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
