export default {
	name: 'client',
	type: 'document',
	groups: [
		{ name: 'info', title: 'Info' },
	],
	fields: [
		{
			name: 'name',
			type: 'object',
			group: 'info',
			fields: [
				{ name: 'full', type: 'string', },
				{ name: 'short', type: 'string', },
			],
		},
		{
			name: 'sites',
			type: 'array',
			of: [{ type: 'url' }],
			group: 'info',
		},
		{
			name: 'tech',
			title: 'Tech stack',
			type: 'array',
			of: [{
				type: 'reference',
				to: [{ type: 'tech' }],
			}],
			group: 'info',
		}
	],
	preview: {
		select: {
			name: 'name',
		},
		prepare({ name }) {
			return {
				title: name.full,
				media: () => <span style={{ fontFamily: 'monospace' }}>{name.short}</span>,
			}
		},
	},
	orderings: [
		{
			title: 'Name',
			name: 'name',
			by: [{ field: 'name.full', direction: 'asc' }],
		},
	]
}
