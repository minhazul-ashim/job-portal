import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    user: null
}

export const postUserData = createAsyncThunk(
    'user/postUser',
    async (data) => {

        const response = await fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())

        return response
    }
)

export const getUserData = createAsyncThunk(
    'user/Profile',
    async (email) => {

        const response = await fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())

        return response
    }
)

const userDataSlice = createSlice({

    name: 'userData',
    initialState,

    reducers: {


    },

    extraReducers: (builder) => {

        builder.addCase(postUserData.fulfilled, (state, action) => {

            // console.log(action)
        })

        builder.addCase(getUserData.fulfilled, (state, action) => {

            state.user = action.payload
        })
    }
})

export default userDataSlice.reducer;