import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { School } from '@/types/school.types';

interface CompareState {
  schools: School[];
  isBarVisible: boolean;
}

const initialState: CompareState = {
  schools: [],
  isBarVisible: false,
};

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    addToCompare: (state, action: PayloadAction<School>) => {
      if (state.schools.length >= 5) return;
      const exists = state.schools.find(s => s.id === action.payload.id);
      if (!exists) {
        state.schools.push(action.payload);
        state.isBarVisible = true;
      }
    },
    removeFromCompare: (state, action: PayloadAction<string>) => {
      state.schools = state.schools.filter(s => s.id !== action.payload);
      if (state.schools.length === 0) {
        state.isBarVisible = false;
      }
    },
    clearCompare: (state) => {
      state.schools = [];
      state.isBarVisible = false;
    },
  },
});

export const { addToCompare, removeFromCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;