
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FilesService } from '../../services/files.service';

const filesServices = new FilesService()

export const getDataFiles = createAsyncThunk(
  "files/getDataFiles",
  async (_, thunkAPI) => {
    try {
      const data = await filesServices.getData()
      return data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getDataFilesByFileName = createAsyncThunk(
  "files/getDataFilesByFileName",
  async (value, thunkAPI) => {
    try {
      const data = await filesServices.getDataByFileName(value)
      return data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getListFiles = createAsyncThunk(
  "files/getListFiles",
  async (_, thunkAPI) => {
    try {
      const data = await filesServices.getListFileData()
      return data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  data: [],
  listFiles: [],
  filter: "",
  isLoading: false
}

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filter = payload
    },

    clearAllFilter: (state) => {
      state.filter = ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDataFiles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getDataFiles.fulfilled,
      (state, { payload }) => {
        if (payload.length > 0) {
          state.data = payload;
        }
        state.isLoading = false;
      }
    );
    builder.addCase(getDataFiles.rejected, (state) => {
      state.isLoading = false;
    });
    // find by fileName
    builder.addCase(getDataFilesByFileName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getDataFilesByFileName.fulfilled,
      (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(getDataFilesByFileName.rejected, (state) => {
      state.isLoading = false;
    });
    //List Files
    builder.addCase(
      getListFiles.fulfilled,
      (state, { payload }) => {
        if (payload.length > 0) {
          state.listFiles = payload;
        }
        state.isLoading = false;
      }
    );
    builder.addCase(getListFiles.rejected, (state) => {
      state.isLoading = false;
    });
  }
})

export const { setFilters, clearAllFilter } = filesSlice.actions
export default filesSlice.reducer
