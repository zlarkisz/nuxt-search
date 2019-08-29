<template>
	<v-card
		width="100%"
		class="mx-auto"
	>
		<v-text-field
			class="mx-4 my-4"
			placeholder="Search"
			label="Search"
			solo-inverted
			loading
			v-model="search"
			@input="debounceMethod">
		<template v-slot:progress>
			<v-progress-linear
				:value="getLoader"
				:indeterminate="getLoading"
				color="red"
				absolute
				height="3">
			</v-progress-linear>
		</template>
	</v-text-field>

		<v-list three-line >
			<template v-for="(item, index) in allCards">
				<v-list-item
					:key="index"
				>
					<v-list-item-avatar>
						<v-img v-if="item && item.image_uris && item.image_uris.normal" :src="item.image_uris.normal"></v-img>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title v-html="item.name"></v-list-item-title>
						<v-list-item-subtitle v-html="item.type_line"></v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</template>
		</v-list>
	</v-card>
</template>

<script>
import { debounce } from "debounce"
import { mapGetters, mapActions } from 'vuex'
export default {
data () {
	return {
	search: '',
	timeout: new Date()
	}
},
methods: {
	...mapActions({
		fetchCards: 'modules/fetchCards'
	}),
	debounceMethod: debounce(function () {
		this.fetchCards(this.search)
	}, 300)
},
computed: {
	...mapGetters({
		allCards: 'modules/allCards',
		getLoader: 'loading/getLoader',
		getLoading: 'loading/getLoading'
	})
}
}
</script>

<style>
	.v-avatar {
		width : 100px !important;
		height : auto !important;
		-webkit-border-radius : 0 !important;
		-moz-border-radius    : 0 !important;
		border-radius         : 0 !important;
	}
</style>
