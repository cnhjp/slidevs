<template>
  <div>
    <div class="mb-1">
      <ph-user-bold class="mr-2" />
      <span>hjp</span>
    </div>
    <div>
      <ph-calendar-bold class="mr-2" />
      <span>{{ today }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// get yyyy/mm/dd
function getDate(date: Date) {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString();
  const dd = date.getDate().toString();
  return `${yyyy}/${mm.padStart(2, "0")}/${dd.padStart(2, "0")}`;
}
const today = getDate(new Date());
</script>
