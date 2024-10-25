import React, { useEffect, useRef, useState } from "react";
import {
    DialogActions,
    Button,
    IconButton,
    Icon,
    Dialog,
    DialogTitle,
    DialogContent,
    Tab,
    Tabs,
    makeStyles,
    Box,
    Typography,
} from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/views/_style.scss";
import { toast } from "react-toastify";
import EmployeeInformation from "app/component/employeeTabs/EmployeeInformation";
import CertificateInformation from "app/component/employeeTabs/CertificateInfomation";
import FamilyInformation from "app/component/employeeTabs/FamilyInformation";
import { useDispatch } from "react-redux";
import { uploadFileRequest } from "app/redux/reducers/EmployeesReducer";

toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});

const useStyles = makeStyles({
    titleDialog: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
});

const AddEmployeeDialog = ({
    open,
    setOpen,
    employeeData,
    setEmployeeData,
}) => {
    const refInformation = useRef();
    const classes = useStyles();
    const dispatch = useDispatch()
    const [statusTabs, setStatusTabs] = useState(1);
    const [changeTab, setChangeTab] = useState(false);
    // const { employee } = useSelector(
    //     (state) => state.employees
    // );

    const [employeeObject, setEmployeeObject] = useState({
        id: "",
        name: "",
        code: "",
        email: "",
        gender: "",
        dateOfBirth: "",
        address: "",
        team: "",
        image: "",
        phone: "",
        citizenIdentificationNumber: "",
        employeeFamilyDtos: [],
        certificatesDto: [],
        ethnic: "",
        religion: "",
        dateOfIssuanceCard: "",
        placeOfIssueCard: "",
    });

    useEffect(() => {
        if (employeeData?.id) {
            setEmployeeObject({
                ...employeeObject,
                ...employeeData
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [employeeData])

    const handleChangeValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setEmployeeObject({
                    ...employeeObject,
                    [name]: reader.result,
                });
                dispatch(uploadFileRequest(file))
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setEmployeeObject({ ...employeeObject, [name]: value });
        }
    };

    const handleChangeTab = (e, newTab) => {
        if (changeTab) {
            setStatusTabs(newTab)
        } else if (newTab !== 1) {
            toast.error("Vui lòng lưu thông tin nhân viên trước!")
        }
        setStatusTabs(newTab)

    }

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleSubmitForm = () => {
        if (statusTabs === 1) refInformation.current.submit();
    };

    return (
        <Dialog open={open} maxWidth="md" fullWidth={true}>
            <DialogTitle id="draggable-dialog-title">
                <Box className={classes.titleDialog}>
                    <Typography variant="h5" color="textPrimary">
                        {employeeObject?.id ? "Cập nhật nhân viên" : "Tạo mới nhân viên"}
                    </Typography>
                    <IconButton
                        className="position-absolute r-10 t-10"
                        onClick={handleCloseDialog}
                    >
                        <Icon color="default" title="close">
                            close
                        </Icon>
                    </IconButton>
                </Box>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    value={statusTabs}
                    onChange={handleChangeTab}
                    centered
                >
                    <Tab
                        label="Thông tin nhân viên"
                        value={1}
                    />
                    <Tab
                        label="Thông tin chứng chỉ"
                        value={2}
                    />
                    <Tab
                        label="Quan hệ gia đình"
                        value={3}
                    />
                </Tabs>
            </DialogTitle>
            <DialogContent dividers>
                {statusTabs === 1 ? (
                    <EmployeeInformation
                        refInformation={refInformation}
                        employee={employeeObject}
                        setOpen={setOpen}
                        setChangeTab={setChangeTab}
                        handleChangeValue={handleChangeValue}
                    />
                ) : statusTabs === 2 ? (
                    <CertificateInformation employeeObject={employeeObject} />
                ) : (
                    statusTabs === 3 && <FamilyInformation />
                )}
            </DialogContent>
            <DialogActions>
                <div className="flex flex-space-between flex-middle mt-10">
                    <Button
                        variant="contained"
                        className="mr-12"
                        color="secondary"
                        onClick={handleCloseDialog}
                    >
                        Hủy
                    </Button>
                    {changeTab && (
                        <Button
                            variant="contained"
                            className="mr-12"
                            color="primary"
                            onClick={() => { }}
                        >
                            Đăng ký
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        className="mr-12"
                        color="primary"
                        onClick={handleSubmitForm}
                    >
                        Lưu
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default AddEmployeeDialog;
