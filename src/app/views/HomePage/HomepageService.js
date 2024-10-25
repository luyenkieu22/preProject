import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";
import ConstantList from "../../appConfig";
import { withTranslation } from 'react-i18next';

const HomePage = EgretLoadable({
    loader: () => import("./HomePage")
});

const ViewEmployees = withTranslation()(HomePage);
const homePageRoutes = [
    {
        path: ConstantList.ROOT_PATH + "home",
        component: ViewEmployees,
        auth: authRoles.admin
    }
];

export default homePageRoutes;