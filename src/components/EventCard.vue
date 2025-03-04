<template>
  <div class="border border-prime-light bg-grey-extra-light rounded-md ">
    <h3 class="p-4 text-prime uppercase font-medium text-xl">{{ eventName }}</h3>
    <p class="p-4 text-dark font-normal uppercase">{{ date }}</p>
    <p class="p-4 text-dark font-normal">{{ description }}</p>
    <section class="flex justify-end p-4">
      <RoundButton 
        label="Register"
        @click="$emit('register')"
      />
    </section>
  </div>
</template>

<script setup>
import RoundButton from '@/components/RoundButton.vue'
defineProps({
  eventName: String,
  date: String,
  description: String
})

defineEmits(['register'])

</script>