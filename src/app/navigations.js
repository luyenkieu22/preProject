import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "dashboard",
    path: ConstantList.ROOT_PATH + "home",
    isVisible: true,
  },
  {
    name: "Dashboard.category",
    icon: "category",
    path: "",
    isVisible: true,
    children: [
      {
        name: "manage.add_employees",
        path: ConstantList.ROOT_PATH + "add-employee",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "manage.employees",
        path: ConstantList.ROOT_PATH + "manage-employees",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "manage.end_employees",
        path: ConstantList.ROOT_PATH + "end-employee",
        icon: "keyboard_arrow_right",
        isVisible: true,
      }
    ]
  },
  {
    name: "Dashboard.manage",
    isVisible: true,
    path: "",
    icon: "engineering",
    children: [
      {
        name: "leader.waiting_approval",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "waiting-approval",
        icon: "keyboard_arrow_right"
      },
      {
        name: "leader.leader_approval",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "leader-approval",
        icon: "keyboard_arrow_right"
      }
    ]
  }
];
