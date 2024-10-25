import { TypeCertificates } from "../sagas/types";

const createAction = (type, payload = null) => ({
    type,
    ...(payload && { payload }),
});

export const getCertificateByIdAction = () =>
    createAction(TypeCertificates.GET_CERTIFICATE_BY_ID);
export const getCertificateByEmployeeAction = () =>
    createAction(TypeCertificates.GET_CERTIFICATE_BY_EMPLOYEE);
export const addCertificateAction = (data) =>
    createAction(TypeCertificates.ADD_CERTIFICATE, data);
export const editCertificateAction = (data) =>
    createAction(TypeCertificates.EDIT_CERTIFICATE, data);
export const deleteCertificateAction = (data) =>
    createAction(TypeCertificates.DELETE_CERTIFICATE, data);
