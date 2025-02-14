<script lang="ts" setup>
import { reactive } from 'vue';
import { XBreadcrumb, XCard, XIterator, XTextField, XCode } from '@lyra/ui';

interface Iterator1 {
	address?: string;
}

interface Iterator2 {
	serviceName?: string;
	cloudName?: string;
}

const flux = reactive({
	iterator1: [] as Iterator1[],
	iterator2: [] as Iterator2[],
	iterator3: [] as Iterator1[],
	iterator4: [] as Iterator1[],
});
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Library' }, { text: 'Data Display' }, { text: 'Iterator' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Iterator</h1>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">Basic</h2>

		<XCard>
			<XIterator v-model:value="flux.iterator1">
				<template #default="{ item }">
					<XTextField v-model:value="item.address" />
				</template>
			</XIterator>

			<pre class="mt-1">{{ flux.iterator1 }}</pre>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Multiple</h2>

		<XCard>
			<XIterator v-model:value="flux.iterator2">
				<template #default="{ item }">
					<div class="whitespace-nowrap">Deploy a</div>
					<XTextField v-model:value="item.serviceName" invalid="Incorrect entry" />
					<div class="whitespace-nowrap">service to</div>
					<XTextField v-model:value="item.cloudName" />
				</template>
			</XIterator>

			<pre class="mt-1">{{ flux.iterator2 }}</pre>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Max Length</h2>

		<XCard>
			<div class="mb-1">Maximum iterator length: <XCode>5</XCode></div>

			<XIterator v-model:value="flux.iterator3" maxlength="5">
				<template #default="{ item }">
					<XTextField v-model:value="item.address" />
				</template>
			</XIterator>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">In Grid</h2>

		<XCard>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<XTextField label="Name" />
				<div></div>

				<div>
					<div class="mb-2 text-sm font-bold">IP Address</div>

					<XIterator v-model:value="flux.iterator4" inGrid>
						<template #default="{ item }">
							<XTextField v-model:value="item.address" />
						</template>
					</XIterator>
				</div>
				<div></div>
			</div>
		</XCard>
	</section>
</template>
