<template>
    <footer class="mt-12 bg-gray-100 py-4 text-center">
      <h5 class="font-semibold text-lg">Acme - {{ totalMembers }} Member Team</h5>
    </footer>
  </template>
  
  <script setup>
  defineProps(['totalMembers'])
  </script>
  