
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="swot">
      <header>
        <div class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>SWOT Analysis</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Strengths, Weaknesses, Opportunities, Threats</h4>
        </div>
      </header>
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 fade-zoom-in">
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200">
            <h5 class="text-xl font-bold text-amber-200 mb-3">Strengths</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in swot.strengths" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200">
            <h5 class="text-xl font-bold text-amber-200 mb-3">Weaknesses</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in swot.weaknesses" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200">
            <h5 class="text-xl font-bold text-amber-200 mb-3">Opportunities</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in swot.opportunities" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="bg-[#232323] rounded-xl p-6 border border-amber-200">
            <h5 class="text-xl font-bold text-amber-200 mb-3">Threats</h5>
            <ul class="list-disc ml-5 text-white">
              <li v-for="item in swot.threats" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
    <div class="fixed inset-0 flex items-center justify-between pointer-events-none z-40">
      <div class="pointer-events-auto">
        <SlideNav :prev="{ label: 'About', path: '/about' }" />
      </div>
      <div class="pointer-events-auto">
        <SlideNav :next="{ label: 'Porter\'s Five Forces', path: '/porters-five-forces' }" />
      </div>
    </div>
  </div>
</template>

<script>
import SlideNav from '../components/SlideNav.vue';
export default {
  components: { SlideNav },
  data() {
    return {
      swot: {
        strengths: [
          'Penguasaan teknologi web modern (VueJS, Tailwind, Laravel)',
          'Pengalaman membangun aplikasi web responsif',
          'Kemampuan belajar mandiri dan adaptasi teknologi baru',
          'Komunikasi dan kolaborasi tim yang baik'
        ],
        weaknesses: [
          'Pengalaman mobile development masih terbatas',
          'Belum banyak pengalaman proyek skala enterprise',
          'Manajemen waktu kadang kurang optimal'
        ],
        opportunities: [
          'Industri digital dan web development terus berkembang',
          'Banyak peluang freelance dan remote work',
          'Potensi kolaborasi dengan startup dan komunitas IT'
        ],
        threats: [
          'Persaingan developer semakin ketat',
          'Perubahan teknologi yang sangat cepat',
          'Kebutuhan sertifikasi dan portofolio yang terus meningkat'
        ]
      }
    }
  }
}
</script>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover{
  stroke: #ffdb70;
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
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>
