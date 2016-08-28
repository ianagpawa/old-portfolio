var projects = {
  "projects": [{
      "title": "Simon Says",
      "dates": "Jul. 2016",
      "description": "A Simon Says game. First project utilizing audio elements and setTimeout(). (Rails/Heroku)",
      "url": "https://simon-says-ia.herokuapp.com"
    },

    
    {
      "title": "Tic Tac Toe",
      "dates": "Jul. 2016",
      "description": "A tic tac toe game. (github-pages)",
      "url": "https://theartilect.github.io/TickyTacky/"
    },
    
    {
      "title": "Javascript Calculator",
      "dates": "Jun. 2016",
      "description": "A fully functional simple calculator. First project utilizing 'this' in js. (github-pages)",
      "url": "https://theartilect.github.io/calculator/"
    }, 
    
    {
      "title": "Random Quote Generator",
      "dates": "Mar. 2016",
      "description": "A few of my favorite quotes.  My first Javascript project. (Rails/Heroku)",
      "url": "https://rand-quote-gen.herokuapp.com/"
    },
    
    
    {
      "title": "Pomodoro Productivity Timer",
      "dates": "Jun. 2016",
      "description": "A timer that can be used to for cooking pomodoro sauce or scheduling productivity.  First project utilizing setInterval(). (Rails/Heroku)",
      "url": "https://pomodoro-timer-ia.herokuapp.com/"
    },
    

    
    {
      "title": "Twitch-It",
      "dates": "May 2016",
      "description": "For tracking some Twitch streamers.  Utilized Twitch API. (Rails/Heroku)",
      "url": "https://twitch-it.herokuapp.com/"
    }, 
    
    {
      "title": "Wiki-It",
      "dates": "Apr. 2016",
      "description": "For searching and viewing a listing of wikipedia articles.  Utilized Wikipedia API. (Rails/Heroku)",
      "url": "https://wiki-it-ia.herokuapp.com"
      /*
      "url": "https://theartilect.github.io/wiki/"
      */
    }, 
    {
      "title": "Moving Companion",
      "dates": "Apr. 2016",
      "description": "Simple location integrated look up (Google, NYT, Wikipedia). Styling not finished.",
      "url": "http://codepen.io/TheArtilect/full/pbwbbW/"
    }, 
    

    
    {
      "title": "Finance Tracker",
      "dates": "Feb. - Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "description": "Ruby on Rails social stocks tracker project built using scaffolding and bootstrap.  Functionality complete, styling in progress. (Rails/Heroku)",
      "url": "https://thawing-plains-40720.herokuapp.com/users/sign_in"
    }, 
    /*
    {
      "title": "Local Weather App",
      "dates": "Apr. 2016",
      "description": "For showing local weather.  My first API project.  Utilized OpenWeather API and browser geolocation. (Chrome incompatibility, will recreate with different API in the future).",
      "url": "http://codepen.io/TheArtilect/full/zqPRYR/"
    }, 
    {
      "title": "Photo App",
      "dates": "Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course.",
      "description": "Ruby on Rails photo app.  Functionality not finalized, styling in progress. Currently in production (Heroku).",
      "url": "https://dry-retreat-19962.herokuapp.com/"
    }, 
    {
      "title": "Personal Portfolio",
      "dates": "Mar. 2016",
      "description": "A personal portfolio webpage. (Rails/Heroku)",
      "url": "https://ian-agpawa.herokuapp.com/"
    }, 
*/
    
    {
      "title": "Tribute Project",
      "dates": "Feb. 2016",
      "description": "Tribute Project about Hunter S. Thompson.  My first HTML and CSS project. (Rails/Heroku)",
      "url": "https://hunter-s-tribute.herokuapp.com/"
    },

    {
      "title": "AlphaBlog",
      "dates": "Jan. 2016",
      "description": "My first project, a Ruby on Rails blog  built from the ground up.  Functionality finalized, styling and content in progress.  (Rails/Heroku)",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "url": "https://project-prometheus-alphablog.herokuapp.com/"
    },

  ]
}



function displayRes() {
  
  var projectStartRes = '<div class="entry-res"></div>';
  var projectLinkRes = '<h4 class="pj-title-res"><a class="proj-links-res" target="_blank" href="%link%">%data%</a></h4>';
  var projectInfoRes = '<p class="description-res res-p">Description: %data%</p>';
  var projectDateRes = '<p class="date-res">Date: %data%</p>'
    
  for (project in projects.projects) {
    $(".proj-res").append(projectStartRes);
    

    var link = projectLinkRes.replace("%link%", projects.projects[project].url);
    var title = link.replace("%data%", projects.projects[project].title);
    $(".entry-res:last").append(title);


    var description = projectInfoRes.replace("%data%", projects.projects[project].description);
    $(".entry-res:last").append(description);

    var date = projectDateRes.replace("%data%", projects.projects[project].dates)
    $(".entry-res:last").append(date);

  }
}



