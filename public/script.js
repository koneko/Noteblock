// How to store json in localstorage

// var personObject = { name: "Peter", age: 18, married: false };
    
// // Convert the person object into JSON string and save it into storage
// localStorage.setItem("personObject", JSON.stringify(personObject));
    
// // Retrieve the JSON string
// var jsonString = localStorage.getItem("personObject");
    
// // Parse the JSON string back to JS object
// var retrievedObject = JSON.parse(jsonString);
// console.log(retrievedObject);

function getContent() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    if(title == "" || content == "") {
        return null;
    } else {
        var date = new Date()
        return  {
            "title" : title,
            "content" : content,
            "date" : `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
        }
    }
}


function createNote() {
    if(!localStorage.getItem('notes')) {
        var array = JSON.stringify([])
        localStorage.setItem('notes', array)
    }
    var note = getContent()
    if(note == null) {
        alert("Title or content empty. error")
    } else {
        var notesLocal = localStorage.getItem('notes')

        var parsednotesLocal = JSON.parse(notesLocal);

        var sametitles = 0;

        parsednotesLocal.forEach(arraynote => {
            if(arraynote.title == note.title) {
                sametitles++
            }
        });

        if(sametitles > 0) {
            alert("Duplicate title.")
        } else {
        parsednotesLocal.push(note);

        var stringifiednotesLocal = JSON.stringify(parsednotesLocal);

        localStorage.setItem('notes', stringifiednotesLocal)

        alert("Note created. Check it out with the \"My Notes\" button.")

        document.getElementById("title").value = "";

        document.getElementById("content").value = "";
        }
        
    }
}
function logLocalNotes() {
    var lol = localStorage.getItem('notes')
    console.log(JSON.parse(lol))
}
function printLocalNotes() {
    var lnaup = localStorage.getItem('notes')
    var lna = JSON.parse(lnaup)
    lna.forEach(note => {
        // const title = document.createElement('p');
        // const content = document.createElement('p');
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${note.title}</h1>
        <p>${note.content}</p>
        <p class="text-muted">${note.date}</p>
        `
        document.body.appendChild(div);
    });
}