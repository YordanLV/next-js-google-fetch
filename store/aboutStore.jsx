import { observable, action } from 'mobx';
import client from '../CMS/contentfulClient';

class aboutStore {
	@observable data = [];
	@observable aboutName = null;
	@observable aboutDescription = null;

	@action
	setData() {
		client
			.getEntries({
				content_type: 'about'
			})
			.then((response) => {
        this.aboutName = response.items[0].fields.title,
        this.aboutDescription = response.items[0].fields.content
			})
			.catch(console.error);
	}
}

export default new aboutStore();