/* redux projects */
function createProjects(){
  var count = 1


  
  
  var projectThumbs = {
    1: 'SimonSays.png',
    2: "TicTacToe.png",
    3: "JavascriptCalculator.png",
    4: "RandomQuote.png",
    5: "PomodoroTimer.png",
    6: "TwitchIt.png",
    7: "WikiIt.png",
    8: "MovingCompanion.png",
    9: "FinanceTracker.png",
    10: "Tribute.png",
    11: "AlphaBlog.png"
  }
  
 
 
  var newTRow = "<tr class='t-row'></tr>"
  var projTD = "<td class='proj-td col-md-4 click'><a target='_blank' href='%link%' class='thumb-link'><div class='inside'><p class='p-title'>%title%</p><p class='p-des'>%description%</p></div></a></td>"
  

  function addTable(){
    for (project in projects.projects){
      if (count % 3 == 1){
        $("#mural").append(newTRow);
      }
      var pLink = projTD.replace("%link%", projects.projects[project].url)
      var Title = pLink.replace("%title%", projects.projects[project].title)
      var formattedProject = Title.replace("%description%", projects.projects[project].description)
      $(".t-row:last").append(formattedProject)
      var picUrl = "url('assets/" + projectThumbs[count] +"')"
      $('.proj-td:last').css("background-image", picUrl)
      
      count += 1
    }
  }
  
  addTable();
    
    

  var back;
  
  $(".click")
    .mouseover( function(){
      $(this).css('opacity', "0.8")
      back = $(this).css("background-image");
      console.log(back)
      $(this).css('background-image', 'none')
      $(this).find('.inside').css('display', 'block')

    })
    .mouseout(function(){
      $(this).css('opacity', '1.0')
      $(this).css('background-image', back)
      $(this).find('.inside').css('display', 'none')
      
    });
  
}




function displayAllProj(){
  navIt();
  displayRes();
  createProjects();
}



$(document).ready( displayAllProj);
$(document).on('page:load', displayAllProj);


 /*
 
 
   $(".thumb-link")
    .mouseover( function(){
      $(this).css('opacity', "0.8")
      back = $(this).find('.new-proj').css("background-image");
      $(this).find(".new-proj").css("background-image", 'none')
      $(this).find(".proj-title").css('display', 'block');
      $(this).find(".proj-des").css('display', 'block');
    })
    .mouseout(function(){
      $(this).css('opacity', "1.0")
      $(this).find(".new-proj").css("background-image", back)
      $(this).find(".proj-title").css('display', 'none')
      $(this).find(".proj-des").css('display', 'none')
    });
  
    
  var newProj = "<a target='_blank' href='%link%' class='thumb-link'><div class='new-proj col-md-4'><h3 class='proj-title'>%title%</h3><p class='proj-des'>%description%</p></div></a>"
  var newRow = "<div class='row proj-row'></div>"
  
  function addProjects(){
    for (project in projects.projects){
      if (count % 3 == 1){
        $("#project-mural").append(newRow)
      }
      var picLink = newProj.replace("%link%", projects.projects[project].url)
      var newProjTitle = picLink.replace("%title%", projects.projects[project].title)
      var newProjFormatted = newProjTitle.replace("%description%", projects.projects[project].description)
      $(".proj-row:last").append(newProjFormatted);
      var picUrl = "url('assets/" + projectThumbs[count] +"')"
      $(".new-proj:last").css("background-image", picUrl)
      count += 1;
    }

    
  }
  */
  
  //addProjects();
  /*
  function addProjectsTable(){
    for (project in projects.projects){
      if (count % 3 == 1){
        $("#mural").append(newTRow);
        console.log(newTRow)
      }
      var tdLink = projTD.replace("%link%", projects.projects[project].url)
      var newProjTitle = tdLink.replace("%title%", projects.projects[project].title)
      var newProjFormatted = newProjTitle.replace("%description%", projects.projects[project].description)
      console.log(newProjFormatted)
      $(".t-row:last").append(newProjFormatted);
      var picUrl = "url('assets/" + projectThumbs[count] +"')"
      $(".proj-td:last").css("background-image", picUrl)
      count += 1;
    }
  }

  addProjectsTable();
  */
  
  /*

OLD WAY OF JUST LISTING ITEMS
var projectStart = '<div class="entry"></div>';
var projectLink = '<h3 class="pj-title"><a class="proj-links" target="_blank" href="%link%">%data%</a></h3>';
var projectInfo = '<p class="description">Description: %data%</p>';
var projectProd = '<p class="description">%data%</p>';
var projectDate = '<p class="date">Date: %data%</p>'


function displayIt() {
  for (project in projects.projects) {
    $("#project-entries").append(projectStart);
    

    var link = projectLink.replace("%link%", projects.projects[project].url);
    var title = link.replace("%data%", projects.projects[project].title);
    $(".entry:last").append(title);


    var description = projectInfo.replace("%data%", projects.projects[project].description);
    $(".entry:last").append(description);
    

    var date = projectDate.replace("%data%", projects.projects[project].dates)
    $(".entry:last").append(date);

  }
}
*/