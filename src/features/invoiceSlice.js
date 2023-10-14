import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    invoices: []
}

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        addInvoice: (state, action) => {
            const invoice = { ...action.payload}
            state.invoices.push(invoice)
        },
        allInvoices: state => state.invoices,
        editInvoice: (state, action) => { 
            const { id, updatedInvoice } = action.payload;
            const idx = state.invoices.findIndex(invoice => invoice.id === id);

            if (idx !== -1) {
                state.invoices[idx] = { ...state.invoices[idx], ...updatedInvoice };
            }
        },
        deleteInvoice: (state, action) => {
            state.invoices = state.invoices.filter((invoice) => invoice.id !== action.payload)
        }
    }
})

export const { addInvoice, editInvoice, deleteInvoice, allInvoices } = invoiceSlice.actions


export default invoiceSlice.reducer

