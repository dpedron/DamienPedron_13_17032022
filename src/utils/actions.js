import { createAction } from '@reduxjs/toolkit';

export const tokenAction = createAction('token');
export const authorizationAction = createAction('authorization');
export const userAction = createAction('userInfo');
export const rememberAction = createAction('remember');
