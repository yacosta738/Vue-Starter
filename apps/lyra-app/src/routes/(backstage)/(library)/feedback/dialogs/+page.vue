<script lang="ts" setup>
import { reactive } from 'vue';
import { XBreadcrumb, XCard, XButton, XDialog } from '@lyra/ui';

const flux = reactive({
	dialog: false,
	launch() {
		flux.dialog = true;
	},
	close() {
		flux.dialog = false;
	},
	more: false,

	sizeDialog: false,
});
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Library' }, { text: 'Feedback' }, { text: 'Dialog' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Dialog</h1>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">Basic</h2>

		<XCard>
			<XButton label="Launch" @click="flux.launch" />

			<XDialog v-model="flux.dialog" title="Lorem Ipsum">
				<div class="mb-2 text-2xl font-bold">Lorem ipsum dolor sit amet.</div>

				<div class="mb-6 space-y-3">
					<div>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</div>

					<XButton color="info" @click="flux.more = !flux.more">More</XButton>

					<template v-if="flux.more">
						<div v-for="num in 3" :key="num">
							{{ num }}. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
							release of Letraset sheets containing Lorem Ipsum passages, and more recently with
							desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</div>
					</template>
				</div>

				<div class="flex justify-end gap-4">
					<XButton color="secondary" @click="flux.close">Vivamus</XButton>
					<XButton @click="flux.close">Laoreet</XButton>
				</div>
			</XDialog>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Size</h2>

		<XCard>
			<XButton label="Launch" @click="flux.sizeDialog = true" />

			<XDialog v-model="flux.sizeDialog" title="Lorem Ipsum" class="!w-100">
				<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
			</XDialog>
		</XCard>
	</section>
</template>
