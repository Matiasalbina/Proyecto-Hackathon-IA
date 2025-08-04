import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Fetch de doctores (usuarios) desde API pública
export const fetchDoctores = createAsyncThunk(
  'doctores/fetchDoctores',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  }
)

interface Doctor {
  id: number
  name: string
  email: string
}

interface DoctoresState {
  lista: Doctor[]
  loading: boolean
  error: string | null
}

const initialState: DoctoresState = {
  lista: [],
  loading: false,
  error: null,
}

const doctoresSlice = createSlice({
  name: 'doctores',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctores.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDoctores.fulfilled, (state, action) => {
        state.loading = false
        state.lista = action.payload
      })
      .addCase(fetchDoctores.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Error al obtener doctores'
      })
  },
})

export default doctoresSlice.reducer

