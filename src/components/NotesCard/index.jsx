import { useNotes } from "../../context/notes-context"
import { findNotesInArchive } from "../../utils/findNotesInArchive";


export const NotesCard = ({ id, title, text, isPinned }) => {
    const { notesDispatch, archive } = useNotes();

    const onPinClick = (id) => {
        notesDispatch({
            type: 'PIN',
            payload: { id }
        });
    };

    const onDeleteClick = (id) => {
        console.log("Deleting note with id:", id); // Add this for debugging
        notesDispatch({
            type: 'DELETE_NOTE',
            payload: { id }
        });
    };

    const onArchiveClick = (id) => {
        !isNotesInArchive? notesDispatch({
            type: 'ARCHIVE',
            payload: { id }
        }):notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }

    /* const findNotesInArchive = (archive,id)=>{
        return archive.some(note=>note.id===id)
    } */

    const isNotesInArchive = findNotesInArchive(archive, id);

    return (
        <div className="w-56 border border-neutral-800 p-2 rounded-md" key={id}>
            <div className="flex justify-between ">
                <p>{title}</p>
                {!isNotesInArchive?<button onClick={() => onPinClick(id)}>
                        <span className={`material-symbols-outlined ${isPinned && 'text-zinc-950'}`}>
                            push_pin
                        </span>
                    </button>:<></>
                }
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                <button onClick={() => onArchiveClick(id)}>
                    <span className={isNotesInArchive ? 'material-icons' : 'material-symbols-outlined'}>
                        archive
                    </span>
                </button>
                    <button onClick={() => onDeleteClick(id)}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
