// hydra sketch of background - same syntax as in https://hydra.ojack.xyz
// biome-ignore lint/suspicious/noExplicitAny: hydra-synth is published without types
export function backgroundAnimation(synth: any) {
	synth.osc(4, 0.1, 1.2).out();
}
