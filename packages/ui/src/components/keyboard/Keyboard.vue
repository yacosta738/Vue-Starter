<script lang="ts" setup>
type KbdKey =
	| 'command'
	| 'shift'
	| 'ctrl'
	| 'option'
	| 'enter'
	| 'delete'
	| 'escape'
	| 'tab'
	| 'capslock'
	| 'up'
	| 'right'
	| 'down'
	| 'left'
	| 'pageup'
	| 'pagedown'
	| 'home'
	| 'end'
	| 'help'
	| 'space';

defineProps<{
	keys?: KbdKey[];
}>();

const kbdKeys: Record<KbdKey, string> = {
	command: '⌘',
	shift: '⇧',
	ctrl: '⌃',
	option: '⌥',
	enter: '↵',
	delete: '⌫',
	escape: '⎋',
	tab: '⇥',
	capslock: '⇪',
	up: '↑',
	right: '→',
	down: '↓',
	left: '←',
	pageup: '⇞',
	pagedown: '⇟',
	home: '↖',
	end: '↘',
	help: '?',
	space: '␣',
};
</script>

<template>
	<kbd class="Kbd">
		<template v-for="key in keys" :key="key">
			{{ kbdKeys[key] }}
		</template>
		<slot></slot>
	</kbd>
</template>

<style lang="scss" scoped>
.Kbd {
	@apply min-h-7.5 inline-flex items-center justify-center px-1.5 py-0.5;
	@apply rounded-md border border-gray-200 bg-white font-sans text-sm text-gray-800 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-200;
}
</style>
