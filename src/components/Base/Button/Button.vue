<template>
  <button class="bg-custom-blue text-white py-1 px-6 font-bold rounded-full lg:hover:bg-sky-600 duration-300">
    <section class="uppercase">
      <slot name="login" />
    </section>
    <section>
      <slot />
    </section>
  </button>
</template>

<script lang="ts">
</script>