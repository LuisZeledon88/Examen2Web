<script setup>
import { ref, onMounted } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import MembersTable from '@/components/MembersTable.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import membersData from '@/data/members.json'

const members = ref([])

onMounted(() => {
  members.value = membersData
})
</script>

<template>
  <HeaderComponent :totalMembers="members.length" />
  <MembersTable :members="members" />
  <FooterComponent :totalMembers="members.length" />
</template>
