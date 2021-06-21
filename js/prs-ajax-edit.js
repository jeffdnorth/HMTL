let user = null;

//ready function
$(() => {

    $("#save").on("click", ()=> {
        editUser();
    })

    let id = getUrlParms(document.URL).id;

    $.getJSON(`http://localhost:40972/apiusers/${id}`)

   .done((res)  => {
       console.debug(res);
       user = res;
       setUserData(user);

   })
   .fail((err) => {
       console.error(err);
   })


});

const setUserData = (user) => {
    $("#xId").val(user.id); 
    $("#xUsername").val(username);
    $("#xFirstname").val(firstname);
    $("#xLastname").val(Lastname);
    $("#xPhone").val(phone);
    $("#xEmail").val(email);
    $("#xIsreviewr").val(isAdmin);
    $("#xIsAdmin").val(isadmin);
//
    const getUserData = () => {
        let euser

        id: +$("#xId").val(),
       
        $("#xUsername").val(username);
        $("#xFirstname").val(firstname);
        $("#xLastname").val(Lastname);
        $("#xPhone").val(phone);
        $("#xEmail").val(email);
        $("#xIsreviewr").val(isAdmin);
        $("#xIsAdmin").val(isadmin);
    }
    return euser;

    const editUser = getUserData();
    console.log(editUser);

    $.ajax({
        method: 'PUT',
        url: `http://localhost:5000/api/users/${editUser.id}`,
        data: JSON.stringify(editUser),
        contentType: 'application/json'
    })
    .done((res) => {
        console.debug(res);
        document.location.href = "prs-ajax.html";

    })
    .fail((err) => {
        console.error(err);
    });

}