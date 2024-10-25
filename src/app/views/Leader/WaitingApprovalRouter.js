import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";
import ConstantList from "../../appConfig";
import { withTranslation } from 'react-i18next';

const WaitingApproval = EgretLoadable({
  loader: () => import("./WaitingApproval")
});

const ViewComponent = withTranslation()(WaitingApproval);
const waitingApprovalRouters = [
  {
    path: ConstantList.ROOT_PATH + "waiting-approval",
    component: ViewComponent,
    auth: authRoles.admin
  }
];

export default waitingApprovalRouters;
