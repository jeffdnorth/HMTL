// ready function
//get all PK create

$(() => {

    $("#save").on("click", () => {
        addNewUser();
    })

    const getUserData = () => {
        let newUser = {
            id: 0, 
            username: $("#xUsername").val(), 
            password: $("#xPassword").val(), 
            firstname: $("#xFirstname").val(), 
            lastname: $("#xLastname").val(),
            phone: $("#xPhone").val(), 
            email: $("#xEmail").val(), 
            isReviewer: $("#xReviewer").prop("checked"), 
            isAdmin: $("#xAdmin").prop("checked")
        };
        return newUser;
    }

    const addNewUser = () => {
        
        let newUser = getUserData();
        
        $.ajax({
            method: 'POST',
            url: 'http://localhost:40972/apiuser',
            data: JSON.stringify(newUser),
            contentType: 'application/json'
        })
        .done((res) => {
            console.debug(res);
            document.location.href = "http://localhost:40972/prsajax.html";
            
        })
        .fail((err) => {
            console.error(err);
        });
    }

});