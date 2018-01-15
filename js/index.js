var pageData;
var search = "";

$(document).ready(function() {
  $('#searchButton').click(function() {
    //GET INPUT TEXT
    search = $('#searchContent').val();
    //RESETS SEARCH RESULTS
    if(search != "") {
      $('#results').html("");
    }
    //ANIMATION
    if(search != "") {
        $('#mainBody').animate({ top: '20px' }, 500);
    }
    //MAKE GET REQUEST TO API
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=10&format=json&callback=?", function(data) {
      pageData = data;
      //APPENDS DIV ELEMENTS WITH THE RESULTS OF THE SEARCH
      for (var i = 0; i < pageData[1].length; i++) {
        $('#results').append('<div class="resultWell well"><h3><a target="_blank" href="' + pageData[3][i] + '">' + pageData[1][i] + '</a></h3><p>' + pageData[2][i] + '</p></div>');
      }
    });
  });
});

//RANDOM SEARCH BUTTON
$('#randomButton').click(function() {
  window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
});

//SEARCH CAN ALSO BE TRIGGERED BY PRESSING ENTER
$("#searchContent").keyup(function(event) {
  if (event.keyCode == 13) {
    $("#searchButton").click();
  }
});