/* Bio object */
var bio = {
    "name":"Nguyen Le",
    "role":"Full Stack Engineer",
    "contacts":{
        "mobile": "916-233-6415",
        "email": "ucnguyenle@gmail.com",
        "github": "www.github.com/nguyenwinle",
        "website": "nguyenwinle.github.io",
        "linkedIn": "www.linkedin.com/nguyenle1990",
        "location" : "Sacramento, CA"
    },
    "welcomeMessage": "I am currently a Udacity student pursuing a career as a Full Stack Web Developer!",
    "skills": ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'Python', 'SQL'],
    "pic": "images/me.jpg"
};

/* Work object */
var work = {
    "jobs": [{
            "name": "Dealertrack Technologies",
            "position": "Collateral Specialist",
            "location": "Sacramento, CA",
            "date": "April 2015 - June 2016",
            "description": "Managed client accounts utilizing company programs for research and provided excellent and accurate data entry to assist client in protecting their customers’ accounts. Worked as a team to prepare, process, and file all paperwork for finance and refinance accounts which effectively minimized department workload by over fifty percent. Analyzed, reviewed, and performed audits on documents and processed data which increased ability to be attentive to detail. Participated in team meetings sharing ideas to improve process performance by identifying innovative solutions to problems with company software and the lien placement process."
        },

        {
            "name": "Dealertrack Technologies",
            "position": "Front Desk Attendant",
            "location": "Sacramento, CA",
            "date": "September 2015 - June 2016",
            "description": "Assisted the front desk when needed. Directed outgoing calls to different departments for interviewees, food deliveries, and meetings. Answered phone calls and directed customers / lenders to proper departments."
        }
    ]

};

/* Projects object */
var projects = {
    "projects": [{
        "title": "One-Page Parallax Website",
        "description": "Designed a one page parallax website using HTML, CSS, Javascript, and Bootstrap and jQuery frameworks. The navigation allows for a smooth transition within the page.",
        "image": "http://placehold.it/200/200"
    },

    {
        "title": "Multi-User Tournament",
        "description": "Built a multi-user blog application with a signup and login page that allows for registered users to add, edit, and delete their blog posts/comments and also, like other registered user’s blog posts. Application is running on google app engine using the following languages: HTML5, CSS3, Python, Jinja (python template engine inspired by Django’s templating system), and some SQL to store data. The Hashlib python module is implemented into the application using the sha256() constructor to secure usernames and passwords.",
        "image": "http://placehold.it/200/200"
    },

    {
        "title": "Tournament Results",
        "description": "Created a database schema using SQL, PostgreSQL, and Python modules that determines the winner of a Swiss Tournament. Learned how to use a virtual machine called Virtual Box that is required  to run the Swiss Tournament application.",
                "image": "http://placehold.it/200/200"
}
    ]
};

/* education object */
var education = {
    "schools": [{
        "name": "University of Santa Barbara",
        "major": "Sociology",
        "degree": "Bachelor of Arts",
        "location": "Santa Barbara, CA",
        "date": "Dec 2013"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "Full Stack Web Developer",
        "date": "Current",
        "url": "www.udacity.com"
    }]
};




/* heading title */
var formattedRole = HTMLheaderRole.replace('%data%', bio["role"]);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace('%data%', bio["name"]);
$("#header").prepend(formattedName);


var formattedMobile= HTMLmobile.replace('%data%', bio.contacts["mobile"]);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace('%data%', bio.contacts["email"]);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace('%data%', bio.contacts["github"]);
$("#topContacts").append(formattedGithub);

var formattedBlog =HTMLblog.replace('%data%', bio.contacts["website"]);
$("#topContacts").append(formattedBlog);

var image = HTMLbioPic.replace('%data%', bio.pic);
$('#header').append(image);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

/* footer contacts */
var formattedMobile= HTMLmobile.replace('%data%', bio.contacts["mobile"]);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace('%data%', bio.contacts["email"]);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace('%data%', bio.contacts["github"]);
$("#footerContacts").append(formattedGithub);

var formattedBlog =HTMLblog.replace('%data%', bio.contacts["website"]);
$("#footerContacts").append(formattedBlog);


projects.display = function() {
    if(projects.projects.length > 0) {

        $("#projects").append(HTMLprojectStart);

        for (i in projects.projects) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].date);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);

            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);
            $('.project-entry:last').append(formattedImage);
        }
}

};

projects.display();

function displaySkills() {
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

    formattedSkill= HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
}
};

displaySkills();


//display work
function displayWork() {
    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].name);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].date);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }
}
    };

displayWork();


education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {

        for (i in education["schools"]) {

            $("#education").append(HTMLschoolStart);


            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
            var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            var formattedS = formattedSchool + formattedDegree;

            $(".education-entry").append(formattedS);
            $(".education-entry").append(formattedDates);
            $(".education-entry").append(formattedLoc);
            $(".education-entry").append(formattedMajor);

        }
    }

        if(education.onlineCourses.length > 0) {

            $("#education").append(HTMLonlineClasses);

            for(i in education.onlineCourses) {

                $("#education").append(HTMLschoolStart);

                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);

    }
}

};

education.display();




// $('#main').append(internationalizeButton);



// var n = "Nguyen Le";
// function inName(name) {

//     var newname = name.split(" ");
//     var cap = newname[1].toUpperCase();
//     newname[0].join(cap);

//     return newname;
// };

// inName(n);

var displayMap = function() {
    // add #mapDiv
    $("#mapDiv").append(googleMap);
};

displayMap();



