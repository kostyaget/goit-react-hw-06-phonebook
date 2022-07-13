import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const initialState = { items: [] };

const contactsSlise = createSlice({
    name: 'contacts',
    initialState,
    reduser: {
        addContact: {
            reducer(state, { payload }) {
                state.items.push(payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        removeContact(state, { payload }) {
            state.items = state.items.filter(item => item.id !== payload)
        },
    },

});

const persistConfig = {
    key: 'contscts',
    storage,
};

export const persistedContactsReducer = persistReducer(
    persistConfig,
    contactsSlise.reduser
)

export const { addContact, removeContact } = contactsSlise.actions;

export const getContactsItems = state => state.contacts.items;