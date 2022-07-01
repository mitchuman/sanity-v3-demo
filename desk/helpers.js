export const singleton = (S, title, id, views = []) => S.listItem()
	.title(title)
	.child(
		S.document()
			.schemaType(id)
			.documentId(id)
			.views([
				S.view.form(),
				...views,
			])
	)

export const list = (S, title, id) =>
	S.documentTypeListItem(id)
		.title(title)

export const group = (S, title, list) => S.listItem()
	.title(title)
	.child(
		S.list()
			.title(title)
			.items(list)
	)
