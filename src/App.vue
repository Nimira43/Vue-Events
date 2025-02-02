<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl logo text-prime">Vue Events</h1>
    <h2 class="font-normal uppercase">All Events</h2>
    <EventCard />
    <h2 class="font-normal uppercase">Your Bookings</h2>
  </main>
</template>

<script setup>
  import EventCard from '@/components/EventCard.vue'
</script>