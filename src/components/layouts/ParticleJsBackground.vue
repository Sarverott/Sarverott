<script setup>
    const props = defineProps("config");

    import { onMounted } from "vue";
    import Hydra from 'hydra-synth'
    
    const hydraBG = {}; 
    
    onMounted(async ()=>{
        hydraBG.onload = ()=>{
            this.root.osc(4, 0.1, 1.2).out()
        }
        hydraBG.domHook = "#particles-background"
        hydraBG.config = { 
            canvas: document.querySelector(hydraBG.domHook), 
            detectAudio: false, 
            makeGlobal: false
        }
        hydraBG.root = new Hydra(hydraBG.config).synth
        hydraBG.onload()
    })
</script>
<template>
    <canvas id="particles-background"></canvas>
</template>
<style scoped>
    #particles-background {
  position: fixed;
  inset: 0;
  z-index: -1;
}
</style>
