<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-6xl logo text-prime">Vue Events</h1>
    <h2 class="text-2xl font-medium uppercase">All Events</h2>
    <EventCard v-for="i in 8 " :key="i" />
    <h2 class="text-2xl font-medium  uppercase">Your Bookings</h2>
  </main>
</template>

<script setup>
  import EventCard from '@/components/EventCard.vue'
</script>