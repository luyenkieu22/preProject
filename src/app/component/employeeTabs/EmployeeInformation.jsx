import React, { useEffect } from "react";
import { IconButton, Grid, MenuItem } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/views/_style.scss";
import { toast } from "react-toastify";
import {
    SelectValidator,
    TextValidator,
    ValidatorForm,
} from "react-material-ui-form-validator";
import moment from "moment";
import { PhotoCamera } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
    addEmployeeAction,
    editEmployeeAction,
} from "app/redux/actions/employeesAction";

toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});

const EmployeeInformation = ({
    refInformation,
    employee,
    handleChangeValue,
    setOpen,
    setChangeTab,
}) => {
    const dispatch = useDispatch();
    const { file } = useSelector((state) => state.employees);

    useEffect(() => {
        ValidatorForm.addValidationRule(
            "validatorLengthName",
            (value) => value?.length <= 30
        );
        ValidatorForm.addValidationRule(
            "validatorCitizenIdentificationNumber",
            (value) => {
                return value?.length === 12;
            }
        );
        ValidatorForm.addValidationRule("dateOfBirthValidator", (value) => {
            const nowDate = new Date().getFullYear();
            const birthDate = new Date(value)?.getFullYear();
            const result = nowDate - birthDate;
            return result >= 18;
        });

        return () => {
            ValidatorForm.removeValidationRule("validatorLengthName");
            ValidatorForm.removeValidationRule(
                "validatorCitizenIdentificationNumber"
            );
            ValidatorForm.removeValidationRule("dateOfBirthValidator");
        };
    }, []);

    const handleSubmit = () => {
        if (employee?.id) {
            dispatch(editEmployeeAction(employee, file));
        } else {
            dispatch(addEmployeeAction(employee, file));
        }
        setOpen(false);
        setChangeTab(true);
    };

    return (
        <ValidatorForm onSubmit={handleSubmit} ref={refInformation}>
            <Grid container spacing={2}>
                <Grid
                    container
                    item
                    className="container-avatar"
                    alignItems="center"
                    direction="column"
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                >
                    <Grid item>
                        <img className="avatar" alt="Avatar" src={employee.image} />
                    </Grid>
                    <Grid item>
                        <input
                            className={"hidden"}
                            type="file"
                            accept="image/*"
                            id="icon-button-file"
                            name="image"
                            onChange={handleChangeValue}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                            >
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Grid>
                </Grid>
                <Grid container item spacing={2} md={8} lg={8} xs={12} sm={12}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder mt-2"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Mã nhân viên
                                </span>
                            }
                            variant="outlined"
                            value={employee.code || ""}
                            onChange={handleChangeValue}
                            type="text"
                            name="code"
                            validators={["required"]}
                            errorMessages={["Mã nhân viên không được để trống"]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder mt-2"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Tên nhân viên
                                </span>
                            }
                            variant="outlined"
                            onChange={handleChangeValue}
                            type="text"
                            name="name"
                            value={employee.name}
                            validators={["required", "validatorLengthName"]}
                            errorMessages={[
                                "Tên nhân viên không được để trống",
                                "Tên nhân viên quá dài",
                            ]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder mt-2"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Email
                                </span>
                            }
                            variant="outlined"
                            onChange={handleChangeValue}
                            type="email"
                            name="email"
                            value={employee.email}
                            validators={["required", "isEmail"]}
                            errorMessages={[
                                "Email không được để trống",
                                "Email sai định dạng",
                            ]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Ngày sinh
                                </span>
                            }
                            onChange={handleChangeValue}
                            type="date"
                            name="dateOfBirth"
                            value={
                                employee?.dateOfBirth
                                    ? moment(employee?.dateOfBirth).format("YYYY-MM-DD")
                                    : ""
                            }
                            fullWidth
                            variant="outlined"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            validators={["required", "dateOfBirthValidator"]}
                            errorMessages={[
                                "Ngày sinh không được để trống",
                                "Bạn chưa đủ 18 tuổi",
                            ]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <SelectValidator
                            className="w-100 stylePlaceholder"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Giới tính
                                </span>
                            }
                            variant="outlined"
                            type="text"
                            name="gender"
                            value={employee.gender}
                            onChange={handleChangeValue}
                            validators={["required"]}
                            errorMessages={["Giới tính không được để trống"]}
                        >
                            <MenuItem value={1}>Nam</MenuItem>
                            <MenuItem value={2}>Nữ</MenuItem>
                            <MenuItem value={3}>Khác</MenuItem>
                        </SelectValidator>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <SelectValidator
                            className="w-100 stylePlaceholder"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Nhóm
                                </span>
                            }
                            variant="outlined"
                            type="text"
                            name="team"
                            value={employee.team}
                            onChange={handleChangeValue}
                            validators={["required"]}
                            errorMessages={["Nhóm không được để trống"]}
                        >
                            <MenuItem value={1}>Nhóm T1</MenuItem>
                            <MenuItem value={2}>Nhóm T2</MenuItem>
                            <MenuItem value={3}>Nhóm T3</MenuItem>
                            <MenuItem value={4}>Nhóm T4</MenuItem>
                        </SelectValidator>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    SĐT
                                </span>
                            }
                            variant="outlined"
                            onChange={handleChangeValue}
                            type="number"
                            name="phone"
                            value={employee.phone}
                            validators={[
                                "required",
                                "matchRegexp:^(03|05|07|08|09)\\d{8}$|^\\+84(3|5|7|8|9)\\d{8}$",
                            ]}
                            errorMessages={[
                                "Số điện thoại không được để trống",
                                "Số điện thoại không đúng",
                            ]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    CCCD
                                </span>
                            }
                            variant="outlined"
                            onChange={handleChangeValue}
                            type="number"
                            name="citizenIdentificationNumber"
                            value={employee?.citizenIdentificationNumber}
                            validators={["required", "validatorCitizenIdentificationNumber"]}
                            errorMessages={[
                                "Số CCCD không được để trống",
                                "Số CCCD phải đủ 12 số",
                            ]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Ngày cấp
                                </span>
                            }
                            onChange={handleChangeValue}
                            type="date"
                            name="dateOfIssuanceCard"
                            value={
                                employee?.dateOfIssuanceCard
                                    ? moment(employee?.dateOfIssuanceCard).format("YYYY-MM-DD")
                                    : ""
                            }
                            fullWidth
                            variant="outlined"
                            size="small"
                            inputProps={{
                                max: moment().format("YYYY-MM-DD"),
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            validators={["required"]}
                            errorMessages={["Ngày cấp không được để trống"]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Nơi cấp
                                </span>
                            }
                            variant="outlined"
                            onChange={handleChangeValue}
                            type="text"
                            name="placeOfIssueCard"
                            value={employee.placeOfIssueCard}
                            validators={["required"]}
                            errorMessages={["Nơi cấp không được để trống"]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Dân tộc
                                </span>
                            }
                            variant="outlined"
                            onChange={handleChangeValue}
                            type="text"
                            name="ethnic"
                            value={employee.ethnic}
                            validators={["required"]}
                            errorMessages={["Dân tộc không được để trống"]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Tôn giáo
                                </span>
                            }
                            variant="outlined"
                            onChange={handleChangeValue}
                            type="text"
                            name="religion"
                            value={employee.religion}
                            validators={["required"]}
                            errorMessages={["Tôn giáo không được để trống"]}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextValidator
                            className="w-100 stylePlaceholder"
                            size="small"
                            label={
                                <span className="font">
                                    <span className="text-red"> * </span>
                                    Địa chỉ
                                </span>
                            }
                            variant="outlined"
                            onChange={handleChangeValue}
                            type="text"
                            name="address"
                            value={employee.address}
                            validators={["required"]}
                            errorMessages={["Địa chỉ không được để trống"]}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </ValidatorForm>
    );
};

export default EmployeeInformation;
