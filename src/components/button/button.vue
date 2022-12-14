<script setup lang="ts">
import { button, buttonVariants } from "./button.css";
import { ref } from "vue";

const variant = ref<keyof typeof buttonVariants>("primary");
</script>

<template>
  <div>
    <select v-model="variant">
      <option v-for="variant in Object.keys(buttonVariants)" :value="variant">
        {{ variant }}
      </option>
    </select>
    <button :class="{
      [button]: true,
      [buttonVariants[variant]]: true,
    }">
      Submit
    </button>
  </div>
</template>
