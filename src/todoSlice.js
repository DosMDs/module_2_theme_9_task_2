import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	loading: false,
	error: null,
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {},
});
