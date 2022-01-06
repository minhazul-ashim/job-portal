import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    jobs: [],
    selectedJob: {},
}

export const postJob = createAsyncThunk(
    'job/postJob',
    async (data) => {

        const { email, ...rest } = data

        const response = await fetch(`https://pure-earth-57563.herokuapp.com/jobs?email=${email}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(rest)
        })
            .then(res => res.json())
            .then(data => { })

        return response.data
    }
)

export const getJobs = createAsyncThunk(
    'jobs/getJobs',

    async () => {

        const response = await fetch('https://pure-earth-57563.herokuapp.com/browseJobs')
            .then(res => res.json())

        return response
    }
)

export const getSelectedJob = createAsyncThunk(
    'jobs/selectedJob',
    async (id) => {

        const response = await fetch(`https://pure-earth-57563.herokuapp.com/jobDetails/${id}`)
            .then(res => res.json())

        return response;
    }
)

export const postCandidateInfo = createAsyncThunk(
    'jobs/CandidateInfo',

    async ({ formData, productId, email }) => {

        console.log(formData, productId)

        const response = await fetch(`https://pure-earth-57563.herokuapp.com/jobs/application?id=${productId}&email=${email}`, {
            method: 'POST',
            body: formData
        })
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

            builder.addCase(getSelectedJob.fulfilled, (state, action) => {

                state.selectedJob = action.payload
            })

            builder.addCase(postCandidateInfo.fulfilled, (state, action) => {

                // console.log(action)
            })
        }
})

export default jobSlice.reducer;