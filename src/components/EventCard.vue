<template>
  <RoundedCard>
    <h3 class="p-4 text-prime uppercase font-medium text-xl">{{ eventName }}</h3>
    <p class="p-4 text-dark font-normal uppercase">{{ date }}</p>
    <p class="p-4 text-dark font-normal">{{ description }}</p>
    <section class="flex justify-end p-4">
      <RoundButton @click="$emit('register')">
        Register
      </RoundButton>
    </section>
  </RoundedCard>
</template>

<script setup>
import RoundedCard from '@/components/RoundedCard.vue'
import RoundButton from '@/components/RoundButton.vue'

defineProps({
  eventName: String,
  date: String,
  description: String
})

defineEmits(['register'])

</script>