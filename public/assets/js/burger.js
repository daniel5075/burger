$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".eatburger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var eaten = {
            devoured: 1
        }

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                console.log("Ate the burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
