import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunk
export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await res.json()
})

// Slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: { data: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default postsSlice.reducer
