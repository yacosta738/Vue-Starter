<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { XBreadcrumb, XCard, XDatePicker, XDateRangePicker, XSwitch, XButton } from '@lyra/ui';
import { subDays, addDays, startOfMonth, subMonths, startOfYear, subYears, format } from 'date-fns';

const flux = reactive({
	datePicker: '',
	datePickerStartDate: '',
	datePickerEndDate: '',
});

const minDate = ref(true);
const maxDate = ref(true);

function setHistorical(historical: string) {
	const today = new Date();

	flux.datePickerEndDate = format(subDays(today, 1), 'yyyy/MM/dd');

	if (historical === '7D') {
		flux.datePickerStartDate = format(subDays(today, 7), 'yyyy/MM/dd');
	}

	if (historical === '14D') {
		flux.datePickerStartDate = format(subDays(today, 14), 'yyyy/MM/dd');
	}

	if (historical === 'MTD') {
		flux.datePickerStartDate = format(startOfMonth(today), 'yyyy/MM/dd');
	}

	if (historical === '1M') {
		flux.datePickerStartDate = format(subMonths(today, 1), 'yyyy/MM/dd');
	}

	if (historical === '3M') {
		flux.datePickerStartDate = format(subMonths(today, 3), 'yyyy/MM/dd');
	}

	if (historical === '6M') {
		flux.datePickerStartDate = format(subMonths(today, 6), 'yyyy/MM/dd');
	}

	if (historical === 'YTD') {
		flux.datePickerStartDate = format(startOfYear(today), 'yyyy/MM/dd');
	}

	if (historical === '1Y') {
		flux.datePickerStartDate = format(subYears(today, 1), 'yyyy/MM/dd');
	}
}
</script>

<template>
	<XBreadcrumb
		:items="[
			{ text: 'Library' },
			{ text: 'Data Entry' },
			{ text: 'Pickers' },
			{ text: 'DatePicker' },
		]"
	/>

	<h1 class="my-4 text-4xl font-extrabold">DatePicker</h1>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">Basic</h2>

		<XCard>
			<XDatePicker v-model:value="flux.datePicker" />
		</XCard>
	</section>

	<section class="my-8">
		<h2 class="my-4 text-3xl font-bold">Min/Max Date</h2>

		<XCard>
			<XDatePicker
				v-model:value="flux.datePicker"
				:minDate="subDays(new Date(), 1)"
				:maxDate="addDays(new Date(), 6)"
			/>

			<div class="mt-1">
				<div>Min Date: {{ format(subDays(new Date(), 1), 'yyyy-MM-dd') }}</div>
				<div>Max Date: {{ format(addDays(new Date(), 6), 'yyyy-MM-dd') }}</div>
			</div>
		</XCard>

		<section class="my-4">
			<h3 class="my-4 pt-2 text-2xl font-semibold">Min</h3>

			<XCard>
				<XDatePicker v-model:value="flux.datePicker" :minDate="subDays(new Date(), 1)" />

				<div class="mt-1">
					<div>Min Date: {{ format(subDays(new Date(), 1), 'yyyy-MM-dd') }}</div>
				</div>
			</XCard>
		</section>

		<section class="my-4">
			<h3 class="my-4 pt-2 text-2xl font-semibold">Max</h3>

			<XCard>
				<XDatePicker v-model:value="flux.datePicker" :maxDate="addDays(new Date(), 6)" />

				<div class="mt-1">
					<div>Max Date: {{ format(addDays(new Date(), 6), 'yyyy-MM-dd') }}</div>
				</div>
			</XCard>
		</section>
	</section>

	<section class="my-8">
		<h2 class="my-4 pt-6 text-3xl font-bold">Range</h2>

		<XCard>
			<XDateRangePicker
				v-model:startValue="flux.datePickerStartDate"
				v-model:endValue="flux.datePickerEndDate"
			/>

			<div class="mt-1">
				<div>Start Date: {{ flux.datePickerStartDate }}</div>
				<div>End Date: {{ flux.datePickerEndDate }}</div>
			</div>
		</XCard>

		<section class="my-4">
			<h3 class="my-4 pt-2 text-2xl font-semibold">Min/Max Date</h3>

			<XCard>
				<XDateRangePicker
					v-model:startValue="flux.datePickerStartDate"
					v-model:endValue="flux.datePickerEndDate"
					:minDate="minDate ? subDays(new Date(), 1) : undefined"
					:maxDate="maxDate ? addDays(new Date(), 6) : undefined"
					clearable
				/>

				<div class="mt-1 space-y-1">
					<XSwitch v-model:value="minDate">
						Min Date: {{ format(subDays(new Date(), 1), 'yyyy-MM-dd') }}
					</XSwitch>
					<XSwitch v-model:value="maxDate">
						Max Date: {{ format(addDays(new Date(), 6), 'yyyy-MM-dd') }}
					</XSwitch>
				</div>
			</XCard>
		</section>

		<section class="my-4">
			<h3 class="my-4 pt-2 text-2xl font-semibold">Template</h3>

			<XCard>
				<XDateRangePicker
					v-model:startValue="flux.datePickerStartDate"
					v-model:endValue="flux.datePickerEndDate"
					:maxDate="subDays(new Date(), 1)"
					clearable
				>
					<template #panel>
						<div class="mt-1 border-t border-gray-200 dark:border-gray-700">
							<div class="my-1 text-sm font-medium">Historical</div>

							<div class="grid grid-cols-4 gap-1">
								<XButton
									v-for="historical in ['7D', '14D', 'MTD', '1M', '3M', '6M', 'YTD', '1Y']"
									:key="historical"
									:label="historical"
									variant="text"
									color="secondary"
									size="small"
									class="!px-0 !py-1"
									@click="setHistorical(historical)"
								/>
							</div>
						</div>
					</template>
				</XDateRangePicker>

				<div class="mt-1">
					<div>Start Date: {{ flux.datePickerStartDate }}</div>
					<div>End Date: {{ flux.datePickerEndDate }}</div>
				</div>
			</XCard>
		</section>
	</section>
</template>
