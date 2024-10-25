import { Button, Grid, Icon, IconButton } from '@material-ui/core'
import moment from 'moment'
import React, { useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import CustomTable from '../CustomTable'
import { useSelector } from 'react-redux'

const CertificateInformation = () => {

    // const { certificates } = useSelector(state => state.certificates)

    const [certificatesObject, setCertificatesObject] = useState({
        id: "",
        certificateName: "",
        issueDate: "",
        content: "",
        field: "",
        employeeId: ""
    })

    const handleChangeValue = (e) => {
        const value = e.target
        setCertificatesObject((prev) => [{
            ...prev,
            name: value
        }])
    }

    const handleCancel = () => {

    }
    const handleSubmit = () => {

    }

    const columns = [
        {
            title: "Thao tác",
            field: "custom",
            align: "center",
            maxWidth: "100px",
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
            title: "Tên văn bằng",
            field: "certificateName",
            align: "left",
            minWidth: "200px",
            maxWidth: "200px",
        },
        {
            title: "Ngày cấp",
            field: "issueDate",
            align: "center",
            minWidth: "100px",
            maxWidth: "100px",
            render: (data) => <span>
                {/* {moment(new Date(data?.issueDate)).format("DD/MM/YYYY")} */}
                date
            </span>,
        },
        {
            title: "Lĩnh vực",
            field: "field",
            align: "center",
            minWidth: "60px",
            maxWidth: "100px",
            // render: (data) => <span>{`${GENDER[data?.gender].name}`}</span>,
        },
        {
            title: "Nội dung",
            field: "content",
            align: "left",
            minWidth: "160px",
            // render: (data) => <span>{`${TEAMS[data?.team].name}`}</span>,
        }
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
                                Tên nhân viên
                            </span>
                        }
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeValue}
                        type="text"
                        name="name"
                        value={certificatesObject?.certificateName}
                        validators={["required"]}
                        errorMessages={[
                            "Tên nhân viên không được để trống"
                        ]}
                    />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className="stylePlaceholder"
                        label={
                            <span className="font">
                                <span className="text-red"> * </span>
                                Ngày cấp
                            </span>
                        }
                        onChange={handleChangeValue}
                        type="date"
                        name="issueDate"
                        value={
                            certificatesObject?.issueDate
                                ? moment(certificatesObject?.issueDate).format("YYYY-MM-DD")
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
                            "Ngày cấp không được để trống",
                        ]}
                    />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextValidator
                        className=" mt-2"
                        size="small"
                        label={
                            <span className="font">
                                <span className="text-red"> * </span>
                                Lĩnh vực
                            </span>
                        }
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeValue}
                        type="text"
                        name="field"
                        value={certificatesObject?.field}
                        validators={["required"]}
                        errorMessages={[
                            "Lĩnh vực không được để trống"
                        ]}
                    />
                </Grid>

                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <TextValidator
                        className=" stylePlaceholder mt-2"
                        size="small"
                        label={
                            <span className="font">
                                <span className="text-red"> * </span>
                                Nội dung
                            </span>
                        }
                        variant="outlined"
                        onChange={handleChangeValue}
                        type="text"
                        name="content"
                        fullWidth
                        value={certificatesObject?.content}
                        validators={["required"]}
                        errorMessages={[
                            "Nội dung không được để trống"
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

export default CertificateInformation