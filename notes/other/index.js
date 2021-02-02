var notes = localStorage.getItem('notes');

var div = document.createElement('div');

div.innerHTML = `
<h2>Raw note data:</h2><br>
<p id="userapinotes">${notes}</p><br><br>
<hr>

<h2>Import Raw note data:</h2>
<input placeholder="Raw note data..." style="overflow:hidden;" id="rawnotes">
<br>
<br>
<button onclick="importNotes()">Import</button>
<br>
<hr>
<br>
<br>
<p>To delete ALL notes, clear your local storage. or click <a style="cursor:pointer;color:blue;" onclick="deleteNotes()">here</a>.</p>
<br>

<a href="../">Back</a>
`;

document.body.appendChild(div)

function importNotes() {
    var rawnote = document.getElementById('rawnotes').value;
    if(rawnote == "")
        return alert("no")
    localStorage.setItem('notes', rawnote)
    console.log(rawnote)
    alert("Loaded new notes.")
    location.reload()
}

function deleteNotes() {
    if (confirm("Press Ok to delete ALL notes, can NOT undo. Cancel to cancel.")) {
        localStorage.removeItem('notes');
        alert("Notes deleted.")
        location.reload()
        } else {
        }

}