import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import compareReducer from './compareSlice';
import chatbotReducer from './chatbotSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    compare: compareReducer,
    chatbot: chatbotReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;