<template>
  <section :class="$style.mainContainer">
    <section :class="$style.center">
      <slot name="center" />
    </section>
    <section :class="$style.between">
      <slot name="between" />
    </section>
  </section>
</template>

<style module lang="postcss">
.mainContainer {
  @apply container mx-auto;
}

.center {
  @apply flex items-center justify-center;
}

.between {
  @apply flex items-center justify-between;
}
</style>