import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6666fa2ea2f8516ff7a5bdac.mockapi.io';

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/contacts');
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (newContact, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', newContact);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactID, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactID}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
