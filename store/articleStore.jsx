import { observable, action } from 'mobx';
import client from '../CMS/contentfulClient';

class articleStore {
	@observable projectData = []

	@action
	setData() {
		client
			.getEntries({
				content_type: 'work', order:'sys.createdAt'
			})
			.then((response) => {
        this.projectData = response.items
        console.log(response);
			})
			.catch(console.error);
	}
}

export default new articleStore();
