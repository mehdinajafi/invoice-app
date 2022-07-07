import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveState } from "./browser-storage";

export type Theme = "light" | "dark";

export const addThemeToDocumet = (theme: Theme) => {
  const root = document.documentElement;
  root.style.setProperty("color-scheme", theme);
  root.classList.remove("light", "dark");
  root.classList.add(theme);
};
export const setTheme = createAsyncThunk("setTheme", async (theme: Theme) => {
  saveState("theme", theme);
  addThemeToDocumet(theme);
  return theme;
});

const initialState: { value: Theme } = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTheme.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default themeSlice.reducer;
