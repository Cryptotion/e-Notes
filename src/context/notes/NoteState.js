import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
    
  const [notes, setNotes] = useState(notesInitial)

  // get all Note 
  const getNotes = async () => {
    //  API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1Yzk4NDM5YTMzOTU4ZjU0MzU1M2U4In0sImlhdCI6MTYzMzQ1ODI4NX0.UgaBPLhiSOaT9SqfGAoJqD_Nf-Gr3ry4YcUpEEjC1XM"
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)

  }

  // Add a Note 
  const addNote = async (title, description, tag) => {
    //  API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1Yzk4NDM5YTMzOTU4ZjU0MzU1M2U4In0sImlhdCI6MTYzMzQ1ODI4NX0.UgaBPLhiSOaT9SqfGAoJqD_Nf-Gr3ry4YcUpEEjC1XM"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)

    const note = {
      "_id": "615dbe2e408d7479e490147915",
      "user": "615c98439a33958f543553e8",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-10-06T15:18:06.963Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note 
  const deleteNote = async (id) => {
    //  API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1Yzk4NDM5YTMzOTU4ZjU0MzU1M2U4In0sImlhdCI6MTYzMzQ1ODI4NX0.UgaBPLhiSOaT9SqfGAoJqD_Nf-Gr3ry4YcUpEEjC1XM"
      }
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  // Edit a Note 
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1Yzk4NDM5YTMzOTU4ZjU0MzU1M2U4In0sImlhdCI6MTYzMzQ1ODI4NX0.UgaBPLhiSOaT9SqfGAoJqD_Nf-Gr3ry4YcUpEEjC1XM"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client 
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    setNotes(newNotes);
  }



  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState;