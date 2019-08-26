const commands = {

  whoami: {
    cmd: 'whoami',
    res: 'Hey, my name is Emmanouil Chalvatzopoulos. I am from Greece and I studied Computer Engineering. Currently I study Data science at the <a href="https://www.dtu.dk/">Technical University of Denmark.</a>'
  },
  help: {
    cmd: 'help',
    res: '<table><tr><td><li>help </li></td><td>Help command to navigate through the website.</td></tr><tr><td><li>whoami &nbsp;&nbsp; </td></li><td>Small description about me.</td></tr><td><li>date &nbsp;&nbsp; </td></li><td>Shows the current date and time.</td></tr><td><li>github &nbsp;&nbsp; </td></li><td>A link to my Github repositories.</td></tr><td><li>clear &nbsp;&nbsp; </td></li><td>Clears the console.</td></tr><td><li>linkedin &nbsp;&nbsp; </td></li><td>A link to my Linkedin account.</td></tr><td><li>cv &nbsp;&nbsp; </td></li><td>My personal curriculum vitae.</td></tr></table>'
  },
  date: {
    cmd: 'date',
    res: Date()
  },
  cv: {
    cmd: 'cv',
    res:  'My personal curriculum vitae.(url)'
  },
  linkedin: {
    cmd: 'linkedin',
    res:  'My Linkedin profile.'
  },
  github: {
    cmd: 'github',
    res:  'My Github repositories.'
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
