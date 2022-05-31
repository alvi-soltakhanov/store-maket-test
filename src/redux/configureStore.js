import {  createStore } from "redux";
import { fakeDataBase } from "./features/fakeDataBase";

export const store = createStore(fakeDataBase);