import {Link} from "@nextui-org/link";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/navbar";
import {link as linkStyles} from "@nextui-org/theme";
import clsx from "clsx";

import {siteConfig} from "@/config/site";
import {ThemeSwitch} from "@/components/theme-switch";
import {GithubIcon,} from "@/components/icons";
import LoginButton from "@/components/login/loginButton.tsx";
import LogoutButton from "@/components/login/logoutButton.tsx";
import {useAuth0} from "@auth0/auth0-react";



export const Navbar = () => {
const { isAuthenticated } = useAuth0();

    return (
        <NextUINavbar maxWidth="xl"  position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
                <div className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <Link
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                    {!isAuthenticated && <LoginButton />}
                    {isAuthenticated && <LogoutButton />}
                </div>
            </NavbarContent>

            {/*<NavbarContent*/}
            {/*    className="hidden sm:flex basis-1/5 sm:basis-full"*/}
            {/*    justify="end"*/}
            {/*>*/}
            {/*    <NavbarItem className="hidden sm:flex gap-2">*/}
            {/*        <Link isExternal href={siteConfig.links.twitter} title="Twitter">*/}
            {/*            <TwitterIcon className="text-default-500" />*/}
            {/*        </Link>*/}
            {/*        <Link isExternal href={siteConfig.links.discord} title="Discord">*/}
            {/*            <DiscordIcon className="text-default-500" />*/}
            {/*        </Link>*/}
            {/*        <Link isExternal href={siteConfig.links.github} title="GitHub">*/}
            {/*            <GithubIcon className="text-default-500" />*/}
            {/*        </Link>*/}
            {/*        <ThemeSwitch />*/}
            {/*    </NavbarItem>*/}
            {/*</NavbarContent>*/}

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link isExternal href={siteConfig.links.github}>
                    <GithubIcon className="text-default-500" />
                </Link>
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index === siteConfig.navMenuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
