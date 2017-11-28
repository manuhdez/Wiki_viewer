$(document).ready(function() {

  $('#enviar').on('click', function() {

    var searchTerm = $('#buscar').val();

    var enlace = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm + '&callback=?';

    $.ajax({
      type:"GET",
      url:enlace,
      async:false,
      dataType:"json",
      success: function(data){
        // Get heading      console.log(data[1][0]);
        // Get desription   console.log(data[2][0]);
        // Get link         console.log(data[3][0]);

        //Reset the container for every search
        $('.container').html('');

        //Creates the content with all the results
        for (var i=0; i<data[1].length; i++){

          $('.container').reverse().prepend('<div class="result">' + '<a class="title" target="_blank" href="' + data[3][i] + '">' + '<h3 class="enlace">' + data[1][i] + '</h3>' + '</a>' + '<p class="description">' + data[2][i] + '</p>');
        }

        //Remove the welcome message when you make a search
        $('#welcome').remove()
        //Removes the searchTerm after you've done it
        $('#buscar').val('');

      },
      done: function(errorMessage){
      alert('Error');
    }

    }); //closing ajax request

  }); // search click function

  $("#buscar").keypress(function (e) {
    if (e.which == 13) {
      $('#enviar').click();
      return false;
    }
  });

}); // document ready function
