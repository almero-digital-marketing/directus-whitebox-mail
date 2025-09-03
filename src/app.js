export default {
	id: 'whitebox-mail',
	name: 'WhiteBox Mail',
	icon: 'box',
	description: 'Send mail with WiteBox Mail service',
	overview: ({ subject }) => [
		{
			label: 'Mail',
			text: subject,
		},
	],
	options: [
		{
			field: 'token',
			name: 'Token',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'to',
			name: 'To',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'from',
			name: 'From',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'subject',
			name: 'Subject',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'template',
			name: 'Template',
			type: 'text',
			meta: {
				width: 'full',
				interface: 'input-multiline',
				options: {
					font: 'monospace',
				},
			},
		},
		{
			field: 'message',
			name: 'Message',
			type: 'text',
			meta: {
				width: 'full',
				interface: 'input-rich-text-html',
			},
		},
		{
			field: 'data',
			name: 'Data',
			type: 'text',
			meta: {
				width: 'full',
				interface: 'input-multiline',
				options: {
					font: 'monospace',
					placeholder: '$t:any_string_or_json',
				},
			},
		},
	],
};
