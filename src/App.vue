<script setup lang="ts">
import { themeClass } from "./style.css";
import { Button } from "./components/button";
</script>

<template>
  <div :class="themeClass">
    <Button />
  </div>
</template>
