'use client'

import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";
import Image from "next/image";
import {AuthContext} from '@/app/Context/authContext';
import {useContext} from "react";

export default function NavigationBar() {
    const {user} = useContext(AuthContext);
    return (
        <Navbar className="bg-transparent" position="static">
            <NavbarBrand>
                <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {/*<NavbarItem>*/}
                {/*    <Link color="foreground" href="#">*/}
                {/*        Features*/}
                {/*    </Link>*/}
                {/*</NavbarItem>*/}
                {/*<NavbarItem isActive>*/}
                {/*    <Link href="#" aria-current="page">*/}
                {/*        Customers*/}
                {/*    </Link>*/}
                {/*</NavbarItem>*/}
                {/*<NavbarItem>*/}
                {/*    <Link color="foreground" href="#">*/}
                {/*        Integrations*/}
                {/*    </Link>*/}
                {/*</NavbarItem>*/}
            </NavbarContent>
            <NavbarContent justify="end">
                {!user && (
                    <>
                        <NavbarItem className="hidden lg:flex">
                            <Link href="/login" className="text-[#6F7378] underline gap-1">
                                Login
                                <Image
                                src="/assets/icons/link.svg"
                                alt="Link"
                                width={20}
                                height={20}
                                />
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} href="signup" className="bg-black" variant="shadow" size="lg">
                                <p className="text-sm font-bold text-white">Sign up</p>
                            </Button>
                        </NavbarItem>
                    </>
                )}
                {user && (
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name={user.name}
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">user.email</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                )}
            </NavbarContent>
        </Navbar>
    );
}