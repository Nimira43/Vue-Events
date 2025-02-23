<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl logo text-prime">Vue Events</h1>
    <h2 class="text-2xl font-medium uppercase">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard 
        v-for="i in 8 " 
        :key="i" 
        eventName="Coding Conference 2025"
        date="4th April 2025"
        description="Latest developments in the world of Frameworks"
        @register="console.log('Registered!!!');"  
      />
    </section>
    <h2 class="text-2xl font-medium  uppercase">Your Bookings</h2>
  </main>
</template>

<script setup>
  import EventCard from '@/components/EventCard.vue'
</script>