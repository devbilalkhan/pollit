import route from "@/app/api/config/route";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export const dynamic = "force-dynamic";

async function Layout({ children }: LayoutProps) {
  const isAuthenticated = await getKindeServerSession().isAuthenticated();
  if (!isAuthenticated) {
    redirect(route.login);
  }
  return <>{children}</>;
}

export default Layout;
