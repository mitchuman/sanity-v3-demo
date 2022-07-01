import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import structure from './desk/structure'
import { schemaTypes } from './schemas'

export default createConfig({
	name: 'default',
	title: 'human-dashboard',

	projectId: 'qh54uodv',
	dataset: 'production',

	plugins: [
		deskTool({
			structure,
		}),
	],

	schema: {
		types: schemaTypes,
	},
})
