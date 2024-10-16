import { Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";

export const RecycleBin = () => {
    const { deletedNotes, notesDispatch } = useNotes();

    const onRestoreClick = (id) => {
        notesDispatch({
            type: 'RESTORE_NOTE',
            payload: { id }
        });
    };

    const onPermanentDeleteClick = (id) => {
        notesDispatch({
            type: 'PERMANENT_DELETE',
            payload: { id }
        });
    };

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col w-screen mt-7">
                    <div className="mt-14  flex flex-wrap gap-6">
                        {deletedNotes.length > 0 ? deletedNotes.map(({ id, title, text }) => (
                            <div key={id} className="w-56 border border-neutral-800 p-2 rounded-md">
                                <p>{title}</p>
                                <p>{text}</p>
                                <div className="ml-auto">
                                    <button onClick={() => onRestoreClick(id)}>
                                        <span className="material-symbols-outlined">restore</span>
                                    </button>
                                    <button onClick={() => onPermanentDeleteClick(id)}>
                                        <span className="material-symbols-outlined">delete_forever</span>
                                    </button>
                                </div>
                            </div>
                        )) : (
                            <p>No notes in recycle bin.</p>
                        )}
                    </div>
                </div>
            </main>
        </Fragment>
    );
};
