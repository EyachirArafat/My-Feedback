import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { CiGlobe } from "react-icons/ci";
import Container from "../common/Container";
import SearchFunction from "./SearchFunction";
import { NavLink } from "react-router-dom";

export const NavbarOne = () => {
  return (
    <Navbar isBordered className="mx-auto w-full sm:pt-[33px] pt-4 max-w-none">
        <Container className="flex justify-center items-center">
        <NavbarContent className="max-w-none" justify="start">
          <NavbarBrand className="mr-4">
            <NavLink to="/">
            <img
              className="md:min-w-[166px] min-w-[100px]"
              src="./logo.svg"
              alt="myFeedbackLogo"
            />
            </NavLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div">
          <SearchFunction className="sm2:flex hidden justify-between items-center"/>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform bg-white"
                size="sm"
                icon={<CiGlobe size={30} />}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">someone@example.com</p>
              </DropdownItem>
              <DropdownItem key="profile">Profile</DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button className="text-nowrap rounded-full bg-black text-white sm:inline-block hidden">
            MyFeedback for business
          </Button>
        </NavbarContent>
    </Container>
      </Navbar>
  );
};
