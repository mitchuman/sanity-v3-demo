import { list } from './helpers'

const AllDocuments = S => S.documentTypeListItems()
	.filter(item => ![
		'client',
	].includes(item.getId()))

export default (S, context) =>
	S.list()
		.title('Content')
		.items([
			list(S, 'Clients', 'client'),

			...AllDocuments(S),
		])
