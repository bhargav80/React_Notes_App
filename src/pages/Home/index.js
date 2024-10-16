import { Navbar } from "../../components/Navbar";
import { Fragment, useReducer } from 'react'
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";
import { notesReducer } from "../../reducers/notesReducer";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";
//import { useReducer } from "react";
export const Home = () => {
   /*  const initialState = {
        title: '',
        text: '',
        notes: [],

    } */
    //const [{ title, text, notes }, notesDispatch] = useReducer(notesReducer, initialState)
    const {title,text,notes,archive,notesDispatch} = useNotes();
    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }

    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'
        })
        notesDispatch({
            type: 'CLEAR_INPUT'
        })
    }

    console.log(archive)

    console.log(notes)

    return (
        <Fragment>
            <Navbar></Navbar>
            <main className="flex gap-3">
                <Sidebar></Sidebar>
                <div>
                    <div className="flex flex-col w-[200px] border  relative">
                        <input value={title} onChange={onTitleChange} className="border" placeholder="Enter Text" type="text" />
                        <textarea value={text} onChange={onTextChange} className="border" placeholder="Enter Title" name="" id=""></textarea>
                        <button disabled={title.length == 0} className="absolute bottom-0 right-0" onClick={onAddClick}>
                            <span className="material-symbols-outlined">
                                Add
                            </span>
                        </button>
                    </div>
                    <div className="mt-14  flex flex-wrap gap-6">
                        {
                            notes?.length > 0 && notes.map(({ id, title, text,isPinned }) => (
                               <NotesCard key={id} id={id} title={title} text = {text} isPinned={isPinned} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )

}