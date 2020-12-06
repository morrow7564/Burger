
$("#burgerCreate").on("submit", (e) => {
  e.preventDefault();

  let newBurger = {
      burgerName: $("#burgerCreate [name=burgerName]").val().trim()
  };

  $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
  }).then(() => {

      location.reload();
  });
});


$(".burgerUpdate").on("click", function() {
  let id = $(this).attr("burger-id");

  $.ajax("/api/burgers/" + id, {
      type: "PUT"
  }).then(() => {
      location.reload();
  });
});