<template>
  <div class="border border-prime-light bg-grey-extra-light rounded-md ">
    <h3 class="p-4 text-prime uppercase font-medium text-xl">{{ eventName }}</h3>
    <p class="p-4 text-dark font-normal uppercase">{{ date }}</p>
    <p class="p-4 text-dark font-normal uppercase">{{ description }}</p>
    <section class="flex justify-end p-4">
      <!-- <button 
        class="bg-prime text-light py-2 px-3 rounded-md hover:bg-prime-light cursor-pointer text-sm uppercase"
        @click="$emit('register')"
      >
        Register
      </button> -->
      <Button 
        label="Register"
        @click="$emit('register')"
      />
    </section>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
defineProps({
  eventName: String,
  date: String,
  description: String
})

defineEmits(['register'])

</script>