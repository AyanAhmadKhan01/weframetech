import {
  Card,
} from "../ui/card";
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, Check, Circle } from "lucide-react";
import Image from "next/image";

const completedSteps = [
  { title: "Profile Setup", completed: true },
  { title: "Initial Training", completed: true },
  { title: "Legal Documents", completed: true }
];

const remainingSteps = [
  { title: "Financial Integration", completed: false },
  { title: "Final Review", completed: false }
];

const franchiseStages = [
  { title: "Stage 1 (Initial Inquiry)", color: "#1F7EAA", count: "02", width: "25%" },
  { title: "Stage 2 (Document Submission)", color: "#2FBDFF", count: "07", width: "35%" },
  { title: "Stage 3 (Training)", color: "#97DEFF", count: "05", width: "40%" }
];

const avatarData = [
  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=28&h=28&fit=crop&crop=face", fallback: "U1" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=28&h=28&fit=crop&crop=face", fallback: "U2" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=28&h=28&fit=crop&crop=face", fallback: "U3" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=28&h=28&fit=crop&crop=face", fallback: "U4" }
];

const prospectLeads = [
  { 
    name: "Wade Warren", 
    stage: "Initial Inquiry", 
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", 
    fallback: "WW" 
  },
  { 
    name: "Ava Wright", 
    stage: "Initial Inquiry", 
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face", 
    fallback: "AW" 
  },
  { 
    name: "Cody Fisher", 
    stage: "Initial Inquiry", 
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face", 
    fallback: "CF" 
  }
];

