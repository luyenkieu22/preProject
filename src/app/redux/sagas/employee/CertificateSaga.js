import { call, put, takeEvery } from "redux-saga/effects";
import { TypeCertificates as types } from "../types";
import { toast } from "react-toastify";
import { addCertificate, deleteCertificate, editCertificate, getCertificateByEmployee, getCertificateById } from "app/services/CertificateService";
import { addCertificateReducer, deleteCertificateReducer, editCertificateReducer, getCertificateByEmployeeReducer, getCertificateByIdReducer } from "app/redux/reducers/CertificateReducer";

function* getCertificateByIdSaga(action) {
    const response = yield call(getCertificateById, action.payload);
    if (response?.code === 200) {
        yield put(getCertificateByIdReducer(response?.data));
    } else {
        toast.error("Đã có lỗi xảy ra khi thực hiện yêu cầu!");
    }
}

function* getCertificateByEmployeeSaga(action) {
    const response = yield call(getCertificateByEmployee, action.payload);
    if (response?.code === 200) {
        yield put(getCertificateByEmployeeReducer(response?.data));
    } else {
        toast.error("Đã có lỗi xảy ra khi thực hiện yêu cầu!");
    }
}

function* addCertificateSaga(action) {
    const response = yield call(addCertificate, action.payload);
    if (response?.code === 200) {
        yield put(addCertificateReducer(response?.data));
        toast.success("Thêm nhân viên " + response?.message);
    } else {
        toast.error("Đã có lỗi xảy ra khi thực hiện yêu cầu!");
    }
}

function* editCertificateSaga(action) {
    const response = yield call(editCertificate, action.payload);
    if (response?.code === 200) {
        yield put(editCertificateReducer(response?.data));
        toast.success("Sửa nhân viên " + response?.message);
    } else {
        toast.error("Đã có lỗi xảy ra khi thực hiện yêu cầu!");
    }
}

function* deleteCertificateSaga(action) {
    const response = yield call(deleteCertificate, action.payload);
    if (response?.code === 200) {
        yield put(deleteCertificateReducer(action.payload));
        toast.success("Xóa nhân viên " + response?.message);
    } else {
        toast.error("Đã có lỗi xảy ra khi thực hiện yêu cầu!");
    }
}

function* watchCertificateSaga() {
    yield takeEvery(types.GET_CERTIFICATE_BY_ID, getCertificateByIdSaga);
    yield takeEvery(types.GET_CERTIFICATE_BY_EMPLOYEE, getCertificateByEmployeeSaga);
    yield takeEvery(types.ADD_CERTIFICATE, addCertificateSaga);
    yield takeEvery(types.EDIT_CERTIFICATE, editCertificateSaga);
    yield takeEvery(types.DELETE_CERTIFICATE, deleteCertificateSaga);
}

export default watchCertificateSaga;
