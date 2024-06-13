
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectContacts, selectFilter } from "./selectors";
// import { selectFilter } from "./selectors";
// import { selectContacts } from "./selectors";


// const handlePending = state => {
// 	state.loading = true
// 	state.error = false
// }

// const handleRejected = (state, action) => {
// 	state.loading = false
// 	state.error = action.payload
// }

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loadingoading = false;
        state.error = action.payload;
      });
  },
});




// const handlePending = (state) => {
//   state.contacts.loading = true;
// };

// const handleRejected = (state, action) => {
//   state.contacts.loading = false;
//   state.contacts.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     contacts: {
//       items: [],
//       loading: false,
//       error: null,
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.loading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.loading = false;
//         state.contacts.error = null;
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.rejected, handleRejected)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.loading = false;
//         state.contacts.error = null;
//         state.contacts.items = state.contacts.items.filter(
//           (item) => item.id !== action.payload.id
//         );
//       });
//   },
// });

export const visibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filtersContact) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filtersContact.toLowerCase())
    );
  }
);
export const contactsReducer = contactsSlice.reducer

