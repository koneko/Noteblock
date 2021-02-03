var trash = localStorage.getItem('notes');

function deleteNote(title) {
    if (confirm("press ok to delete note. press cancel to not.")) {
        var ptrash = JSON.parse(trash)
        var trashtokeep = ptrash.filter(function(note) {
            return note.title !== title
        })
        console.log(ptrash)
        console.log(trashtokeep)
        ptrash = trashtokeep;
        localStorage.setItem('notes', JSON.stringify(ptrash))
        alert(`Successfully deleted note "${title}".`)
        location.reload()
        } else {

        }
}


if(!trash || trash == "[]" || trash == null) {
    alert("No notes found. Please create a note to access this page.")
    window.location = "../"
}

var parsedNotes = JSON.parse(trash);

parsedNotes.forEach(note => {
    var not = note.content.replace(/\n/g, "<br>");
    var div = document.createElement('div');
    div.innerHTML =
    `
    <div class="notefirst" type="button" data-toggle="modal" data-target="#1">
    <p class="fs-3"><notetitle>${note.title}</notetitle> </p>
<div>
    <p class="text-muted">${note.date} </p>
    <!-- <p class="badge bg-info fs-6">ID: 1</p> -->
</div>
<div> 
    ${not}
</div>

<hr>
<button type="button" class="btn btn-outline-danger" onclick="deleteNote('${note.title}')">
    Delete note
</button>
<br>
</div>

<br>
<br>
    `

    document.getElementById('allnotes').appendChild(div)

});
