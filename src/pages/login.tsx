import GradientBg from "@/components/page/login/gradient-bg";
import LoginForm from "@/components/page/login/login-form";
import { Verified } from "lucide-react";
import twStyledComponent from "tailwind-styled-components";

const LoginPage = () => {
  return (
    <WholeContainer>
      <LeftSideContainer>
        <GradientBg className="absolute top-0 left-0 w-full h-full" />
        <LogoImage src="/logo.png" alt="logo" />
        <Badge>
          <Verified width={18} height={18} />
          MYUNGSUNG ADMIN UI
        </Badge>
      </LeftSideContainer>

      <RightSideContainer>
        <LoginAreaContainer>
          <LoginAreaSection>
            <LoginAreaTitleContainer className="flex flex-col items-center justify-center px-2 mt-8 sm:mt-0">
              <LoginAreaTitle>명성학원</LoginAreaTitle>
              <LoginAreaSubtitle>MyungSung-Academy</LoginAreaSubtitle>
            </LoginAreaTitleContainer>
            <LoginFormContainer>
              <LoginForm />
            </LoginFormContainer>
          </LoginAreaSection>
        </LoginAreaContainer>
      </RightSideContainer>
    </WholeContainer>
  );
};

export default LoginPage;

const WholeContainer = twStyledComponent.div`
  flex 
  min-h-screen 
  bg-white 
  items-centerw-full
`;

const LeftSideContainer = twStyledComponent.div`
  relative 
  hidden 
  w-1/2 
  lg:block
`;

const LogoImage = twStyledComponent.img`
  absolute
  w-10
  h-10
  top-5
  left-5
`;

const Badge = twStyledComponent.div`
  absolute
  inline-flex
  items-center 
  gap-1 
  px-3 
  py-2 
  font-semibold 
  text-white 
  border-2 
  border-white 
  rounded-lg 
  left-5 
  bottom-5
`;

const RightSideContainer = twStyledComponent.div`
  w-full 
  lg:w-1/2
`;

const LoginAreaContainer = twStyledComponent.div`
  relative 
  flex 
  items-center 
  justify-center 
  h-full  
`;

const LoginAreaSection = twStyledComponent.section`
  w-full 
  px-5 
  pb-10 
  text-gray-800 
  sm:w-4/6 
  md:w-3/6 
  lg:w-4/6 
  xl:w-3/6 
  sm:px-0
`;

const LoginAreaTitleContainer = twStyledComponent.div`
  flex 
  flex-col 
  items-center 
  justify-center 
  px-2 
  mt-8 
  sm:mt-0
`;

const LoginAreaTitle = twStyledComponent.h2`
  mt-2 
  text-5xl 
  font-bold 
  leading-tight 
  inter
`;

const LoginAreaSubtitle = twStyledComponent.div`
  mt-1 
  text-lg 
  text-gray-400
`;

const LoginFormContainer = twStyledComponent.div`
  w-full 
  px-2 
  mt-12 
  sm:px-6
`;
