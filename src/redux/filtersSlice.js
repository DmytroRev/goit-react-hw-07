import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
	name: "filters",
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
	reducers: {
		changeFilter(state, action) {
			state.name = action.payload
		}
	}
})

export const { changeFilter } = filtersSlice.actions

export default filtersSlice.reducer

export const selectNameFilter = state => state.filters.name