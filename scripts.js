/* Looking forward to when I am a good enough coder that I can add easter eggs here */
/* Here are some variables that are relevant to my research on Vietnamese refugees in China */

var Refugees_resettled_in_USA_1975 = 140000;
/* The number of Vietnamese resettled in Vietnam after Saigon fell in 1975 */

var Country_of_origin = "Vietnam";
/* Where this refugee crisis originated */

var Ongoing_refugee_situation = false;
/* This is no longer an active refugee crisis; most persons have been resettled or returned to Veitnam */

var Resettled_pops_by_country = {
	"Vietnam" : 750000,
	"Cambodia" : 225000,
	"Laos" : 310000
};
/* The number of people resettled, by country of origin, from 1975 through 1997 */

var Receiving_camps = ["Hong Kong", "Liguang", "Dongxing", "Beihai", "Qiaogang"];
/* The names of the main refugee receiving camps in China */

var Vietnamese_refugee_crisis_overview = {
	"Refugees_by_year" : {
		"1980" : 33000,
		"1996" : 34400
	},
	"Returnees_by_year" : {
		"1980" : 50760,
		"1996" : 25360
	},
	"Refugee ethnic populations" : ["Han Chinese", "Vietnamese", "Laotian", "Cambodian"],
	"Countries of first asylum" : ["Thailand", "Singapore", "Malaysia", "Indonesia", "Philippines", "China"],
	"Stateless_Vietnamese_2017" : 11000
};
/* Refugees and returnees by year; the ethnic origins of refugee populations caught up in the crisis; and the
 countries where those refugees first fled, before being resettled in a third country or returned home */

/* This is a list of objects; each object is an article.
 An article object contains information about the headline, source, publication date, and publication city
 of an article, along with links to the article, a descriptive image and a synopsis */
var kjm_Vietnam_refugees_explainer = [{
	"head" : "Almost home",
	"publication" : "The Economist",
	"publication_date" : "Oct. 10, 2015",
	"publication_city" : "QIAOGANG, GUANGXI PROVINCE",
	"article_link" : "http://www.economist.com/news/china/21672335-china-has-successfully-absorbed-many-refugees-vietnam-it-ill-prepared-another",
	"image_link" : "http://cdn.static-economist.com/sites/default/files/imagecache/full-width/images/print-edition/20151010_CNP001_0.jpg",
	"synopsis" : "In the late 1970s, as an exodus of refugees began in Vietnam, some 300,000 ethnic Han people crossed from Vietnam into southern China. Unlike refugees from other countries, these people were largely welcomed in China, and were provided with housing and jobs. While tensions do exist between the refugees and their Chinese hosts, who still command higher paying work and live in more modern apartments,relations between the groups is largely peaceful. The integration of the Han Vietnamese, however, is an exception to China's standard refugee policy; the country consistently rebuffs refugees from neighboring Burma, for ethnic reasons, and North Korea, for political ones."
}, {
	"head" : "Turning Away of Boat People Mars Improved Refugee Situation",
	"publication" : "Washington Post",
	"publication_date" : "Feb. 3, 1984",
	"publication_city" : "BANGKOK",
	"article_link" : "http://www.lexisnexis.com.ezproxy.cul.columbia.edu/lnacui2api/auth/checkbrowser.do;jsessionid=B12931E526CB718318A66410E7BA9065.mIchf4wVosSETSf9WtB0lQ?ipcounter=1&cookieState=0&rand=0.3089198445521282&bhjs=1&bhqs=1",
	"image_link" : "https://upload.wikimedia.org/wikipedia/commons/c/c6/35_Vietnamese_boat_people_2.JPEG",
	"synopsis" : "As more Vietnamese took to the seas, their arrivals in countries around the South China Sea strained developing countries' resources. Stories began to circulate of authorities pushing migrants and refugees back into the ocean.  This contrasted with the relative success of the UN-sponsored Orderly Departure Program, put in place in 1979.  While this program gave people a 'legal' way to leave Vietnam, tens of thousands of migrants and refugees continued to get into boats through the early 1980's."
}, {
	"head" : "U.N. Links G.O.P. to Boat People's Riots",
	"publication" : "New York Times",
	"publication_date" : "May 23, 1995",
	"publication_city" : "BANGKOK",
	"article_link" : "http://www.nytimes.com/1995/05/24/world/un-links-gop-to-boat-people-s-riots.html",
	"image_link" : "https%3A%2F%2Fwww.scmp.com%2Fsites%2Fdefault%2Ffiles%2F2015%2F08%2F09%2Fa3c06d6b4e1f7f10006bcd8ece467013.jpg&f=1",
	"synopsis" : "In 1995, as Vietnam stabilized and Hong Kong prepared to return refugees to their home country,Congressional Republicans drafted legislation that would have granted asylum to an additional tranche of refugees.  Vietnamese refugees in Hong Kong, eager to move to the United States, rioted, in an attempt to stop their return to Vietnam."
}, {
	"head" : "75 Boat People Flown Home in Effort to Reverse Tide",
	"publication" : "New York Times",
	"publication_date" : "Mar. 2, 1989",
	"publication_city" : "HONG KONG",
	"article_link" : "http://www.nytimes.com/1989/03/03/world/75-boat-people-flown-home-in-effort-to-reverse-tide.html",
	"image_link" : "https%3A%2F%2Fc2.staticflickr.com%2F8%2F7155%2F6476338783_834f0ba531_b.jpg&f=1",
	"synopsis" : "In 1989, a decade after most refugees fled, China and the UNHCR made the first attempts at voluntary repatriation of refugees and migrants to their home country.  During the previous year, China changed their Vietnamese refugee policy, evaluating each individual's refugee claims on a case-by-case basis, rather than granting them refugee status as a complete class. Those who were classified as migrants, rather than refugees, were not eligible for resettlement in a third country, and a handful decided instead to return home."
}];

/* Review the list of articles and only console log the ones that were published in Bangkok.
 To do this we're going to make a for loop, and iterate through each article. */

function kasianas_function(kjm_article_list) {

	for (var incrementor = 0; incrementor < kjm_article_list.length; incrementor++) {
		/*syntax to generate a for loop.  This code creates an "incrementor"" variable, checks to see whether
		 the incrementor variable is less than the length of the kjm_Vietnam_refugees_explainer list - if it is
		 then the for loop will run.  Finally, it increments the incrementor by 1 */
		var article_under_assessment = kjm_article_list[incrementor];
		/*sets the variable article_under_assessment equal to an article object from the
		 kjm_Vietnam_refugees_explainer list */
		if (article_under_assessment.publication_city == 'BANGKOK') {
			/* assesses whether the article object's publication city variable is BANGKOK */
			console.log(article_under_assessment);
			/* if the article object's publication city variable is BANGKOK, print it to the console log */
		} else {
			/* if the article object's publication city variable is not BANGKOK... */
			console.log('Not published in BANGKOK');
			/*print "Not published in BANGKOK" to the console */
		}
	}
}

kasianas_function(kjm_Vietnam_refugees_explainer)
