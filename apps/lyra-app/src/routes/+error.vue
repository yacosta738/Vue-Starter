<script lang="ts" setup>
import { reactive, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { XButton } from '@lyra/ui';

const router = useRouter();
const route = useRoute();

const message = reactive({
	statusCode: '404',
	title: 'Not Found',
	description: `Sorry, we couldn't find this page.`,
});

const backToHomepage = () => {
	router.replace('/');
};

onBeforeMount(() => {
	if (route.query.code === '403') {
		message.statusCode = '403';
		message.title = 'Access Denied';
		message.description = `Sorry, but you don't have permission to access this page.`;
	}

	if (route.query.code === '500') {
		message.statusCode = '500';
		message.title = 'Internal Server Error';
		message.description = `Sorry, we are already working to solve the problem.`;
	}
});
</script>

<template>
	<div class="flex h-full min-h-screen items-center justify-center p-8 md:p-16">
		<div class="container mx-auto flex flex-col items-center justify-center px-5">
			<div class="mx-auto max-w-screen-sm text-center">
				<div class="Error-StatusCode">{{ message.statusCode }}</div>
				<div class="Error-Title">{{ message.title }}</div>
				<div class="Error-Description">{{ message.description }}</div>

				<div class="flex justify-center">
					<XButton @click="backToHomepage">Back to Homepage</XButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.Error-StatusCode {
	@apply text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl;
}

.Error-Title {
	@apply mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white;
}

.Error-Description {
	@apply mb-4 text-lg font-light text-gray-500 dark:text-gray-400;
}
</style>
