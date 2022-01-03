import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    jobs: []
}

export const postJob = createAsyncThunk(
    'job/postJob',
    async (data) => {

        const { email, ...rest } = data

        const response = await fetch(`http://localhost:5000/jobs?email=${email}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(rest)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        return response.data
    }
)

export const getJobs = createAsyncThunk(
    'jobs/getJobs',

    async () => {

        const response = await fetch('http://localhost:5000/jobs')
            .then(res => res.json())

        return response
    }
)

const jobSlice = createSlice({

    name: 'Jobs',
    initialState,

    reducers: {


    },

    extraReducers:
        (builder) => {

            builder.addCase(postJob.fulfilled, (state, action) => {

                // console.log(action)
            })

            builder.addCase(getJobs.fulfilled, (state, action) => {

                state.jobs = action.payload
            })
        }
})

export default jobSlice.reducer;