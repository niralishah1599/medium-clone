import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../Store/actionTypes'

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ username: string; email: string; password: string }>()
)