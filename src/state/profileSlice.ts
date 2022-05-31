import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ProfileState {
	age: number;
	workoutPreference: string;
	fitnessLevel: string;
	sports: string[];
	exerciseFrequency: string;
	currentHealthState: string;
	injuredBodyParts: string[],
	email: string
}

const initialState: ProfileState = {
	age: 0,
	workoutPreference: '',
	fitnessLevel: '',
	sports: [],
	exerciseFrequency: '',
	currentHealthState: '',
	injuredBodyParts: [],
	email: '',
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		changeAge: (state, action: PayloadAction<number>) => {
			state.age = action.payload;
		},
		changeWorkoutPreference: (state, action: PayloadAction<string>) => {
			state.workoutPreference = action.payload;
		},
		changeFitnessLevel: (state, action: PayloadAction<string>) => {
			state.fitnessLevel = action.payload;
		},
		changeExerciseFrequency: (state, action: PayloadAction<string>) => {
			state.exerciseFrequency = action.payload;
		},
		changeCurrentHealthState: (state, action: PayloadAction<string>) => {
			state.currentHealthState = action.payload;
		},
		addSport: (state, action: PayloadAction<string>) => {
			state.sports.push(action.payload);
		},
		removeSport: (state, action: PayloadAction<string>) => {
			state.sports = state.sports.filter(sport => sport !== action.payload);
		},
		addInjuredBodyPart: (state, action: PayloadAction<string>) => {
			state.injuredBodyParts.push(action.payload);
		},
		removeInjuredBodyPart: (state, action: PayloadAction<string>) => {
			state.injuredBodyParts = state.injuredBodyParts.filter(bodyPart => bodyPart !== action.payload);
		},
		changeEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		}
	},
});

export const { changeAge, changeWorkoutPreference, changeFitnessLevel, changeExerciseFrequency, changeCurrentHealthState, addSport, removeSport, addInjuredBodyPart, removeInjuredBodyPart, changeEmail } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
export default profileSlice.reducer;