<template>
  <div style="display: flex; align-items: center">
    <img :src="Book" style="width: 16px; height: 16px" />
    <div style="margin-left: 7px"><slot></slot></div>
    <img :src="Level" :style="{width: `${W}px`, height: "16px", marginLeft: "7px"}" />
  </div>
</template>

<script setup>
defineProps({
  W: Number,
  Book: String,
  Level: String,
});
</script>
