<template>
  <button 
    class="bg-prime text-light py-2 px-3 rounded-md hover:bg-prime-light cursor-pointer text-sm uppercase"
    
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineEmits(['click'])
</script>