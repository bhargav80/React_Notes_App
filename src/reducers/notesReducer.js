import { v4 as uuid } from 'uuid';

export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'TITLE':
            return {
                ...state, title: payload
            };

        case 'TEXT':
            return {
                ...state, text: payload
            };

        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPinned: false }]
            };
        
        case 'CLEAR_INPUT':
            return {
                ...state,
                title: '',
                text: ''
            };

        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note)
            };
        
            

            case 'ARCHIVE':
                return{
                    ...state,
                    archive:[...state.archive,state.notes.find(({id})=>id===payload.id)],
                    notes: state.notes.filter(({id})=>id!==payload.id)
                };
                case 'REMOVE_FROM_ARCHIVE':
                return{
                    ...state,
                    notes: [...state.notes,state.archive.find(({id})=>id===payload.id)],
                    archive:state.archive.filter(({id})=>id!==payload.id)
                };
                case 'DELETE_NOTE':  // Move to recycle bin
                const noteToDelete = state.notes.find(note => note.id === payload.id);
                return {
                    ...state,
                    deletedNotes: [...state.deletedNotes, { ...noteToDelete }],
                    notes: state.notes.filter(note => note.id !== payload.id),  // Remove from notes
                    archive: state.archive.filter(note => note.id !== payload.id) // Remove from archive too
                };
    
            case 'RESTORE_NOTE':  // Restore from recycle bin
                const noteToRestore = state.deletedNotes.find(note => note.id === payload.id);
                return {
                    ...state,
                    notes: [...state.notes, { ...noteToRestore }],
                    deletedNotes: state.deletedNotes.filter(note => note.id !== payload.id) // Remove from recycle bin
                };
    
            case 'PERMANENT_DELETE':  // Permanently delete from recycle bin
                return {
                    ...state,
                    deletedNotes: state.deletedNotes.filter(note => note.id !== payload.id)
                };
                
            
        default:
            return state;
    }
};
