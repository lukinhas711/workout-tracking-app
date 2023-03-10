<template>
  <BaseButton v-if="!isLogged" to="/conta/login"><template #login>Login</template></BaseButton>
  <section v-else class="h-[80px] flex items-center justify-center gap-2 px-4 text-white">
    <img draggable="false" :src="image" alt="" width="50" class="bg-gray-500 border border-white rounded-full">
    <span class="hidden lg:flex font-bold">{{ name }}</span>
    <!-- <ChevronDownIcon class="h-6 w-6 text-white" /> -->
  </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const isLogged = ref(false)
const name = ref('Lucas Ribeiro')
const image = ref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAxhJREFUWEftlktIVFEYx/9DSqOZmdokWOYjzRRTmZGZ8VGtolURbapFtZGCRKw2OVBEgbboIfSAcFGrWkW0CKKV+RxT0xIfWdbkqzQ1NR+Tjt74jsxJr6Pce48LiXt2c+fc7/vd//875/sMp7qOSVjDy6ADCrqjKygoIHQFdQVFFRB9//+pwVn3LOqLmtD++BMXxX4jAwnH4wDD8jp9r+5HRb4TUwNTbFPiyXiYHanwC/RTJK4qBcd7JlCRX4OB+kEWfNPOYOy7n4nNu0N8JpPvj8g0IafEjsCIAEVwtEkVIL3QV/4DZWerMDM+w5IknIhDxpX0JYrIFQ+K3IDsO1ZstZkUw2kClDwSmh+0ovFmM0+UU2JD7JHof1ZLwJcX3+B01PMPMTvSkJy7C4Z1K9SDD3TVClKMqUE3ai7Voft1Lwu5JT0MWbeszHJao5/HUJ5XjeHWEfY77mg0rNfN8A/yV6WeJgW9GfqdA6g8X4vx3on54j8dD4sjDXOeOdRebkDnM5dPeLWEmhSkJNKshJbSj2goamI5SZ3s21ZM9E3i7dV3/Bmd9JhDUWq5+H7NgBRhenSaWe162c0CGsONoMPhPUApeUlIv5ACg5+6ulv4NUKAFOhX2wjenKtmdbdwbT8QCVIvINyoWT2hGuRZfZxYulJy7tphsoQLwa0OIMBOc0WBk1tL9UhXD6kouoQtHvv6G5UFTvxsHFrEQldPdokNwTEbhRiFAOXdIsA038K09l1fX6IdUFZ7ZKu92AJJAu8g9MxWZEHs4R0rDhQrSawZkE5t1cVabq13SqFkddca0fGkk+UNTQrB3nuZvMuo9VsToGfSswhibbU6Ceh42skuaG8HWWIj2f/cxU62dymZHVelBoc+DKPsTBXvwcuNW9RNFvZkuhv3P8xC2J5QVS6rstg99Ac1hXXoetWjqL7kXSbq4DbYizNgDFuvGFIxIM2BLaXtaCh+z4MvmQPlaSWg7VEHHx7ob3NhKpJzExX3Z8WA8vFqOWvljPKBQu1krRhQsServFEHFBVUV1BXUFQB0ff1GhRV8C+PSKr4+N9T3gAAAABJRU5ErkJggg==')

</script>
