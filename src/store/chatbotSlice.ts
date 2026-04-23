import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatbotState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
}

const initialState: ChatbotState = {
  isOpen: false,
  messages: [
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I am Amashuri Assistant 😊 I can help you find the perfect school in Rwanda. Try asking me something like: "Girls boarding school near Musanze under 400,000 RWF"',
      timestamp: new Date().toISOString(),
    },
  ],
  isLoading: false,
};

const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    toggleChatbot: (state) => {
      state.isOpen = !state.isOpen;
    },
    openChatbot: (state) => {
      state.isOpen = true;
    },
    closeChatbot: (state) => {
      state.isOpen = false;
    },
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [initialState.messages[0]];
    },
  },
});

export const {
  toggleChatbot,
  openChatbot,
  closeChatbot,
  addMessage,
  setLoading,
  clearMessages,
} = chatbotSlice.actions;
export default chatbotSlice.reducer;