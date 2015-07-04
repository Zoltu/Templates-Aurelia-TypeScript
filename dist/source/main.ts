import { ConventionalViewStrategy } from 'aurelia-framework';

ConventionalViewStrategy.convertModuleIdToViewUrl= function(moduleId: any) {
	var id = (moduleId.endsWith('.js') || moduleId.endsWith('.ts'))
		? moduleId.substring(0, moduleId.length - 3)
		: moduleId;
	return id + '.html';
}

export function configure(aurelia: any) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging();

	aurelia.start().then((x: any) => x.setRoot('source/app', document.body));
}
