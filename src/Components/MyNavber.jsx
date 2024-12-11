import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarItem, NavbarContent, NavbarMenu, Link, NavbarMenuItem } from '@nextui-org/react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react'
import { ChevronDownIcon, UserIcon } from '@heroicons/react/16/solid'
import MyModal from './HomePage/Mymodal'
import ProfileDropDown from './HomePage/Dropdown'

function MyNavber() {
        const [isMenuOpen, setMenuOpen] = useState(false);
  const menuItem = ["Eat & Drink", "Club", "Things to do", 'shopping', " Account", "Contact"]
  const value = true;
  return (
    <section>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setMenuOpen}
        maxWidth="xl"
      >
        {/* mobile device */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarContent className="sm:hidden pr-3">
            <NavbarBrand>
              <NavLink to="/">
                <img className="w-44" src="/logo.png" alt="" />
              </NavLink>
            </NavbarBrand>
          </NavbarContent>
          <NavbarItem>
            <Button color="primary"> Contact Now</Button>
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          ></NavbarMenuToggle>
        </NavbarContent>
        {/* desktop device */}
        <NavbarContent className="hidden sm:flex gap-4 w-full justify-center">
          <NavbarBrand>
            <NavLink to="/">
              <img className="w-44" src="/logo.png" alt="" />
            </NavLink>
          </NavbarBrand>
          <NavbarItem>
            <NavLink
              to="/drink"
              style={({ isActive }) => ({
                color: isActive ? "#0e8bff" : "black",
              })}
              className="text-black"
            >
              Eat & Drink
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="/club"
              style={({ isActive }) => ({
                color: isActive ? "#0e8bff" : "black",
              })}
            >
              Club <sup className=" text-[8px] px-2">+HOT</sup>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  Things to do{" "}
                  <ChevronDownIcon className="text-blue-500 w-4 h-4" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <img src="/shop.svg" alt="" />
          </NavbarItem>

          <NavbarItem>
            {value === true ? <MyModal /> : <ProfileDropDown />}
          </NavbarItem>

          <NavbarItem>
            <Button color="primary"> Contact Now</Button>
          </NavbarItem>
        </NavbarContent>

        {/* mobile device */}
        <div className="lg:hidden">
          <NavbarMenu className="bg-[#f5f4ff]">
            {menuItem.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link className="w-full text-black capitalize">{item}</Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </div>
      </Navbar>
    </section>
  );
}

export default MyNavber