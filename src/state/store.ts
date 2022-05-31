import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsSlice';
import profileReducer from "./profileSlice";

export const store = configureStore({
	reducer: {
		questions: questionsReducer,
		profile: profileReducer,
	},
});

const createStore = () => configureStore({
	reducer: {
		questions: questionsReducer,
		profile: profileReducer,
	}
})

type ConfiguredStore = ReturnType<typeof createStore>;
type StoreGetState = ConfiguredStore["getState"];
export type RootState = ReturnType<StoreGetState>;
export type AppDispatch = ConfiguredStore["dispatch"];

export default createStore;