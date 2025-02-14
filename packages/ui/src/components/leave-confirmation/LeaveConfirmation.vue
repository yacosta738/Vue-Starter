<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import { useLocale } from 'vue-localer';

import Dialog from '../dialog/Dialog.vue';
import Button from '../button/Button.vue';

const props = defineProps<{
	trigger?: boolean;
}>();

const router = useRouter();
const locale = useLocale();

const triggerRef = computed(() => props.trigger);

const status = ref(false);
const cacheTo = ref<RouteLocationNormalized>();
const confirmed = ref(false);

onBeforeRouteLeave((to) => {
	if (triggerRef.value) {
		cacheTo.value = to;
		status.value = true;
		return confirmed.value;
	}

	return true;
});

async function confirm() {
	confirmed.value = true;
	if (cacheTo.value) await router.push(cacheTo.value.fullPath);
	document.body.style.overflow = 'auto';
}

function onBeforeUnload(evt: Event) {
	if (triggerRef.value) {
		evt.preventDefault();
		evt.returnValue = false;
		return false;
	}
}

onMounted(() => {
	window.addEventListener('beforeunload', onBeforeUnload);
});

onUnmounted(() => {
	window.removeEventListener('beforeunload', onBeforeUnload);
});
</script>

<template>
	<Dialog v-model="status" :title="locale.leaveConfirmationTitle || 'Leave site?'" class="!w-100">
		<div>{{ locale.leaveConfirmationMessage || 'Changes you made may not be saved.' }}</div>

		<div class="mt-8 flex justify-center gap-2">
			<Button :label="locale.cancel || 'Cancel'" color="secondary" @click="status = false" />
			<Button :label="locale.leave || 'Leave'" @click="confirm" />
		</div>
	</Dialog>
</template>
