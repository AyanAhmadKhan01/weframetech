import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="max-w-full w-[100%] flex flex-col">
        <div className="flex items-center gap-4 ml-auto p-3">
          <Settings size={20} color="#5E718D" />
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=28&h=28&fit=crop&crop=face" />
            <AvatarFallback>...</AvatarFallback>
          </Avatar>
        </div>
        <Separator />
      </div>
    </>
  );
}
