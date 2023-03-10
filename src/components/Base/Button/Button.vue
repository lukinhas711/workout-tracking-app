<template>
  <button :class="style.button">
    <nuxt-link :to="to" :class="$style.isLogin">
      <slot name="login" />
    </nuxt-link>
    <nuxt-link :to="to">
      <slot />
    </nuxt-link>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
  },
});
</script>

<style module lang="postcss">
.button {
  @apply bg-custom-blue text-white py-1 px-6 font-bold rounded-full lg:hover:bg-sky-600 duration-300;
}

.isLogin {
  @apply uppercase;
}
</style>