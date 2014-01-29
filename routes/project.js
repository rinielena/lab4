exports.viewProject = function(req, res) {
	//get the name of the project
	var name = req.params.name;
	console.log("console test");
	console.log("the name of the project is " + name);
	//to view a project, load project.handlebars and display it
	res.render('project', {
		'projectName': name
	});

}