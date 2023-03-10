<template>
  <section class="container mx-auto">
    <section class="flex items-center justify-center">
      <slot name="center" />
    </section>
    <section class="flex items-center justify-between">
      <slot name="between" />
    </section>
  </section>
</template>