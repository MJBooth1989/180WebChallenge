//Declare Variables
var notes, count =0;

//save the sticky notes into local storage
function noteSave(){
    var notesArr = [];
    
    notes.find("li > div").each(function(i,e){
        var colorClass = $(e).attr("class");
        var title = $(e).find("textarea.note-title");
        var content = $(e).find("textarea.note-body");
        
        notesArr.push({Index: i, Title: title.val(), Content: content.val(), Class: colorClass });
    });
    
    var jsonStr = JSON.stringify(notesArr);
    
    localStorage.setItem("notes", jsonStr);
    }
//add Event Handlers to the note
function addNoteEvent(noteElement){
    var div = noteElement.children("div");
    var closeImage = div.find("img");
    
    div.focus(function () {
       closeImage.removeClass("hide"); 
    });
    div.children().focus(function () {
       closeImage.removeClass("hide"); 
    });
    div.hover(function () {
        closeImage.removeClass("hide");
    },function() {
        closeImage.addClass("hide");
        noteSave();
    });
    div.children().hover(function () {
        closeImage.removeClass("hide");
    },function () {
        closeImage.addClass("hide");
    });
}
//adds a new note to the 'notes' list

function addNote(noteClass,title,content){
    if(!noteClass){
        noteClass= "color" + Math.ceil(Math.random() * 3);
    }
//add a new note to the end of the list
    
    notes.append("<li><div class = '" + noteClass + "'>" +
                "<textarea class = 'note-title' placeholder='Untitled' maxlength='30'/>" +
                "<textarea class='note-body' placeholder='Your content here'/>"+
                "<img class='hide' src= 'images/close.png'/>" +
                "</div></li>");
    //get the note that has just been added and attach a click event handler to its close button.
    var newNote = notes.find("li:last");
    newNote.find("img").click(function(){
    newNote.remove(); 
    noteSave();
});
// hook up event handlers to show or hide its close button as appropriate
    addNoteEvent(newNote);
    
    if(title){
        newNote.find("textarea.note-title").val(title);
    }
    if(content){
        newNote.find("textarea.note-body").val(content);
    }
    noteSave();
}
function noteLoad(){
    var storedNotes = localStorage.getItem("notes");
    if(storedNotes){
        var notesArr = JSON.parse(storedNotes);
        count = notesArr.length;
        
        var i;
        for(i =0; i < count; i++){
            var storedNote = notesArr[i];
            addNote(storedNote.Class, storedNote.Title,storedNote.Content);
            console.log(notesArr);
        }
    }
}
$(document).ready(function(){
    notes = $("#notes");
    
    noteLoad();
    
    $("#newNote").click(function(){
        addNote();
    });
   if(count === 0){
       $("#newNote").click();
   } 
    
});