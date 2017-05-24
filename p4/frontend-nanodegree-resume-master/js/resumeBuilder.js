var bio={
 	"name":"Zhang Hao",
 	"role":"Web Developer",
 	"welcomeMessage":"hello.",
 	"biopic":"images/fry.jpg",
 	"contact":{
 		"github":"lnfszhanghao",
 		"email":"21514064@zju.edu.cn",
 		"location":"Hangzhou",
 		"twitter":"@holt_forest",
 		"mobile":"18268801811"
 	},
 	"skills":["awesomeness","html","css","javascript"]
 }

bio.display=function(){
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);//不懂为什么不直接写在html里，而是通过helper.js的方式
var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);
var formattedmobile=HTMLmobile.replace("%data%",bio.contact.mobile);
$("#topContacts").append(formattedmobile);
var formattedemail=HTMLemail.replace("%data%",bio.contact.email);
$("#topContacts").append(formattedemail);
var formattedgithub=HTMLgithub.replace("%data%",bio.contact.github);
$("#topContacts").append(formattedgithub);
var formattedtwitter=HTMLtwitter.replace("%data%",bio.contact.twitter);
$("#topContacts").append(formattedtwitter);
var formattedlocation=HTMLlocation.replace("%data%",bio.contact.location);
$("#topContacts").append(formattedlocation);
var formattedwelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedwelcomeMsg);
var formattedbioPic=HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedbioPic);

if(bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}
}
bio.display();

function inName(name){
    var holt=name.trim().split(" ");
    holt[1]=holt[1].toUpperCase();
    holt[0]=holt[0].slice(0,1).toUpperCase()+holt[0].slice(1).toLowerCase();
    finalName=holt.join(" ");
    return finalName;}

var work={
	"jobs":[
{   "employer":"Getui",
	"title":"Web Developer",
	"location":"Hangzhou",
	"dates":"2016.12-now",
	"description":"Web Developer in html、css、js"
},
{   "employer":"CESPN",
	"title":"Operation Specialist",
	"location":"Online",
	"dates":"2016.01-07",
	"description":"维护运营微信公众号、微博"
},
{   "employer":"Getui",
	"title":"Data Analyst",
	"location":"Hangzhou",
	"dates":"2016.07-08",
	"description":"Mapreduce"
}]
};

work.display=function(){
for(var j=0;j<work.jobs.length;j++){
  $("#workExperience").append(HTMLworkStart);//不懂为什么加start,虽然不添加此项之后的出不来效果
  var formattedworkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
  var formattedworkTitle=HTMLworkTitle.replace("%data%",work.jobs[j].title);
  var formattedworkEmployerTitle=formattedworkEmployer+formattedworkTitle;
  $(".work-entry:last").append(formattedworkEmployerTitle);//好像只看到一个work-entry类，为什么不加last会出现重复问题
  var formattedworkDates=HTMLworkDates.replace("%data%",work.jobs[j].dates);
  $(".work-entry:last").append(formattedworkDates);//不添加description时为什么就不在一行了
  var formattedworkDescription=HTMLworkDescription.replace("%data%",work.jobs[j].description);
  $(".work-entry:last").append(formattedworkDescription);
  
};
}
work.display();

var education={
	"schools":[
	{
		"names":"ZJU",
		"location":"Hangzhou",
		"degree":"Masters",
		"major":["environmental engineering"],
		"dates":"2018",
		"url":"www.zju.edu.cn"
	},
	{
		"names":"ZZU",
		"location":"Zhengzhou",
		"degree":"BA",
		"major":["environmental science"],
		"dates":"2015",
		"url":"www.zzu.edu.cn"
	}],
	"onlineCourses":[
	{	"title":"Web Developer",
		"school":"Udacity",
		"dates":"2016.07",
		"url":"https://cn.udacity.com"
	},
	{
		"title":"Machine Learning",
		"school":"Udacity",
		"dates":"2016.01",
		"url":"https://cn.udacity.com"
	}
	]
};

education.display=function(){
for(var j=0;j<education.schools.length;j++){
  $("#education").append(HTMLschoolStart);
  var formattedschoolName=HTMLschoolName.replace("%data%",education.schools[j].names);
  var formattedschoolDegree=HTMLschoolDegree.replace("%data%",education.schools[j].degree);
  var formattedschoolNameDegree=formattedschoolName+formattedschoolDegree;
  $(".education-entry:last").append(formattedschoolNameDegree);
  var formattedschoolDates=HTMLschoolDates.replace("%data%",education.schools[j].dates);
  $(".education-entry:last").append(formattedschoolDates);
  var formattedschoolMajor=HTMLschoolMajor.replace("%data%",education.schools[j].major);
  $(".education-entry:last").append(formattedschoolMajor);
};
$(".education-entry:last").append(HTMLonlineClasses);
for(var i=0;i<education.onlineCourses.length;i++){  
  var formattedonlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
  var formattedonlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
  var formattedonlineTitleSchool=formattedonlineTitle+formattedonlineSchool;
  $(".education-entry:last").append(formattedonlineTitleSchool);
  var formattedonlineDates=HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
  $(".education-entry:last").append(formattedonlineDates);
  var formattedonlineURL=HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
  $(".education-entry:last").append(formattedonlineURL);
};
}
education.display();

var project={
	"project":[
	{
		"title":"Uda-FEND",
		"dates":"2016-2017",
		"description":"fend-end",
		"images":"images/rabbit.jpg"
	},
	{
		"title":"Uda-FEND",
		"dates":"2016-2017",
		"description":"fend-end",
		"images":"images/jiangren.jpg"	
	}]
	};

project.display=function(){
for(var i=0;i<project.project.length;i++){
  $("#projects").append(HTMLprojectStart);
  var formattedTitle=HTMLprojectTitle.replace("%data%",project.project[i].title);
  var formattedDates=HTMLprojectDates.replace("%data%",project.project[i].dates);
  var formattedDescription=HTMLprojectDescription.replace("%data%",project.project[i].description);
  var formattedImage=HTMLprojectImage.replace("%data%",project.project[i].images);
  $(".project-entry:last").append(formattedTitle);
  $(".project-entry:last").append(formattedDates);
  $(".project-entry:last").append(formattedDescription);
  $(".project-entry:last").append(formattedImage);
};
}
project.display();

$("#main").append(internationalizeButton)
$("mapDiv").append(googleMap);


