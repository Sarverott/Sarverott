<script setup lang="ts">
import Hydra from "hydra-synth";
import { onBeforeUnmount, onMounted, ref } from "vue";

const canvas = ref<HTMLCanvasElement>();

let fitToWindow: (() => void) | undefined;

onMounted(() => {
	const { synth } = new Hydra({
		canvas: canvas.value,
		width: window.innerWidth,
		height: window.innerHeight,
		detectAudio: false,
		makeGlobal: false,
	});

	// hydra sketch of background - same syntax as in https://hydra.ojack.xyz
	synth.osc(4, 0.1, 1.2).out();

	fitToWindow = () =>
		synth.setResolution(window.innerWidth, window.innerHeight);
	window.addEventListener("resize", fitToWindow);
});

onBeforeUnmount(() => {
	if (fitToWindow) window.removeEventListener("resize", fitToWindow);
});
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style scoped>
canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
