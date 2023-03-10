<template>
  <button class="bg-custom-blue text-white py-1 px-6 font-bold rounded-full lg:hover:bg-sky-600 duration-300">
    <nuxt-link :to="to" class="uppercase">
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
    required: true,
    defalt: ''
  }
})

</script>
