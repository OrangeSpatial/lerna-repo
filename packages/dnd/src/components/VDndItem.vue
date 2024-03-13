<template>
    <div>
        Childe component
    </div>
</template>

<script lang="ts" setup>
import { VDndItemProps } from '../types'

const props = withDefaults(defineProps<VDndItemProps>(), {
    draggable: true,
    droppable: true
})

</script>

<style scoped>
</style>