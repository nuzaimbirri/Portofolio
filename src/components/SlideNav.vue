<template>
  <div class="flex justify-between items-center select-none w-20 h-40">
    <button v-if="prev" @click="goTo(prev.path)"
      class="flex items-center gap-2 px-4 py-3 rounded-full bg-[#18181b] border-2 border-amber-200 text-amber-200 font-semibold shadow-lg transition-all duration-200 hover:bg-amber-200 hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300/60">
      <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="font-semibold tracking-wide">{{ prev.label }}</span>
    </button>
    <div></div>
    <button v-if="next" @click="goTo(next.path)"
      class="flex items-center gap-2 px-4 py-3 rounded-full bg-[#18181b] border-2 border-amber-200 text-amber-200 font-semibold shadow-lg transition-all duration-200 hover:bg-amber-200 hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300/60">
      <span class="font-semibold tracking-wide">{{ next.label }}</span>
      <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SlideNav',
  props: {
    prev: Object,
    next: Object
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
}
</script>
