import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface QuestionsState {
	currentQuestion: number;
}

const initialState: QuestionsState = {
	currentQuestion: 1,
};

export const questionsSlice = createSlice({
name: 'questions',
initialState,
reducers: {
	increment: (state) => {
		state.currentQuestion += 1;
		},
		decrement: (state) => {
			if (state.currentQuestion > 1) {
				state.currentQuestion -= 1;
			}
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.currentQuestion += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = questionsSlice.actions;
export const selectCurrentQuestion = (state: RootState) => state.questions.currentQuestion;
export default questionsSlice.reducer;