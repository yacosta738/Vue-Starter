<script lang="ts" setup>
import { XBreadcrumb, XCard, XTooltip } from '@lyra/ui';
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Library' }, { text: 'Data Display' }, { text: 'Tooltip' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Tooltip</h1>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">Basic</h2>

		<XCard>
			<XTooltip title="Hi! I'm tooltip">
				<span>Tooltip will show on mouse enter.</span>
			</XTooltip>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Placement</h2>

		<XCard>
			<div class="flex flex-col gap-16">
				<div class="flex justify-between">
					<XTooltip v-for="num in 2" :key="num" title="Hi! I'm tooltip">
						<span>Tooltip will show on mouse enter.</span>
					</XTooltip>
				</div>

				<div class="flex justify-center">
					<XTooltip title="Hi! I'm tooltip">
						<span>Tooltip will show on mouse enter.</span>
					</XTooltip>
				</div>

				<div class="flex justify-between">
					<XTooltip v-for="num in 3" :key="num" title="Hi! I'm tooltip">
						<span>Tooltip will show on mouse enter.</span>
					</XTooltip>
				</div>

				<div class="flex justify-center">
					<XTooltip title="Hi! I'm tooltip">
						<span>Tooltip will show on mouse enter.</span>
					</XTooltip>
				</div>
			</div>
		</XCard>
	</section>
</template>
