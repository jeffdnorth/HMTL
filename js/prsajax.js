let users = [];

//jquery ready function
$(() => {

    $getJSON("http://localhost:40972/api/users")
        .done((res) => {
            console.debug(res);
            users = res;
            display();
        })
        .fail((err)  => {
                console.error(err);
        })
});

tr.append($(`<td>${u.id}</td>`));

const display = () => {
    let tbody = $("tbody");
    t.body.empty();
    for(let u of users) {
        let tr = $("<tr></tr>")
        tr.append($(`<td>${u.id}</td>`));
        tr.append($(`<td>${u.username}</td>`));
        tr.append($(`<td>${u.firstname} ${u.lastname}</td>`));
        tr.append($(`<td>${(u.isreviewer ? "Yes" : "No")}</td>`));;
        tr.append($(`<td>${(u.isadmin ? "Yes" : "No")}</td>`));
        tr.append($(`<a href="http://localhost:40972/get-by-pk.httml?id=${u.id}"Detail</a>`));

    }
};