export default function Overview() {
  return (
    <div className="font-inter bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 w-full p-4 md:p-6">
        
        <Card className="bg-white border border-[#EAECF0] rounded-[12px] ml-2 p-4 md:p-6 xl:row-span-2 md:col-span-2 xl:col-span-1">
          <div className="h-full">
            <h2 className="text-[18px] md:text-[20px] font-semibold text-[#101828] mb-6 md:mb-8 font-inter">Account Progress</h2>
            
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px]">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#F2F4F7"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#2E90FA"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${85 * 2.51} 251`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[28px] md:text-[32px] font-bold text-[#101828] font-inter">85%</span>
                </div>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#101828] mb-3 md:mb-4 font-inter">Steps Completed</h3>
              <div className="space-y-4">
                {completedSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Circle className="w-2 h-2 fill-[#D0D5DD] text-[#D0D5DD]" />
                    <span className="text-[14px] text-[#475467] flex-1 font-inter">{step.title}</span>
                    <div className="w-5 h-5 bg-[#12B76A] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#101828] mb-3 md:mb-4 font-inter">Steps Remaining</h3>
              <div className="space-y-4">
                {remainingSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Circle className="w-2 h-2 fill-[#D0D5DD] text-[#D0D5DD]" />
                    <span className="text-[14px] text-[#475467] flex-1 font-inter">{step.title}</span>
                    <div className="w-5 h-5 border border-[#D0D5DD] rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white border border-[#EAECF0] rounded-[12px]  p-4 md:p-6">
          <div>
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#101828] mb-3 md:mb-4 font-inter">Total Franchisees Onboard</h2>
            <div className="flex items-start justify-between mb-4 md:mb-4">
              <div className="flex items-center gap-5">
              <span className="text-[36px] md:text-[48px] font-bold text-[#101828] leading-[44px] md:leading-[56px] font-inter">14</span>
              <Badge className="border-[#079455] bg-transparent text-[#079455] border-2 px-2 md:px-2.5 py-1 text-[11px] md:text-[12px] font-medium rounded-[16px] flex items-center gap-1">
                  <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#079455]" />
                  7.4%
                </Badge>   
                </div>
              <div className="flex items-center gap-2">
              
                <div className="flex -space-x-1.5 md:-space-x-2">
                  {avatarData.map((avatar, index) => (
                    <Avatar key={index} className="w-5 h-5 md:w-7 md:h-7 border-2 border-white">
                      <AvatarImage src={avatar.src} />
                      <AvatarFallback className="text-xs">{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="w-5 h-5 md:w-7 md:h-7 bg-[#F2F4F7] border-2 border-white rounded-full flex items-center justify-center text-[9px] md:text-[11px] font-medium text-[#475467]">
                    +7
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-1 mb-3 md:mb-4">
              {franchiseStages.map((stage, index) => (
                <div key={index} className="h-2 md:h-2.5 rounded-full" style={{backgroundColor: stage.color, width: stage.width}}></div>
              ))}
            </div>

            <div className="space-y-2 md:space-y-3">
              {franchiseStages.map((stage, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{backgroundColor: stage.color}}></div>
                    <span className="text-[12px] md:text-[14px] text-[#475467] font-inter">{stage.title}</span>
                  </div>
                  <span className="text-[16px] md:text-[18px] font-bold text-[#101828] font-inter">{stage.count}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-white border border-[#EAECF0] rounded-[12px]  p-4 md:p-6">
          <div>

          
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#101828] mb-3 md:mb-4 font-inter">Key Insights & Feedback</h2>
            
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <div>
                <span className="text-[36px] md:text-[48px] font-bold text-[#101828] leading-[44px] md:leading-[56px] font-inter">10%</span>
                <p className="text-[12px] md:text-[14px] text-[#475467] font-inter">Sales Growth</p>
              </div>
              <div className="flex flex-col items-center gap-1 md:gap-2">
                
                  <Image 
                    src="/5b020e0cc17d6289b9cb15c825b8273b3b20636a.png" 
                    width={20} 
                    height={20} 
                    alt="Achievement badge" 
                    className="w-12 h-12 md:w-6 md:h-6 scale-125"
                  />
               
                <Badge className="bg-[#D5F2FF80] text-[#279DD4] border-2 border-[#BAE9FF] px-2 md:px-3 py-1 text-[11px] md:text-[12px] font-medium rounded-[16px]">
                  Top Performer
                </Badge>
              </div>
            </div>


            <div className="bg-[#F6F7FB] rounded-2xl p-5">
    
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#101828] mb-2 md:mb-3 font-inter">Feedback</h3>
              <div className="flex gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#D0D5DD] rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                <p className="text-[12px] md:text-[14px] text-[#475467] leading-[18px] md:leading-[20px] font-inter">
                  Franchisees are requesting more detailed training materials.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white border border-[#EAECF0] rounded-[12px] p-4 md:p-6">
          <div>
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#101828] mb-3 md:mb-4 font-inter">Financial Wellbeing</h2>
            
            <div className="flex items-start justify-between mb-2">
              <span className="text-[36px] md:text-[48px] font-bold text-[#101828] leading-[44px] md:leading-[56px] font-inter">20</span>
              <Badge className="bg-[#ECFDF3] text-[#067647] border-0 px-2 md:px-2.5 py-1 text-[11px] md:text-[12px] font-medium rounded-[16px] flex items-center gap-1">
                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
                2.1%
              </Badge>
            </div>
            <p className="text-[12px] md:text-[14px] text-[#475467] mb-4 md:mb-6 font-inter">Total Franchisees</p>
            <hr  className="mb-6"/>
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
  <div className="w-full md:w-1/2 rounded-[8px] p-3 md:p-4 bg-[#F6F7FB]">
    <div className="mb-1 md:mb-2">
      <span className="text-[12px] md:text-[14px] text-[#475467] font-inter">Target</span>
    </div>
    <div>
      <span className="text-[20px] md:text-[24px] font-bold text-[#101828] font-inter">
        $500,000
      </span>
    </div>
  </div>

  <div className="w-full md:w-1/2 rounded-[8px] p-3 md:p-4 bg-[#F6F7FB]">
    <div className="mb-1 md:mb-2">
      <span className="text-[12px] md:text-[14px] text-[#475467] font-inter">Current</span>
    </div>
    <div>
      <span className="text-[20px] md:text-[24px] font-bold text-[#101828] font-inter">
        $450,000
      </span>
    </div>
  </div>
</div>
</div>

        </Card>

        <Card className="bg-white border border-[#EAECF0] rounded-[12px] p-4 md:p-6">
          <div>
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#101828] mb-4 md:mb-6 font-inter">Prospect Leads</h2>
            
            <div className="space-y-3 md:space-y-5">
              {prospectLeads.map((lead, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 bg-[#F6F7FB] p-3 rounded-lg">
                  <Avatar className="w-8 h-8 md:w-10 md:h-10">
                    <AvatarImage src={lead.src} />
                    <AvatarFallback className="text-xs md:text-sm font-medium">{lead.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-[14px] md:text-[16px] font-semibold text-[#101828] font-inter">{lead.name}</p>
                    <p className="text-[12px] md:text-[14px] text-[#667085] font-inter">
                      Stage: {lead.stage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
