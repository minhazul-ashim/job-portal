import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    user: {},
    appliedJobs: {},
    postedJobs: {}
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
            .then(data => console.log(data))

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

            console.log(action)
        })
    }
})

export default userDataSlice.reducer;