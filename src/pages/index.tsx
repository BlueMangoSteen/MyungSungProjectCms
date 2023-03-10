import { useDashboard } from "@/client/dashboard";
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import CalendarSample from "@/components/page/index/calendar-sample";
import StatisticSample from "@/components/page/index/statistic-sample";
import { useAuth } from "@/lib/auth/auth-provider";
import { Divider, Skeleton } from "antd";
import twStyledComponent from "tailwind-styled-components";

const pageHeader: IPageHeader = {
  title: "Welcome",
};

const IndexPage: IDefaultLayoutPage = () => {
  const { session } = useAuth();
  const { data } = useDashboard();

  return (
    <>
      <MainPageSubTitle className="text-xl">
        π {session.user.name || "κ΄λ¦¬μ"}λ μλνμΈμ! νλ³΅ν νλ£¨ λ³΄λ΄μΈμ
      </MainPageSubTitle>

      <MainPageStatistic className="mt-5">{data ? <StatisticSample data={data} /> : <Skeleton />}</MainPageStatistic>

      <Divider />

      <div className="mt-5">
        <div className="text-xl">λ¬λ ₯</div>
        <CalendarSample />
      </div>
    </>
  );
};

IndexPage.getLayout = getDefaultLayout;
IndexPage.pageHeader = pageHeader;

export default IndexPage;

const MainPageSubTitle = twStyledComponent.div`
  text-xl
`;

const MainPageStatistic = twStyledComponent.div`
  mt-5
`;
