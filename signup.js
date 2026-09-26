$(document).ready(function() {


    $("#fullName").on("input", function() {
        var val = $(this).val().trim();
        $("#previewName").text(val !== "" ? val : "Your Name Will Appear Here");
    });


    $("#studentNumber").on("input", function() {
        var val = $(this).val().trim();
        $("#previewStudent").text(val !== "" ? val : "-");
    });


    $("#email").on("input", function() {
        var val = $(this).val().trim();
        $("#previewEmail").text(val !== "" ? val : "-");
    });


    $("#campus").on("change", function() {
        var val = $(this).val();
        $("#previewCampus").text(val !== "" ? val : "-");
    });


    $("#bio").on("input", function() {
        var val = $(this).val().trim();
        $("#previewBio").text(val !== "" ? val : "Your bio description will instantly render here as you type...");
    });


    $("#interests").on("input", function() {
        var val = $(this).val().trim();
        var tagsContainer = $("#previewTags");
        tagsContainer.empty();

        if (val !== "") {
            var interestsArray = val.split(",");
            $.each(interestsArray, function(index, interest) {
                var trimmed = interest.trim();
                if (trimmed !== "") {
                    tagsContainer.append('<span class="tag">' + trimmed + '</span>');
                }
            });
        }
    });


    $("#registrationForm").submit(function(event) {

        event.preventDefault();

        var isValid = true;

        $(".error-message").text("");
        $("input, select, textarea").removeClass("invalid");


        var fullName = $("#fullName").val().trim();
        if (fullName === "") {
            $("#nameError").text("Full name is required.");
            $("#fullName").addClass("invalid");
            isValid = false;
        }


        var studentNumber = $("#studentNumber").val().trim();
        if (studentNumber === "") {
            $("#studentError").text("Student number is required.");
            $("#studentNumber").addClass("invalid");
            isValid = false;
        } else if (isNaN(studentNumber)) {
            $("#studentError").text("Student number must contain digits only.");
            $("#studentNumber").addClass("invalid");
            isValid = false;
        }


        var campus = $("#campus").val();
        if (campus === "") {
            $("#campusError").text("Please select your academic campus environment.");
            $("#campus").addClass("invalid");
            isValid = false;
        }


        var email = $("#email").val().trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "") {
            $("#emailError").text("Email address is required.");
            $("#email").addClass("invalid");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#emailError").text("Please enter a structurally valid email syntax formatting framework.");
            $("#email").addClass("invalid");
            isValid = false;
        }

        var password = $("#password").val();
        if (password === "") {
            $("#passwordError").text("Password is required.");
            $("#password").addClass("invalid");
            isValid = false;
        } else if (password.length < 6) {
            $("#passwordError").text("Password must be at least 6 characters long.");
            $("#password").addClass("invalid");
            isValid = false;
        }
    });
});