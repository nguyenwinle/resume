//json javascript object notation//

var bio = {
	'name': 'Nguyen Le',
	'location': 'Sacramento, CA',
	'role': 'Full Stack Engineer',
	'contact': {
		'phone': "916-233-6415",
		'email': 'ucnguyenle@gmail.com',
		'Github': 'www.github.com/nguyenwinle',
		'Website': 'nguyenwinle.github.io',
		'linkedIn': 'www.linkedin.com/nguyenle1990'
		},
	'picture': 'URL',
	'message': 'Welcome',
	'skills': ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'Python', 'SQL']
};




if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill= HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}



