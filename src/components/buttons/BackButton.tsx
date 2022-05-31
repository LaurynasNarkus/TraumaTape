import React, { useState } from "react";
import { decrement } from "../../state/questionsSlice";
import { useAppDispatch } from "../../state/hooks";
import { BackButtonWrapper, TextBase } from 'components';


export const BackButton = (props: any) => {  
	const dispatch = useAppDispatch();

	return(
		<BackButtonWrapper>
			{
				props.hidden
					? <></>
					: <TextBase  onClick={() => dispatch(decrement())}>Back</TextBase>
			}
		</BackButtonWrapper>
	)
}