import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoiceSlice";

export default configureStore({ reducer: invoiceReducer });