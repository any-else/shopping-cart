import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/User";
export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    const response = await UserAPI.register(payload);
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("access_token", JSON.stringify(response.accessToken));
    return response;
  }
);

export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
  const response = await UserAPI.login(payload);
  if (response) {
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("access_token", JSON.stringify(response.accessToken));
  }
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
    [login.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
  },
});

const { actions, reducer } = userSlice;

export default reducer;
