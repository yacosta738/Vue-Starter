<script lang="ts" setup>
import { reactive } from 'vue';
import { XBreadcrumb, XCard, XTransfer } from '@lyra/ui';

const flux = reactive({
	source: [
		{ id: 1, name: 'Angular' },
		{ id: 2, name: 'React' },
		{ id: 3, name: 'Svelte' },
		{ id: 4, name: 'Vue' },
	],
	target: [
		{ id: 5, name: 'Express' },
		{ id: 6, name: 'Fastify' },
		{ id: 7, name: 'Koa' },
		{ id: 8, name: 'Nest' },
	],
});
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Library' }, { text: 'Data Entry' }, { text: 'Transfer' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Transfer</h1>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">Basic</h2>

		<XCard>
			<XTransfer v-model:source="flux.source" v-model:target="flux.target" />

			<div class="mt-1 flex">
				<pre class="flex-1">{{ flux.source }}</pre>
				<div class="w-15"></div>
				<pre class="flex-1">{{ flux.target }}</pre>
			</div>
		</XCard>
	</section>
</template>
