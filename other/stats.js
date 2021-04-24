function openStatsPanel() {
  document.getElementById('moreStats').style.left = '50%';
  document.getElementById('everythingElse').style.filter = 'blur(2px)';
  higherSound();
}

function closeStatsPanel() {
  document.getElementById('moreStats').style.left = '-50%';
  document.getElementById('everythingElse').style.filter = 'blur(0px)';
  boop();
}

var deadlines = [
                 new Date("June 11, 2021 9:20:00").getTime(), 
                 new Date("June  1, 2021 14:30:00").getTime(), 
                 new Date("May 3, 2021 7:40:00").getTime()
                ];

var statNames = [
                 'Last Day of School',
                 'Seniors Last Day',
                 'AP Tests Start'
                ];

const container = document.getElementById('statsDiv');

var deadline = new Date("June 11, 2021 9:20:00").getTime();

function statsHandler() {

    while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (var i = 0; i < deadlines.length; i++) {
    var now = new Date().getTime();
    var t = deadlines[i] - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    
    var label = document.createElement('h4');
    label.innerHTML = statNames[i];
    label.style.display = 'inline-block';
    label.style.fontWeight = 'bold';
    label.style.marginRight = '10px';
    label.style.marginLeft = '30px';
    
    var output = document.createElement('h4');
    
    output.className = 'stat';
    output.id = 'stat' + i;
    output.style.display = 'inline-block';
    output.innerHTML = days + ' Days ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds';
    if (t < 0) {
        output.innerHTML = 'Expired';
    }
    container.appendChild(label);
    container.appendChild(output);
    
    var brrr = document.createElement('br');
    container.appendChild(brrr);
  }
  setTimeout(statsHandler, 10);
}