import axios from 'axios'

export default {
	id: 'whitebox-mail',
	handler: async ({ to, from, subject, message, template, token, data }) => {
        const url = `https://mail.whitebox.pro/api/send/`
		if(template?.indexOf('http') == 0) {
			// If template is a URL, fetch the template content
			try {
				const response = await axios.get(template);
				template = response.data;
			} catch (error) {
				throw new Error('Failed to fetch template from URL: ' + error.message);
			}
		}
		data = data || {}
		if (typeof data === 'string') {
			data = JSON.parse(data)
		}
		const emails = to.split(';').map(email => email.trim()).filter(email => email);
		for (let to of emails) {
			await axios.post(url, {
				to, 
				from: from || data.from,
				subject: subject || data.subject || '',
				message: message || data.message || '',
				template: template || data.template || undefined,
				context: {
					...data,
					message
				},
			}, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
		}
	},
};
