
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilter } from "./selectors";
import { selectContacts } from "./selectors";


const handlePending = state => {
	state.loading = true
}

const handleRejected = (state, action) => {
	state.loading = false
	state.error = action.payload
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
		name: ""
	}
	}, 
	extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
      });
  },

})




export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (items, name) => {
    return items.filter((item) => {
      return item.name?.toLowerCase().includes(name.toLowerCase());
    });
  }
);

export const contactsReducer = contactsSlice.reducer

