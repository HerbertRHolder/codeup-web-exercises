  (function() {
    "use strict";
    var elem = "";

    function loadStoreList(){
      $.get('data/inventory.json').done(function(data) {
        console.log(data);
        for (var i = 0; i <= data.length - 1; i++) {
          elem += "<tr>";
          elem += "<th>" + data[i].title + "</th>";
          elem += "<th>" + data[i].quantity + "</th>";
          elem += "<th>" + data[i].price + "</th>";
          elem += "<th>" + data[i].categories.join(', ') + "</th>";
          elem += "</tr>";
        }
        ;
        $("#insertProducts").html(elem);
      });
    };

    $(document).ready(function(){
      loadStoreList();
      $("#refresh_button").click(function(){
        elem = "";
        $("#insertProducts").html(elem);
        loadStoreList();

      });
      });

  })();
