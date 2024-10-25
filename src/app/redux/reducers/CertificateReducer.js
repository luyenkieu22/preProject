import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    certificate: [],
    isLoading: false,
};

export const certificateSlice = createSlice({
    name: "certificate",
    initialState,
    reducers: {
        getCertificateByIdReducer: (state, action) => {
            state.certificate = action.payload;
        },

        getCertificateByEmployeeReducer: (state, action) => {
            state.certificate = action.payload;
        },

        addCertificateReducer: (state, action) => {
            state.certificate.push(action.payload);
        },

        editCertificateReducer: (state, action) => {
            const { id, ...editDistricts } = action.payload;
            const districtResult = state.certificate.findIndex((item) => item.id === id);

            if (districtResult) {
                state.certificate[districtResult] = {
                    ...state.certificate[districtResult],
                    ...editDistricts,
                };
            }
        },

        deleteCertificateReducer: (state, action) => {
            state.certificate = state.certificate.filter(
                (item) => item.id !== action.payload
            );
            state.isLoading = !state.isLoading;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    getCertificateByIdReducer,
    getCertificateByEmployeeReducer,
    addCertificateReducer,
    editCertificateReducer,
    deleteCertificateReducer,
} = certificateSlice.actions;

export default certificateSlice.reducer;
