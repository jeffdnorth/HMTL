let user = null;

//ready function
$(() => {

    let id = getUrlParms(document.URL).id;
    $.getJSOM(`http://localhost:40972/apiusers/${id}`)

   .done((res)  => {
       console.debug(res);
       user = res;

   })
   .fail((err) => {
       console.error(err);
   })

 


});

const display = () => {
    $("#xId").text(user.id); $("#xId").text(user.id);
    $("#xUsername").text(username);
    $("#xFirstname").text(firstname);
    $("#xLastname").text(Lastname);
    $("#xPhone").text(phone);
    $("#xEmail").text(email);
    $("#xIsreviewr").text(isAdmin);
    $("#xIsAdmin").text(isadmin);

};