import { Badge } from "@/components/ui/badge"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"


const items = [
  {
    title: "Home",
    url: "#",
    isActive: true,
  },
  {
    title: "Stages & Checklist",
    url: "#",
  },
  {
    title: "Upload Docs",
    url: "#",
  },
  {
    title: "Preferred Vendors",
    url: "#",
  },
  {
    title: "Tech Stack",
    url: "#",
  },
  {
    title: "Targets",
    url: "#",
  },
  {
    title: "Zee Sales Targets",
    url: "#",
  },
  {
    title: "MAI Settings",
    url: "#",
  },
  {
    title: "Pending Questions",
    url: "#",
    badge: "3",
  },
]

export function DashboardSidebar() {
  return (
    <Sidebar className="w-[280px]">
      <SidebarContent className="bg-[#11455D] font-inter">
        <SidebarGroup className="px-0 py-0">
          <div className="flex items-center px-6 py-6">
            
              <div className="text-white ml-4">
                <img src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1756553613/Group_vnvf2m.png" alt="weframetech" width={100} height={100}/>
              </div>
            </div>
         
          
          <SidebarGroupContent className="px-6 pt-2">
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`
                      w-full h-10 px-4 rounded-lg transition-all duration-200 font-inter justify-start
                      ${item.isActive 
                        ? 'bg-[#2DD4BF] bg-opacity-20 text-white hover:bg-[#2DD4BF] hover:bg-opacity-30' 
                        : 'text-[#8BB8C7] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between w-full cursor-default">        
                      <span className="text-[14px] font-normal">{item.title}</span>
                      {item.badge && (
                        <Badge className="bg-white text-[#0F4B5C] hover:bg-white text-[12px] font-semibold px-2 py-0.5 h-5 rounded-full min-w-[20px] flex items-center justify-center">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarFooter className="px-6 pb-6 mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                className="w-full h-10 px-4 rounded-lg text-[#8BB8C7] hover:bg-[rgba(255,255,255,0.05)] hover:text-white transition-all duration-200 font-inter justify-start"
              >
                <div className="flex items-center gap-3 cursor-default">
                  <span className="text-[14px] font-normal">Logout</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}