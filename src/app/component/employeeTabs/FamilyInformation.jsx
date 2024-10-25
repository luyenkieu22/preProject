import { Button, Grid, Icon, IconButton, MenuItem } from '@material-ui/core'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { SelectValidator, TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import CustomTable from '../CustomTable'

const FamilyInformation = () => {

    const [familyObject, setFamilyObject] = useState({
        id: "",
        name: "",
        gender: "",
        dateOfBirth: "",
        relationShip: "",
        citizenIdentificationNumber: "",
        address: "",
        email: "",
        employeeId: "",
        phoneNumber: ""
    })

    const handleChangeValue = (e) => {
        const { name, value } = e.target
        setFamilyObject((prev) => [{
            ...prev,
            [name]: value
        }])
    }

    const handleCancel = () => {

    }
    const handleSubmit = () => {

    }

    useEffect(() => {
        ValidatorForm.addValidationRule("citizenIdentificationNumberValidator", (value) => {
            return value?.length === 12
        })

        return () => {
            ValidatorForm.removeValidationRule("citizenIdentificationNumberValidator")
        }
    }, [])


    const columns = [
        {
            title: "Thao tác",
            field: "custom",
            align: "center",
            minWidth: "120px",
            maxWidth: "120px",
            render: () => {
                return (
                    <div className="">
                        <IconButton size="small">
                            <Icon fontSize="small" color="primary">
                                edit
                            </Icon>
                        </IconButton>
                        <IconButton size="small">
                            <Icon fontSize="small" color="error">
                                delete
                            </Icon>
                        </IconButton>
                    </div>
                );
            },
        },
        {
            title: "Tên người thân",
            field: "name",
            align: "left",
            minWidth: "160px",
        },
        {
            title: "Ngày sinh",
            field: "dateOfBirth",
            align: "center",
            minWidth: "120px",
            maxWidth: "120px",
            render: (data) => <span>
                {/* {moment(new Date(data?.issueDate)).format("DD/MM/YYYY")} */}
                date
            </span>,
        },
        {
            title: "Giới tính",
            field: "gender",
            align: "center",
            minWidth: "100px",
            maxWidth: "120px",
            // render: (data) => <span>{`${GENDER[data?.gender].name}`}</span>,
        },
        {
            title: "Quan hệ",
            field: "relationShip",
            align: "left",
            minWidth: "130px",
            // render: (data) => <span>{`${TEAMS[data?.team].name}`}</span>,
        },
        {
            title: "Số CCCD",
            field: "citizenIdentificationNumber",
            align: "left",
            minWidth: "140px",
            // render: (data) => <span>{`${TEAMS[data?.team].name}`}</span>,
        },
        {
            title: "SĐT",
            field: "phoneNumber",
            align: "left",
            minWidth: "120px",
            // render: (data) => <span>{`${TEAMS[data?.team].name}`}</span>,
        },
        {
            title: "Email",
            field: "email",
            align: "left",
            minWidth: "140px",
            // render: (data) => <span>{`${TEAMS[data?.team].name}`}</span>,
        },
        {
            title: "Địa chỉ",
            field: "address",
            align: "left",
            minWidth: "160px",
            // render: (data) => <span>{`${TEAMS[data?.team].name}`}</span>,
        },
    ];

    return (
        <ValidatorForm onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className="stylePlaceholder mt-2"
                        size="small"
                        label={
                            <span className="font">
                                <span className="text-red"> * </span>
                                Tên người thân
                            </span>
                        }
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeValue}
                        type="text"
                        name="name"
                        value={familyObject?.name}
                        validators={["required"]}
                        errorMessages={[
                            "Tên người thân không được để trống"
                        ]}
                    />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className="stylePlaceholder mt-2"
                        size="small"
                        label={
                            <span className="font">
                                <span className="text-red"> * </span>
                                SĐT
                            </span>
                        }
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeValue}
                        type="number"
                        name="phoneNumber"
                        value={familyObject?.phoneNumber}
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
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className="stylePlaceholder mt-2"
                        size="small"
                        label={
                            <span className="font">
                                <span className="text-red"> * </span>
                                Email
                            </span>
                        }
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeValue}
                        type="text"
                        name="email"
                        value={familyObject?.email}
                        validators={["required", "isEmail"]}
                        errorMessages={[
                            "Email không được để trống",
                            "Email sai định dạng"
                        ]}
                    />
                </Grid>

                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className="stylePlaceholder"
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
                            familyObject?.dateOfBirth
                                ? moment(familyObject?.dateOfBirth).format("YYYY-MM-DD")
                                : ""
                        }
                        fullWidth
                        variant="outlined"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        validators={["required"]}
                        errorMessages={[
                            "Ngày sinh không được để trống",
                        ]}
                    />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
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
                        value={familyObject?.gender}
                        onChange={handleChangeValue}
                        validators={["required"]}
                        errorMessages={["Giới tính không được để trống"]}
                    >
                        <MenuItem value={1}>Nam</MenuItem>
                        <MenuItem value={2}>Nữ</MenuItem>
                        <MenuItem value={3}>Khác</MenuItem>
                    </SelectValidator>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className=" stylePlaceholder mt-2"
                        size="small"
                        label={
                            <span className="font">
                                <span className="text-red"> * </span>
                                Quan hệ
                            </span>
                        }
                        variant="outlined"
                        onChange={handleChangeValue}
                        type="text"
                        name="relationShip"
                        fullWidth
                        value={familyObject?.relationShip}
                        validators={["required"]}
                        errorMessages={[
                            "Quan hệ không được để trống"
                        ]}
                    />
                </Grid>

                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className=" stylePlaceholder mt-2"
                        size="small"
                        label={
                            <span className="font">
                                <span className="text-red"> * </span>
                                Số CCCD
                            </span>
                        }
                        variant="outlined"
                        onChange={handleChangeValue}
                        type="number"
                        name="citizenIdentificationNumber"
                        fullWidth
                        value={familyObject?.citizenIdentificationNumber}
                        validators={["required", "citizenIdentificationNumberValidator"]}
                        errorMessages={[
                            "CCCD không được để trống",
                            "CCCD phải đủ 12 chữ số"
                        ]}
                    />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className=" stylePlaceholder mt-2"
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
                        fullWidth
                        value={familyObject?.address}
                        validators={["required"]}
                        errorMessages={[
                            "Địa chỉ không được để trống"
                        ]}
                    />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <Button
                        variant="contained"
                        className="mr-12"
                        color="secondary"
                        onClick={handleCancel}
                    >
                        Hủy
                    </Button>
                    <Button
                        variant="contained"
                        className="mr-12"
                        color="primary"
                        type='submit'
                    >
                        Lưu
                    </Button>
                </Grid>



                <Grid item xs={12}>
                    <CustomTable
                        data={[]}
                        columns={columns}
                    />
                </Grid>
            </Grid>

        </ValidatorForm>
    )
}

export default FamilyInformation