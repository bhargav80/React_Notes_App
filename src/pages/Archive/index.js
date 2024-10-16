import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/NotesCard"
export const Archive = ()=>
{
    const {archive} = useNotes();
    return(
        <Fragment>
            <Navbar></Navbar>
            <main className="flex gap-3">
            <Sidebar>

            </Sidebar>
            <div className="flex flex-col w-screen mt-7">
            <div className="mt-14  flex flex-wrap gap-6">
                        {
                            archive?.length > 0 && archive.map(({ id, title, text,isPinned }) => (
                               <NotesCard key={id} id={id} title={title} text = {text} isPinned={isPinned} />
                            ))
                        }
                    </div>
            </div>
            </main>
        </Fragment>
    )
}