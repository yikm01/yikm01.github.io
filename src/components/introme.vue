<template>
    <div class="con">
        <left></left> 
        <maincon></maincon>
    </div>
</template>

<script>
import maincon from '../components/maincon.vue'
import left from '../components/left.vue'
export default {
    name:'introme',
    components: { 
        "left":left,
        "maincon":maincon
    }
}
</script>

<style>

</style>