<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { XCollapse } from '@lyra/ui';
import { useTextDirection } from '@vueuse/core';

import type { Link } from './links-list';
import useStore from './store';

withDefaults(
	defineProps<{
		icon?: Link['icon'];
		name?: Link['name'];
		to?: Link['to'];
		permissions?: Link['permissions'];
		sub?: Link[];
		level?: number;
		role?: 'A' | 'B' | 'C' | 'D' | 'E' | undefined;
		status?: boolean;
	}>(),
	{
		icon: '',
		name: '',
		to: '',
		permissions: undefined,
		sub: () => [],
		level: 1,
		role: undefined,
	}
);

const route = useRoute();
const textDirection = useTextDirection({ observe: true });

const { actions } = useStore();

const flux = reactive({
	parent(sub: Link['sub']): any {
		return sub?.find((link) => {
			if (link.sub) return flux.parent(link.sub);

			if (link.to === route.path) {
				return true;
			} else if (link.to && route.path.startsWith(link.to)) {
				return true;
			}

			return false;
		});
	},
	currentLink(to: Link['to']) {
		if (!to) return false;

		const toArr = to.split('/');
		const curArr = route.path.split('/');

		if (toArr.length === curArr.length) {
			return to === route.path;
		}

		return route.path.startsWith(to);
	},
});

const hasPermission = true; // props?.permissions?.includes(getters.currentRole) !== false;
</script>

<template>
	<span v-if="!hasPermission" class="hidden"></span>

	<div
		v-else-if="sub.length"
		class="link"
		:class="{
			'link-parent': flux.parent(sub),
			'link-current': to === route.path,
		}"
		:style="[
			textDirection === 'rtl'
				? { 'padding-right': `${level}rem` }
				: { 'padding-left': `${level}rem` },
		]"
		@click.stop="actions.changeStatus(name, level)"
	>
		<div v-if="icon" :class="icon" class="h-6 w-6 ltr:mr-2 rtl:ml-2"></div>
		<div class="flex-1" :class="{ 'ltr:pl-4 rtl:pr-4': level !== 1 }">{{ name }}</div>
		<div v-if="!status" class="i-ic-baseline-arrow-drop-down h-6 w-6"></div>
		<div v-if="status" class="i-ic-baseline-arrow-drop-up h-6 w-6"></div>
	</div>

	<RouterLink
		v-else-if="to"
		:to="to"
		class="link"
		:class="{
			'link-parent': flux.parent(sub),
			'link-current': flux.currentLink(to),
		}"
		:style="[
			textDirection === 'rtl'
				? { 'padding-right': `${level}rem` }
				: { 'padding-left': `${level}rem` },
		]"
	>
		<div v-if="icon" :class="icon" class="h-6 w-6 ltr:mr-2 rtl:ml-2"></div>
		<div class="flex-1" :class="{ 'ltr:pl-4 rtl:pr-4': level !== 1 }">{{ name }}</div>
	</RouterLink>

	<div v-else class="mt-4 px-4 py-2 text-sm font-bold uppercase text-slate-400 dark:text-slate-500">
		{{ name }}
	</div>

	<XCollapse>
		<div v-show="sub.length && status">
			<NavLink
				v-for="(item, index) in sub"
				:key="index"
				:name="item.name"
				:to="item.to"
				:permissions="item.permissions"
				:sub="item.sub"
				:level="item.level"
				:role="role"
				:status="item.status"
			/>
		</div>
	</XCollapse>
</template>

<style lang="scss" scoped>
.link {
	@apply mb-1 flex cursor-pointer rounded-md px-4 py-2;
	@apply hover:text-primary-500 hover:bg-primary-100;
	@apply dark:hover:text-primary-100 dark:hover:bg-primary-600;

	&-parent {
		@apply text-primary-500 font-bold;
	}

	&-current {
		@apply font-bold;
		@apply text-primary-500 dark:text-primary-200 bg-primary-200 dark:bg-primary-700;
	}
}
</style>
