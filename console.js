const github_links = '<a href="https://github.com/VerbalCPU/Case_1">Case 1</a></br>Computational Data Analysis Case 1. A data analysis project that required the use of machine learning techniques.</br></br><a href="https://github.com/VerbalCPU/Case_2">Case 2</a></br>Computational Data Analysis Case 2. A data analysis project that required the use of machine learning techniques.</br></br><a href="https://github.com/VerbalCPU/DBSCAN_python">DBSCAN</a></br>Density-based spatial clustering of applications with noise (DBSCAN) implementation in Python.</br></br><a href="https://github.com/VerbalCPU/Morning_Routine_App">Morning Routine App</a></br>The final project for the course 02808 Personal Data Interaction for Mobile and Wearables. An app written in React-Native and Expo.</br></br><a href="https://github.com/VerbalCPU/Sentiment-Analysis-of-Amazon-Reviews">Sentiment Analysis Classifier</a></br>A Sentiment Analysis Classifier written in Python using the Pytorch library.</br></br><a href="https://github.com/VerbalCPU/TodoListNode.js">TodoListNode</a></br>A Todo list written in Node.js.</br></br><a href="https://github.com/VerbalCPU/twitter-bot-dm">Twitter Bot</a></br>Over-simplified Direct Message Twitter Bot using Javascript.</br></br><a href="https://github.com/VerbalCPU/Youtube_MP3_Extract">YoutubeDL MP3 Extraction</a></br>A Python script that extracts audio from YouTube videos and removes the unique ID at the end of the file.';

const help_cmd = '<table><tr><td><li>help</li></td><td>Help command to navigate through the website.</td></tr><tr><td><li>whoami &nbsp;&nbsp;&nbsp; </td></li><td>Small description about me.</td></tr><td><li>date &nbsp;&nbsp;&nbsp; </td></li><td>Shows the current date and time.</td></tr><td><li>github &nbsp;&nbsp;&nbsp; </td></li><td>Links and descriptions of my Github repositories.</td></tr><td><li>clear &nbsp;&nbsp;&nbsp; </td></li><td>Clears the console.</td></tr><td><li>linkedin &nbsp;&nbsp;&nbsp; </td></li><td>A link to my Linkedin account.</td></tr><td><li>cv &nbsp;&nbsp;&nbsp; </td></li><td>My personal curriculum vitae.</td></tr><tr><td><li>observables &nbsp;&nbsp;&nbsp;</li></td><td>Links to visual notebooks.</td></tr></table>';

const observables = '<a href="https://observablehq.com/@verbalcpu/demographic-analysis-of-crime-in-new-york-city">Demographic Analysis of crime in New York city</a></br></br><a href="https://observablehq.com/@verbalcpu/a-visual-walkthrough-over-san-franciscos-crime-evolution">A Visual Walkthrough over San Francisco\'s Crime Evolution</a>';

const commands = {

  whoami: {
    cmd: 'whoami',
    res: 'Hey, my name is Emmanouil Chalvatzopoulos. I am from Greece and I studied Computer Engineering. I completed my Master\'s Degree in Human Centered Artificial Inteligence at the <a href="https://www.dtu.dk/">Technical University of Denmark.</a>'
  },
  help: {
    cmd: 'help',
    res: help_cmd
  },
  date: {
    cmd: 'date',
    res: Date()
  },
  cv: {
    cmd: 'cv',
    res:  '<a href="https://www.dropbox.com/s/an0ip35ilahr8ho/Emmanouil%20Chalvatzopoulos%20CV.pdf?dl=0" target="_blank">My personal curriculum vitae.</a>'
  },
  linkedin: {
    cmd: 'linkedin',
    res:  '<a href="https://www.linkedin.com/in/emmanouil-chalvatzopoulos-70a65318b" target="_blank">Click here to see my Linkedin profile.</a>'
  },
  github: {
    cmd: 'github',
    res: github_links
  },
  observables: {
    cmd: 'observables',
    res: observables
  }
};



const prephrase = '<span class="green">root</span><span class="blue">@</span><span class="green">website</span><span class="red">$</span> ';

var form = $('<div>' + prephrase + '<form id="form"><input type="text" class="nostyle" autofocus /></form>').appendTo('#content');

function launchCommand(command) {
  $('<div>' + prephrase + command.cmd + '<p>' + command.res + '</p></div>').insertBefore(form)
}

$('#content').niceScroll({
  cursorcolor: '#303030',
  cursorborder: '0px none',
  autohidemode: false,
  cursorwidth: "8px",
  cursorborderradius: "4px",
  railpadding: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 10
  }
});


$('form').on('submit', function(e) {
  e.preventDefault();
  try {
    if ($('input').val().trim() !== '') {
      launchCommand(commands[$('input').val()]);
    }
  } catch (error) {
    launchCommand({
      cmd: $('input').val(),
      res: '<div><p>' + $('input').val() + ': command not found</p></div>'
    });
    if ($('input').val() === 'clear') {
      $('#content > *').not(':last').remove();
    }
  }
  $('input').val('');
  $('#content').getNiceScroll(0).resize().doScrollTop($('#content')[0].scrollHeight, 0);
})
