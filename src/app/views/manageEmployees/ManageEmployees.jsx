import { Grid } from "@material-ui/core";
import { Breadcrumb } from "egret";
import React from "react";
import { Helmet } from "react-helmet";

const ManageEmployee = ({ t }) => {
    const title = t('Dashboard.category');


    return (
        <div className="analytics m-sm-30">
            <div className="mb-sm-30">
                <Helmet>
                    <title>
                        {title} | {t('web_site')}
                    </title>
                </Helmet>
                <div className="mb-sm-30">
                    <Breadcrumb routeSegments={[
                        { id: 1, name: title },
                        { id: 2, name: t('manage.employees') }
                    ]} />
                </div>
            </div>
            <Grid container spacing={3} justify="space-between">
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    Quản lý nhân viên
                </Grid>

            </Grid>
        </div>
    )
}

export default ManageEmployee

