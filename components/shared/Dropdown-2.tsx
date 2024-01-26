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

export function Resources() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center text-white hover:text-[#6c9c81] transition-all delay-25 cursor-pointer">
          Resources
          <TiArrowSortedDown className="h-4 w-4 pl-1" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#6c9c81] border-none text-neutral-100">
        <DropdownMenuGroup>
          <Link
            href="/Plan-Ahead"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">
              Benefit of Planning Ahead
            </DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Personal-Planning-Organizer"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">
              Personal Planning Organizer
            </DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Resources/Living-Will-Kit"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">
              Living Will Kit
            </DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Resources/Grief-Resources"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">
              Grief Resources
            </DropdownMenuItem>
          </Link>
          <Separator />
          <Link
            href="/Resources/FAQ"
            className="hover:text-neutral-900 transition-all delay-25"
          >
            <DropdownMenuItem className="cursor-pointer">FAQ</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
