<script lang="ts" setup>
import { XBreadcrumb, XCard, XDropdown, XButton } from '@lyra/ui';
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Library' }, { text: 'Navigation' }, { text: 'Dropdown' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Dropdown</h1>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">Basic</h2>

		<XCard>
			<XDropdown :options="['Action', 'Another action', '', 'Something else here']">
				<XButton label="Button" />
			</XDropdown>
		</XCard>
	</section>

	<div class="h-72"></div>

	<XCard>
		<div class="flex flex-col gap-16">
			<div class="flex justify-between">
				<XDropdown
					v-for="num in 4"
					:key="num"
					:options="['Action', 'Another action', '', 'Something else here']"
				>
					<XButton label="Button" />
				</XDropdown>
			</div>

			<div class="flex justify-center">
				<XDropdown :options="['Action', 'Another action', '', 'Something else here']">
					<div class="bg-primary-500 h-20 w-20 rounded-lg"></div>
				</XDropdown>
			</div>

			<div class="flex justify-center gap-4 lg:gap-6">
				<XDropdown
					v-for="num in 8"
					:key="num"
					:options="['Action', 'Another action', '', 'Something else here']"
				>
					<div class="bg-primary-500 flex h-20 w-20 items-center justify-center rounded-lg">
						{{ num }}
					</div>
				</XDropdown>
			</div>

			<div class="flex justify-center gap-4 lg:gap-6">
				<XDropdown
					v-for="num in 2"
					:key="num"
					:options="['Action', 'Another action', '', 'Something else here']"
				>
					<div class="w-50 h-50 bg-primary-500 rounded-lg"></div>
				</XDropdown>
			</div>
		</div>
	</XCard>

	<div class="h-72"></div>
</template>
