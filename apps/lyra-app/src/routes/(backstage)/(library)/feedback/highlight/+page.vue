<script lang="ts" setup>
import { ref } from 'vue';
import { XBreadcrumb, XCard, XTextField, XHighlight, XChipField } from '@lyra/ui';

const query1 = ref('spotlight, emphasize and accentuate');
const query2 = ref(['spotlight', 'emphasize', 'Accentuate']);
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Library' }, { text: 'Feedback' }, { text: 'Highlight' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Highlight</h1>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">String</h2>

		<XCard>
			<XTextField v-model:value="query1" />

			<div class="mt-1">
				<XHighlight :query="[query1]">
					With the Highlight component, you can spotlight, emphasize and accentuate words.
				</XHighlight>
			</div>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">String</h2>

		<XCard>
			<XChipField v-model:value="query2" />

			<div class="mt-1">
				<XHighlight :query="query2">
					With the Highlight component, you can spotlight, emphasize and accentuate words.
				</XHighlight>
			</div>
		</XCard>
	</section>
</template>
