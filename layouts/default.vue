<template>
  <section>
    <TheMenu />
    <main>
      <BaseContainer>
        <template #center>
          <NuxtPage :class="$style.marginTop" />
        </template>
      </BaseContainer>
    </main>
  </section>
</template>

<style module lang="postcss">
.marginTop {
  @apply mt-[80px];
}
</style>