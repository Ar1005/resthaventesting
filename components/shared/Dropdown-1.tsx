import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { Separator } from "../ui/separator";

export function ImmediateNeed() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center text-white hover:text-[#6c9c81] transition-all delay-25 cursor-pointer">
          Urgent Assistance
          <TiArrowSortedDown className="h-4 w-4 pl-1" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#6c9c81] border-none text-neutral-100">
        <DropdownMenuGroup>
          <Link
            href="/Immediate-Need"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">
              Immediate Need
            </DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Immediate-Need/Who-To-Call-First"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">Who To Call First</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
