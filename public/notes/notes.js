function getNotes() {
    var trash = localStorage.getItem('notes');
    if(!notes) {

        return null;

    } else {

        return trash;

    }
}

var unpNotes = getNotes();
var parsedNotes = JSON.parse(unpNotes);

parsedNotes.forEach(note => {
    
});