<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import {
	XBreadcrumb,
	XCard,
	XProgressBar,
	XTextField,
	XCheckbox,
	XButton,
	XLeaveConfirmation,
} from '@lyra/ui';
import { isEqual } from '@lyra/utilities';

import useStore from './store';
import useSchema from './schema';

const route = useRoute();

const { state, actions, $reset } = useStore();
const schema = useSchema();

onMounted(() => actions.initial());
onUnmounted(() => $reset());
</script>

<template>
	<XBreadcrumb
		:items="[
			{ text: 'Playground' },
			{ text: 'CRUD Operations', to: '/crud-operations' },
			{ text: route.params.id === 'new' ? 'Add' : 'Edit' },
		]"
	/>

	<h1 class="my-4 text-4xl font-extrabold">
		{{ route.params.id === 'new' ? 'Add' : 'Edit' }}
	</h1>

	<XCard class="relative my-8">
		<XProgressBar v-if="state.todoLoading" class="absolute inset-0" />

		<h2 class="text-3xl font-bold">Todo Info</h2>

		<div class="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
			<XTextField
				v-model:value="state.todoForm.title"
				label="Title"
				required
				:invalid="state.todoValdn.title"
			/>
			<div></div>

			<XCheckbox v-model:value="state.todoForm.completed">Completed</XCheckbox>
		</div>

		<XButton
			v-if="route.params.id === 'new'"
			prepend="i-material-symbols-add-rounded"
			label="Add"
			:loading="state.todoSending"
			@click="schema.validate() && actions.add()"
		/>
		<XButton
			v-else
			prepend="i-material-symbols-save-rounded"
			label="Save"
			:loading="state.todoSending"
			@click="schema.validate() && actions.save()"
		/>
	</XCard>

	<XLeaveConfirmation :trigger="!isEqual(state.todo, state.todoForm) && !state.todoSent" />
</template>
