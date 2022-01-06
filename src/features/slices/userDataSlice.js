import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    user: null
}

export const postUserData = createAsyncThunk(
    'user/postUser',
    async (data) => {

        const response = await fetch('https://pure-earth-57563.herokuapp.com/users', {
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

        const response = await fetch(`https://pure-earth-57563.herokuapp.com/users?email=${email}`)
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