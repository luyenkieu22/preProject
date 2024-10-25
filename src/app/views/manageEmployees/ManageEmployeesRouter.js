import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";
import ConstantList from "../../appConfig";
import { withTranslation } from 'react-i18next';

const ManageEmployees = EgretLoadable({
  loader: () => import("./ManageEmployees")
});

const ViewEmployees = withTranslation()(ManageEmployees);
const manageEmployeesRoutes = [
  {
    path: ConstantList.ROOT_PATH + "manage-employees",
    component: ViewEmployees,
    auth: authRoles.admin
  }
];

export default manageEmployeesRoutes;
