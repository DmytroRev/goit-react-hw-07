export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const state = (state) => state;