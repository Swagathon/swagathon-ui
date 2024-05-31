import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { MountainIcon } from "@/components/icons";
import { MenuIcon } from "lucide-react";
import SwagathonTextLogo from "@/components/logos/swagathon-text-logo";
import { HStack } from "@chakra-ui/react";
import SwagathonImageLogo from "../logos/swagathon-image-logo";

export function HeaderTitle() {
  return (
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
      <HStack>
        <SwagathonImageLogo width={48} height={48} alt="Logo" />
        <SwagathonTextLogo />
      </HStack>
    </Link>
  );
}
