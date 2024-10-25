import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";
import ConstantList from "../../appConfig";
import { withTranslation } from 'react-i18next';

const WaitingApproval = EgretLoadable({
  loader: () => import("./LeaderApproval")
});

const ViewComponent = withTranslation()(WaitingApproval);
const leaderApprovalRouters = [
  {
    path: ConstantList.ROOT_PATH + "leader-approval",
    component: ViewComponent,
    auth: authRoles.admin
  }
];

export default leaderApprovalRouters;
