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

export function PlanAhead() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center text-white hover:text-[#6c9c81] transition-all delay-25 cursor-pointer">
          Future Planning
          <TiArrowSortedDown className="h-4 w-4 pl-1" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#6c9c81] border-none text-neutral-100">
        <DropdownMenuGroup>
          <Link
            href="/Personal-Planning-Organizer"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">
              Plan Ahead
            </DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Plan-Ahead/Pricing"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">
              Guaranteed Pricing & Packages
            </DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Plan-Ahead/Funeral"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">
              Funeral
            </DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Plan-Ahead/Cremation"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">Cremation</DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Plan-Ahead/Burial"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">Burial</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
