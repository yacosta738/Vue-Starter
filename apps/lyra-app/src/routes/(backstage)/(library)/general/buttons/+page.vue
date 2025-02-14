<script lang="ts" setup>
import { ref } from 'vue';
import { XBreadcrumb, XButton, XCard, XChip, XPopover, XListbox } from '@lyra/ui';

const searchLoading = ref(false);

function search() {
	searchLoading.value = true;

	setTimeout(() => {
		searchLoading.value = false;
	}, 3000);
}

const buttonGroup = ref(0);
</script>

<template>
	<XBreadcrumb :items="[{ text: 'Library' }, { text: 'General' }, { text: 'Button' }]" />

	<h1 class="my-4 text-4xl font-extrabold">Button</h1>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">Basic</h2>

		<XCard>
			<div class="space-y-4">
				<div class="flex flex-col gap-4 md:flex-row">
					<XButton label="Contained" variant="contained" size="small" />
					<XButton label="Outlined" variant="outlined" size="small" />
					<XButton label="Text" variant="text" size="small" />
				</div>

				<div class="flex flex-col gap-4 md:flex-row">
					<XButton label="Contained" variant="contained" />
					<XButton label="Outlined" variant="outlined" />
					<XButton label="Text" variant="text" />
				</div>

				<div class="flex flex-col gap-4 md:flex-row">
					<XButton label="Contained" variant="contained" size="large" />
					<XButton label="Outlined" variant="outlined" size="large" />
					<XButton label="Text" variant="text" size="large" />
				</div>
			</div>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Icons</h2>

		<XCard>
			<div class="space-y-4">
				<div class="flex flex-col gap-4 md:flex-row">
					<XButton icon="i-material-symbols-add-rounded" size="small" />
					<XButton prepend="i-material-symbols-search-rounded" label="Search" size="small" />
					<XButton label="Next" append="i-material-symbols-arrow-right-alt-rounded" size="small" />
				</div>

				<div class="flex flex-col gap-4 md:flex-row">
					<XButton icon="i-material-symbols-add-rounded" />
					<XButton prepend="i-material-symbols-search-rounded" label="Search" />
					<XButton label="Next" append="i-material-symbols-arrow-right-alt-rounded" />
				</div>

				<div class="flex flex-col gap-4 md:flex-row">
					<XButton icon="i-material-symbols-add-rounded" size="large" />
					<XButton prepend="i-material-symbols-search-rounded" label="Search" size="large" />
					<XButton label="Next" append="i-material-symbols-arrow-right-alt-rounded" size="large" />
				</div>
			</div>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Disabled</h2>

		<XCard>
			<div class="flex flex-col gap-4 md:flex-row">
				<XButton label="Contained" variant="contained" disabled />
				<XButton label="Outlined" variant="outlined" disabled />
				<XButton label="Text" variant="text" disabled />
			</div>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Loading</h2>

		<XCard>
			<div class="space-y-4">
				<XButton
					prepend="i-material-symbols-search-rounded"
					label="Search"
					size="small"
					:loading="searchLoading"
					@click="search"
				/>
				<XButton
					prepend="i-material-symbols-search-rounded"
					label="Search"
					:loading="searchLoading"
					@click="search"
				/>
				<XButton
					prepend="i-material-symbols-search-rounded"
					label="Search"
					size="large"
					:loading="searchLoading"
					@click="search"
				/>
			</div>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Colors</h2>

		<XCard>
			<div class="space-y-4">
				<div class="flex flex-col flex-wrap gap-4 md:flex-row">
					<XButton label="Primary" color="primary" />
					<XButton label="Secondary" color="secondary" />
					<XButton label="Success" color="success" />
					<XButton label="Danger" color="danger" />
					<XButton label="Warning" color="warning" />
					<XButton label="Info" color="info" />
				</div>

				<div class="flex flex-col flex-wrap gap-4 md:flex-row">
					<XButton label="Primary" variant="outlined" color="primary" />
					<XButton label="Secondary" variant="outlined" color="secondary" />
					<XButton label="Success" variant="outlined" color="success" />
					<XButton label="Danger" variant="outlined" color="danger" />
					<XButton label="Warning" variant="outlined" color="warning" />
					<XButton label="Info" variant="outlined" color="info" />
				</div>

				<div class="flex flex-col flex-wrap gap-4 md:flex-row">
					<XButton label="Primary" variant="text" color="primary" />
					<XButton label="Secondary" variant="text" color="secondary" />
					<XButton label="Success" variant="text" color="success" />
					<XButton label="Danger" variant="text" color="danger" />
					<XButton label="Warning" variant="text" color="warning" />
					<XButton label="Info" variant="text" color="info" />
				</div>
			</div>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Template</h2>

		<XCard>
			<XButton variant="outlined">
				Template
				<XChip>5</XChip>
			</XButton>
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Button Group</h2>

		<XCard>
			<div class="grid grid-rows-2 gap-4">
				<XButton.Group>
					<XButton label="Year" />
					<XButton label="Month" />
					<XButton label="Week" />
					<XButton label="Day" />
				</XButton.Group>

				<XButton.Group>
					<XButton label="Year" variant="outlined" />
					<XButton label="Month" variant="outlined" />
					<XButton label="Week" variant="outlined" />
					<XButton label="Day" variant="outlined" />
				</XButton.Group>
			</div>
		</XCard>

		<section class="my-4">
			<h3 class="my-4 pt-2 text-2xl font-semibold">Controlled</h3>

			<XCard>
				<XButton.Group v-model="buttonGroup">
					<XButton label="Year" />
					<XButton label="Month" />
					<XButton label="Week" />
					<XButton label="Day" />
				</XButton.Group>
			</XCard>
		</section>

		<section class="my-4">
			<h3 class="my-4 pt-2 text-2xl font-semibold">Split</h3>

			<XCard>
				<div class="flex justify-end">
					<div>
						<XButton.Group>
							<XButton prepend="i-material-symbols-add-rounded" label="Add" />

							<XPopover>
								<XButton prepend="i-material-symbols-keyboard-arrow-down-rounded" />

								<template #content>
									<XListbox>
										<XListbox.Item>
											<div class="flex items-center gap-2">
												<div class="i-material-symbols-refresh-rounded h-5 w-5"></div>
												<div>Refresh</div>
											</div>
										</XListbox.Item>
										<XListbox.Item>
											<div class="flex items-center gap-2">
												<div class="i-material-symbols-edit-rounded h-5 w-5"></div>
												<div>Edit</div>
											</div>
										</XListbox.Item>
										<XListbox.Item>
											<div class="flex items-center gap-2">
												<div class="i-material-symbols-delete-rounded h-5 w-5"></div>
												<div>Delete</div>
											</div>
										</XListbox.Item>
										<XListbox.Item>
											<div class="flex items-center gap-2">
												<div class="i-material-symbols-upload-rounded h-5 w-5"></div>
												<div>Upload</div>
											</div>
										</XListbox.Item>
									</XListbox>
								</template>
							</XPopover>
						</XButton.Group>
					</div>
				</div>
			</XCard>
		</section>
	</section>
</template>
