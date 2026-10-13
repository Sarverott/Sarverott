<script setup lang="ts">
import Hydra from "hydra-synth";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { defaultSketch } from "../../lib/sketches";

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

	defaultSketch(synth);

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
