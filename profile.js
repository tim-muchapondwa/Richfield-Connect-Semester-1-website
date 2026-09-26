$(document).ready(function() {


    function loadUserProfile() {

        var storedUser = localStorage.getItem("userData");


        if (storedUser) {

            var user = JSON.parse(storedUser);


            $("#profileName").text(user.fullName);
            $("#profileStudent").text(user.studentNumber);
            $("#profileCampus").text("Campus: " + user.campus);
            $("#profileEmail").text(user.email);
            $("#profileBio").text(user.bio || "No bio description provided.");


            var tagsContainer = $("#profileTags");
            tagsContainer.empty();


            if (user.interests) {
                var interestsArray = user.interests.split(",");
                

                $.each(interestsArray, function(index, interest) {
                    var trimmedInterest = interest.trim();
                    if (trimmedInterest !== "") {
                        tagsContainer.append('<span class="tag">' + trimmedInterest + '</span>');
                    }
                });
            } else {
                tagsContainer.append('<span style="color: #556B82; font-style: italic;">No interests listed.</span>');
            }

        } else {

            $("#profileName").text("No Profile Found");
            $("#collapsibleDetails").html('<p style="padding: 15px; color: #E04D3A; font-weight: bold;">Please visit the Sign Up page to register your profile first!</p>');
        }
    }


    loadUserProfile();



    $("#toggleDetailsBtn").click(function() {

        $("#collapsibleDetails").slideToggle(400);
    });

});