import { Divider } from "antd";
import { Home, List, Monitor } from "lucide-react";
import React from "react";
import Menu, { IMenu } from "./nav";

const mainMenuData: IMenu[] = [
  {
    name: "홈",
    icon: <Home className="w-5 h-5" />,
    link: {
      path: "/",
    },
  },
  {
    name: "학생 관리",
    icon: <List className="w-5 h-5" />,
    submenu: [
      {
        name: "학생 등록",
        link: {
          path: "/sample/profile",
        },
      },
      {
        name: "학생 목록",
        link: {
          path: "/sample/list",
          query: {
            text: "react",
          },
        },
      },
      {
        name: "학생 상세 정보",
        link: {
          path: "/sample/manage/user",
        },
      },
    ],
  },
];

const devMenuData: IMenu[] = [
  {
    name: "클래스 관리",
    icon: <Monitor className="w-5 h-5" />,
    submenu: [
      {
        name: "폼",
        link: {
          path: "/sample/form",
        },
      },
    ],
  },
];

const MainMenu = () => {
  return (
    <>
      <>
        <Divider orientation="left" plain>
          학생
        </Divider>

        <Menu data={mainMenuData} />
      </>
      <>
        <Divider orientation="left" plain>
          수업
        </Divider>

        <Menu data={devMenuData} />
      </>
    </>
  );
};

export default React.memo(MainMenu);
