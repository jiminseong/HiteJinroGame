import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    names: [],
    currentTurnIndex: 0,  
};

export const participantSlice = createSlice({
    name: 'participants',
    initialState,
    reducers: {
        setParticipantCount: (state, action) => {
            state.count = action.payload;
            state.names = Array(action.payload).fill('');
        },
        setParticipantName: (state, action) => {
            state.names[action.payload.index] = action.payload.name;
        },
        setParticipants: (state, action) => {
            state.names = action.payload;
        },
        nextTurn: (state) => {
            state.currentTurnIndex = (state.currentTurnIndex + 1) % state.names.length;
        },
        resetState: () => ({
            ...initialState
        }), // 초기 상태로 리셋
    },
});

export const { resetState, setParticipants, setParticipantCount, setParticipantName, nextTurn } = participantSlice.actions;

export default participantSlice.reducer;
