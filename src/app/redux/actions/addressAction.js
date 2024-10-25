import { TypesDistricts, TypesProvinces, TypesWards } from "../sagas/types";

const createAction = (type, payload = null) => ({
    type,
    ...(payload && { payload }),
});

// Provinces actions
export const getAllProvincesAction = () =>
    createAction(TypesProvinces.GET_ALL_PROVINCES);
export const getDistrictByProvincesAction = (data) =>
    createAction(TypesProvinces.GET_DISTRICT_BY_PROVINCES, data);
export const addProvincesAction = (data) =>
    createAction(TypesProvinces.ADD_PROVINCES, data);
export const editProvincesAction = (data) =>
    createAction(TypesProvinces.EDIT_PROVINCES, data);
export const deleteProvincesAction = (data) =>
    createAction(TypesProvinces.DELETE_PROVINCES, data);
export const searchProvincesAction = (data) =>
    createAction(TypesProvinces.SEARCH_PROVINCES, data);

// Districts actions
export const getAllDistrictsAction = () =>
    createAction(TypesDistricts.GET_ALL_DISTRICT);
export const getWardsByDistrictAction = (data) =>
    createAction(TypesDistricts.GET_WARDS_BY_DISTRICT, data);
export const addDistrictAction = (data) =>
    createAction(TypesDistricts.ADD_DISTRICT, data);
export const editDistrictAction = (data) =>
    createAction(TypesDistricts.EDIT_DISTRICT, data);
export const deleteDistrictAction = (data) =>
    createAction(TypesDistricts.DELETE_DISTRICT, data);
export const searchDistrictAction = (data) =>
    createAction(TypesDistricts.SEARCH_DISTRICT, data);

// Wards actions
export const getAllWardsAction = () => createAction(TypesWards.GET_ALL_WARDS);
export const addWardAction = (data) => createAction(TypesWards.ADD_WARDS, data);
export const editWardAction = (data) =>
    createAction(TypesWards.EDIT_WARDS, data);
export const deleteWardAction = (data) =>
    createAction(TypesWards.DELETE_WARDS, data);
export const searchWardAction = (data) =>
    createAction(TypesWards.SEARCH_WARDS, data);
