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
  
  export function WhoWeAre() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild >
          <div className="text-white flex items-center justify-center hover:text-neutral-100 cursor-pointer transition-all delay-100 px-4 py-2 border rounded-full border-[#6c9c81] hover:bg-[#6c9c81]">
            Who We Are
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#6c9c81] border-none text-neutral-100">
          <DropdownMenuGroup>
            <Link
              href="/About-Us"
              className="hover:text-neutral-900 transition-all delay-25"
            >
              <DropdownMenuItem className="cursor-pointer">
                About Us
              </DropdownMenuItem>
            </Link>
            <Separator />
            <Link
              href="/Contact-Us"
              className="hover:text-neutral-900 transition-all delay-25"
            >
              <DropdownMenuItem className="cursor-pointer">
                Contact Us
              </DropdownMenuItem>
            </Link>
            <Separator />
            <Link
              href="/Who-We-Are/Our-Promise"
              className="hover:text-neutral-900 transition-all delay-25"
            >
              <DropdownMenuItem className="cursor-pointer">
                Our Promise To You
              </DropdownMenuItem>
            </Link>
            <Separator />
            <Link
              href="/Who-We-Are/Career"
              className="hover:text-neutral-900 transition-all delay-25"
            >
              <DropdownMenuItem className="cursor-pointer">Careers</DropdownMenuItem>
            </Link>
            <Separator />
            <Link
              href="/Who-We-Are/Communities"
              className="hover:text-neutral-900 transition-all delay-25"
            >
              <DropdownMenuItem className="cursor-pointer">Communities We Serve</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  