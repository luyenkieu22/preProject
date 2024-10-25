import { all } from "redux-saga/effects";
import watchEmployeeSaga from "./employee/EmployeeSaga";
import watchCertificateSaga from "./employee/CertificateSaga";

export function* rootSaga() {
    yield all([watchEmployeeSaga(), watchCertificateSaga()])
}