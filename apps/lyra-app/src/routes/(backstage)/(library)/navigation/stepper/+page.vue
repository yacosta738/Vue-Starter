<script lang="ts" setup>
import { reactive } from 'vue';
import { XBreadcrumb, XStepper, XButton } from '@lyra/ui';

const flux = reactive({
	stepper1: 3,
});

function goToPrevious() {
	if (flux.stepper1 === 1) return;
	flux.stepper1 -= 1;
}

function goToNext() {
	if (flux.stepper1 === 6) return;
	flux.stepper1 += 1;
}
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Library' }, { text: 'Navigation' }, { text: 'Stepper' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Stepper</h1>

	<XStepper v-model="flux.stepper1" class="my-8">
		<template #head>
			<XStepper.Step :step="1">1. Enter details</XStepper.Step>
			<XStepper.Step :step="2">2. Additional details</XStepper.Step>
			<XStepper.Step :step="3">3. Review &amp; pay</XStepper.Step>
			<XStepper.Step :step="4">4. Print your label</XStepper.Step>
			<XStepper.Step :step="5">5. Next steps</XStepper.Step>
		</template>

		<template #body>
			<XStepper.Content v-for="num in 5" :key="num">
				<div class="mb-8 flex flex-col gap-4">
					<div class="text-3xl font-bold">Content {{ num }}</div>

					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum venenatis lacus
						vel malesuada. Etiam vel lacus vitae arcu vulputate venenatis. Aliquam efficitur, enim
						ultricies facilisis consequat, sapien neque efficitur mi, et convallis tellus orci eget
						metus. Morbi sed velit consectetur justo vehicula eleifend eget sit amet massa. Morbi a
						pellentesque ipsum. Sed et dignissim nunc. Suspendisse potenti. Mauris consectetur
						semper velit nec pretium. Etiam dapibus nunc ut sagittis efficitur. In finibus semper
						venenatis. Sed rhoncus, mi maximus tincidunt sollicitudin, tortor orci tempus urna, sed
						facilisis ex enim eget lacus. Sed semper elementum nibh quis varius.
					</div>
				</div>

				<div class="grid grid-cols-3">
					<div class="col-start-2 flex justify-center gap-2">
						<XButton color="secondary" class="flex-1" @click="goToPrevious">Previous</XButton>
						<XButton class="flex-1" @click="goToNext">Next</XButton>
					</div>
				</div>
			</XStepper.Content>

			<XStepper.Content>
				<div
					class="flex flex-col items-center justify-center py-8 text-green-500 dark:text-green-400"
				>
					<div class="i-mdi-checkbox-marked-circle-outline h-20 w-20"></div>
					<div class="text-2xl font-semibold">Order Established</div>
				</div>

				<div class="grid grid-cols-5">
					<div class="col-start-3 flex justify-center gap-2">
						<XButton class="flex-1" @click="flux.stepper1 = 1">OK</XButton>
					</div>
				</div>
			</XStepper.Content>
		</template>
	</XStepper>
</template>
