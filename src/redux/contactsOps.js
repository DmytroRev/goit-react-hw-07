import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6668200df53957909ff6b0fb.mockapi.io"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data
        } catch (e) { 
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/AddContact",
    async (text, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { text })
           return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contactId/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)