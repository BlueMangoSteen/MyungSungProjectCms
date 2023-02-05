import { ChevronLeft, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import twStyledComponent from "tailwind-styled-components";
import style from "./default-layout.module.css";
import MainMenu from "./main-menu";
import Profile from "./profile";

interface ISidebarProps {
  isShowSidebar: boolean;
  hideSidebar: () => void;
}

const Sidebar = ({ isShowSidebar, hideSidebar }: ISidebarProps) => {
  const { sidebar } = style;
  return (
    <SideBarContainer className={`hidden ${style.sidebar} ${isShowSidebar ? "sm:block" : "hidden"}`}>
      <SideBarArea>
        <ProfileContainer>
          <ProfileAvatar>
            <Link href="/" className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-turquoise">
              준규
            </Link>
          </ProfileAvatar>
          <ProfileContent>
            <Profile />
          </ProfileContent>
        </ProfileContainer>

        <MainMenuContainer>
          <MainMenu />
        </MainMenuContainer>

        <div>
          <BottomContainer>
            <SidebarHiddenBtn onClick={hideSidebar}>
              <ChevronLeft className="w-3 h-3" />
              <MenuIcon className="w-5 h-5" />
            </SidebarHiddenBtn>
          </BottomContainer>
        </div>
      </SideBarArea>
    </SideBarContainer>
  );
};

export default React.memo(Sidebar);

const SideBarContainer = twStyledComponent.aside`
`;

const SideBarArea = twStyledComponent.div`
  flex 
  flex-col 
  h-full
`;

const ProfileContainer = twStyledComponent.div`
  flex
`;

const ProfileAvatar = twStyledComponent.div`
  shrink-0
`;

const ProfileContent = twStyledComponent.div`
  ml-1 
  grow
`;

const MainMenuContainer = twStyledComponent.div`
  overflow-auto 
  grow
`;

const BottomContainer = twStyledComponent.div`
  flex 
  justify-end
`;

const SidebarHiddenBtn = twStyledComponent.button`
  flex 
  items-center 
  justify-center 
  w-12 
  h-12 
  rounded 
  enable-transition 
  hover:bg-gray-200
`;
