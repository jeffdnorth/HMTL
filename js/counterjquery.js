let nbr = 0;

$(() => {
     

        $("#plus").on("click", () => {
        display(++nbr);
})
        $("#minus").on("click", () => {
        display(--nbr);
})
        display(nbr);
});
    const display = (nbrks => {
        let inpCtrl = $("input").val(nbr);
        inpCtrl.css("color", (nbr % 2 == 0 ? "red" : "black"))
        inpCtrl.css("fontStyle", (nbr % 3 == 0 ? "italic" : "normal"))
        inpCtrl.css("fontweight", (nbr % 7 == 0 ? "bold" : "normal"))
    })
