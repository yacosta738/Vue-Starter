<script lang="ts" setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { XBreadcrumb, XTable, XTooltip, XButton, XChip, XDialog, XTextField } from '@lyra/ui';
import { request } from '@lyra/ui';

const router = useRouter();
const route = useRoute();

const loading = ref(false);
const users = ref<any[]>([]);
const total = ref(0);

const flux = reactive({
	userDialog: false,
	addUser() {
		router.push('/user-list/new');
		flux.userForm = {};
	},
	userForm: {} as any,
	async viewUser(user: any) {
		const response = await request<any>(`/user-list/${user._id}`, { method: 'GET' });
		router.push(`/user-list/${response._data.result._id}`);
		flux.userForm = response._data.result;
	},
});

watch(
	() => flux.userDialog,
	(val) => {
		if (!val) {
			router.push('/user-list');
		}
	}
);

watch(
	() => route.params.id,
	(val) => {
		flux.userDialog = Boolean(val);
	},
	{ immediate: true }
);

onMounted(async () => {
	loading.value = true;
	const response = await request<any>('/user-list', { method: 'POST', body: {} });
	loading.value = false;
	users.value = response._data.result;
	total.value = response._data.total;
});
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Management' }, { text: 'Users' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Users</h1>

	<div class="w-full rounded-md bg-white shadow dark:bg-slate-800">
		<div class="flex justify-between p-4 lg:p-6">
			<h2 class="text-3xl font-bold">User List</h2>
			<XButton prepend="i-material-symbols-add-rounded" label="Add" @click="flux.addUser" />
		</div>

		<XTable
			:columns="[
				{ key: 'username', name: 'Username' },
				{ key: 'fullName', name: 'Full Name' },
				{ key: 'email', name: 'Email' },
				{ key: 'status', name: 'Status' },
				{ key: 'actions', name: 'Actions', sortable: false },
			]"
			:loading="loading"
			:rows="users"
			:count="total"
		>
			<template #status="{ row }">
				<XChip
					:color="
						row.status ? (!row.otpEnabled || !row.otpVerified ? 'warning' : 'success') : 'danger'
					"
					>{{
						row.status ? (!row.otpEnabled || !row.otpVerified ? 'Pending' : 'Active') : 'Suspended'
					}}</XChip
				>
			</template>

			<template #actions="{ row }">
				<div class="flex gap-2">
					<XTooltip title="Edit">
						<XButton
							icon="i-mdi-edit"
							variant="text"
							color="info"
							size="small"
							@click="flux.viewUser(row)"
						/>
					</XTooltip>

					<XTooltip v-if="row.status" title="Suspend">
						<XButton
							icon="i-mdi-user-block"
							variant="text"
							color="danger"
							size="small"
							@click="flux.viewUser(row)"
						/>
					</XTooltip>
					<XTooltip v-else title="Active">
						<XButton
							icon="i-mdi-user-check"
							variant="text"
							color="success"
							size="small"
							@click="flux.viewUser(row)"
						/>
					</XTooltip>

					<XTooltip title="Authentication">
						<XButton
							icon="i-mdi-user-access-control"
							variant="text"
							color="warning"
							size="small"
							@click="flux.viewUser(row)"
						/>
					</XTooltip>
				</div>
			</template>
		</XTable>
	</div>

	<XDialog v-model="flux.userDialog" class="!w-md">
		<div class="grid">
			<div class="mb-4 text-xl font-bold">Add User</div>

			<form class="mb-8 space-y-5">
				<XTextField v-model:value="flux.userForm.username" required>Username</XTextField>
				<XTextField v-model:value="flux.userForm.email" required>Email</XTextField>
				<XTextField v-model:value="flux.userForm.fullName" required>Full Name</XTextField>
			</form>

			<div class="flex justify-end gap-4">
				<XButton variant="outlined" color="secondary" @click="flux.userDialog = false">
					Cancel
				</XButton>
				<XButton>Add</XButton>
			</div>
		</div>
	</XDialog>
</template>
