/**
 * @file VDnd.vue
 * @description Drag and drop component
 */
<template>
    <div>
        {{  data  }}
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { VDndProps, DropTypes } from '../types'

const props = withDefaults(defineProps<VDndProps>(), {
    draggable: true,
    dropType: DropTypes.ALL,
})

</script>

<style scoped>
/* Your styles here */
</style>