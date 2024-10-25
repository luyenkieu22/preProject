import {
    Button,
    Grid,
    Icon,
    IconButton,
    Input,
    InputAdornment,
} from "@material-ui/core";
import CustomTable from "app/component/CustomTable";
import { deleteEmployeeAction, searchEmployeesAction } from "app/redux/actions/employeesAction";
import { Breadcrumb } from "egret";
import SearchIcon from "@material-ui/icons/Search";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import AddEmployeeDialog from "./AddEmployeeDialog";
import moment from "moment";
import { GENDER, STATUS, TEAMS } from "app/const/statusEmployee";
import { useConfirm } from "app/component/useConfirm";



const AddEmployee = ({ t }) => {
    const title = t("Dashboard.category");
    const [pagnition, setPagnition] = useState({
        page: 0,
        rowsPerPage: 10,
    });
    const [openDialog, setOpenDialog] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [employeeData, setEmployeeData] = useState({})
    const dispatch = useDispatch();
    const { employees, totalElements, isLoading } = useSelector(
        (state) => state.employees
    );
    const [ConfirmDialog, confirm] = useConfirm(
        "Xác nhận xóa",
        "Bạn có chắc chắn muốn xóa nhân viên này?"
    )

    const fetchEmployeesData = useCallback((keyword) => {
        const data = {
            keyword: keyword,
            pageIndex: pagnition.page + 1,
            pageSize: pagnition.rowsPerPage,
            listStatus: "3,2,4,1",
        };
        dispatch(searchEmployeesAction(data));
    }, [dispatch, pagnition.page, pagnition.rowsPerPage]);

    useEffect(() => {
        fetchEmployeesData(keyword);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchEmployeesData, isLoading]);

    const handleSearchEmployee = () => {
        fetchEmployeesData();
    };

    const handleOpenDialog = (data) => {
        setOpenDialog(true);
        setEmployeeData(data)
    }

    const handleRemoveEmployee = async (data) => {
        const ok = await confirm()
        if (!ok) return;
        dispatch(deleteEmployeeAction(data.id))
    }

    const columns = [
        {
            title: "Thao tác",
            field: "custom",
            align: "center",
            maxWidth: "100px",
            render: (rowData) => {
                return (
                    <div className="">
                        <IconButton size="small" onClick={() => handleOpenDialog(rowData)}>
                            <Icon fontSize="small" color="primary">
                                edit
                            </Icon>
                        </IconButton>
                        <IconButton size="small" onClick={() => handleRemoveEmployee(rowData)}>
                            <Icon fontSize="small" color="error">
                                delete
                            </Icon>
                        </IconButton>
                    </div>
                );
            },
        },
        {
            title: "STT",
            align: "center",
            maxWidth: "60px",
            render: (data) => data.tableData.id + 1 + pagnition.page * pagnition.rowsPerPage,
        },
        {
            title: "Mã nhân viên",
            field: "code",
            align: "center",
            minWidth: "120px",
            maxWidth: "120px",
        },
        {
            title: "Tên nhân viên",
            field: "name",
            align: "left",
            minWidth: "200px",
            maxWidth: "200px",
        },
        {
            title: "Ngày sinh",
            field: "dateOfBirth",
            align: "center",
            minWidth: "100px",
            maxWidth: "100px",
            render: (data) => <span>{moment(new Date(data?.dateOfBirth)).format("DD/MM/YYYY")}</span>,
        },
        {
            title: "Giới tính",
            field: "gender",
            align: "center",
            minWidth: "60px",
            maxWidth: "100px",
            render: (data) => <span>{`${GENDER[data?.gender].name}`}</span>,
        },
        {
            title: "Nhóm",
            field: "team",
            align: "left",
            minWidth: "160px",
            render: (data) => <span>{`${TEAMS[data?.team].name}`}</span>,
        },
        {
            title: "SĐT",
            field: "phone",
            align: "center",
            minWidth: "130px",
            maxWidth: "140px",
        },
        {
            title: "Địa chỉ",
            field: "address",
            align: "left",
            minWidth: "200px",
            maxWidth: "250px"
        },
        {
            title: "Trạng thái",
            field: "submitProfileStatus",
            align: "left",
            minWidth: "140px",
            render: (data) => <span>{`${STATUS[data?.submitProfileStatus].name}`}</span>,
        },
    ];



    return (
        <div className="analytics m-sm-30">
            <ConfirmDialog />
            <div className="mb-sm-30">
                <Helmet>
                    <title>
                        {title} | {t("web_site")}
                    </title>
                </Helmet>
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { id: 1, name: title },
                            { id: 2, name: t("manage.add_employees") },
                        ]}
                    />
                </div>
            </div>
            <Grid container spacing={2} justify="space-between">
                <Grid item lg={5} md={5} sm={5} xs={12}>
                    <Button
                        className="my-6 align-bottom"
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={handleOpenDialog}
                    >
                        Thêm mới
                    </Button>
                </Grid>
                <Grid item lg={3} md={4} xs={12}>
                    <Input
                        name="keyword"
                        placeholder="Nhập từ cần tìm kiếm"
                        onChange={e => setKeyword(e.target.value.toLowerCase())}
                        className="w-100 my-6"
                        endAdornment={
                            <InputAdornment>
                                <SearchIcon style={{ cursor: "pointer" }} onClick={handleSearchEmployee} />
                            </InputAdornment>
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTable
                        data={
                            employees.data
                                ? employees.data.map((employee) => ({ ...employee }))
                                : []
                        }
                        columns={columns}
                        totalElements={totalElements}
                        pagnition={pagnition}
                        setPagnition={setPagnition}
                        t={t}
                    />
                </Grid>
            </Grid>
            <AddEmployeeDialog open={openDialog} setOpen={setOpenDialog} employeeData={employeeData} setEmployeeData={setEmployeeData} />
        </div>
    );
};

export default AddEmployee;
