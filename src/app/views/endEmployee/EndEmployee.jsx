import { Grid } from "@material-ui/core";
import { Breadcrumb } from "egret";
import React from "react";
import { Helmet } from "react-helmet";

const EndEmployee = ({ t }) => {
    const title = t('Dashboard.category')
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
                        { id: 2, name: t('manage.end_employees') }
                    ]} />
                </div>
            </div>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>Kết thúc nhân viên</Grid>
            </Grid>
        </div>
    )
}

export default EndEmployee
