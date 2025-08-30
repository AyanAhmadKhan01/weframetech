import { DashboardSidebar } from "@/components/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/navbar/navbar";
import Overview from "@/components/overview/overview";
import { SidebarInset } from "@/components/ui/sidebar";
import Uploads from "@/components/overview/upload";

export default function Home() {
  return (
    <>
      <SidebarProvider>
        <DashboardSidebar />
         <SidebarInset>
        <Navbar />
        <Overview/>
        <Uploads />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
