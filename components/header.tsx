"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, User, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/lib/auth"

const navigationItems = [
  {
    title: "All Products",
    items: [
      {
        title: "View All",
        href: "/products",
        isCategory: true,
      },
      {
        title: "E78 Services",
        href: "/services",
        isCategory: true,
        subItems: [
          { title: "Security", href: "/services/security" },
          { title: "Internet Access", href: "/services/internet" },
          { title: "Network Access", href: "/services/network" },
          { title: "Unified Communications (UC)", href: "/services/uc" },
          { title: "Voice", href: "/services/voice" },
          { title: "Backup & Disaster Recovery", href: "/services/backup" },
          { title: "Colocation & Data Center", href: "/services/colocation" },
          { title: "Desktop as a Service", href: "/services/desktop" },
          { title: "Infrastructure as a Service (IaaS)", href: "/services/iaas" },
          { title: "Managed Services", href: "/services/managed" },
        ],
      },
      {
        title: "Security",
        href: "/security",
        isCategory: true,
        subItems: [
          { title: "Cybersecurity Solutions", href: "/security/cyber" },
          { title: "Data Protection", href: "/security/data" },
          { title: "Compliance", href: "/security/compliance" },
        ],
      },
      {
        title: "Internet Access",
        href: "/internet",
        isCategory: true,
        subItems: [
          { title: "Broadband", href: "/internet/broadband" },
          { title: "Fiber", href: "/internet/fiber" },
          { title: "Satellite", href: "/internet/satellite" },
        ],
      },
      {
        title: "Network Access",
        href: "/network",
        isCategory: true,
        subItems: [
          { title: "VPN Solutions", href: "/network/vpn" },
          { title: "SD-WAN", href: "/network/sdwan" },
          { title: "MPLS", href: "/network/mpls" },
        ],
      },
    ],
  },
  {
    title: "E78 Services",
    items: [
      { title: "View All", href: "/services" },
      { title: "Security", href: "/services/security" },
      { title: "Internet Access", href: "/services/internet" },
      { title: "Network Access", href: "/services/network" },
      { title: "Unified Communications (UC)", href: "/services/uc" },
      { title: "Voice", href: "/services/voice" },
      { title: "Backup & Disaster Recovery", href: "/services/backup" },
      { title: "Colocation & Data Center", href: "/services/colocation" },
      { title: "Desktop as a Service", href: "/services/desktop" },
      { title: "Infrastructure as a Service (IaaS)", href: "/services/iaas" },
      { title: "Managed Services", href: "/services/managed" },
    ],
  },
  {
    title: "Software",
    items: [
      { title: "View All", href: "/software" },
      { title: "Business Applications", href: "/software/business" },
      { title: "Development Tools", href: "/software/development" },
      { title: "Security Software", href: "/software/security" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { title: "View All", href: "/infrastructure" },
      { title: "Cloud Infrastructure", href: "/infrastructure/cloud" },
      { title: "On-Premise Solutions", href: "/infrastructure/on-premise" },
      { title: "Hybrid Solutions", href: "/infrastructure/hybrid" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { title: "View All", href: "/connectivity" },
      { title: "Internet Services", href: "/connectivity/internet" },
      { title: "Network Solutions", href: "/connectivity/network" },
      { title: "VPN Services", href: "/connectivity/vpn" },
    ],
  },
  {
    title: "Wireless / Mobility",
    items: [
      { title: "View All", href: "/wireless" },
      { title: "Mobile Solutions", href: "/wireless/mobile" },
      { title: "WiFi Solutions", href: "/wireless/wifi" },
      { title: "IoT Connectivity", href: "/wireless/iot" },
    ],
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="E78 Logo" width={100} height={32} className="h-8 w-auto" />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Find Application" className="pl-10 bg-gray-50 border-gray-200 focus:bg-white" />
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">
                    <User className="h-4 w-4 mr-2" />
                    Log In
                  </Link>
                </Button>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600" asChild>
                  <Link href="/signup">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Find Application" className="pl-10" />
                </div>
                <div className="space-y-2">
                  {isAuthenticated ? (
                    <Button variant="ghost" className="w-full justify-start" onClick={logout}>
                      Logout
                    </Button>
                  ) : (
                    <>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/login">
                          <User className="h-4 w-4 mr-2" />
                          Log In
                        </Link>
                      </Button>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 justify-start" asChild>
                        <Link href="/signup">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Sign Up
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:block border-t">
          <div className="flex space-x-1">
            {navigationItems.map((item) => (
              <div key={item.title} className="group relative">
                <button className="h-12 px-4 text-sm font-medium text-gray-700 hover:text-gray-900 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </button>

                {/* First Level Dropdown */}
                <div className="absolute top-full left-0 mt-0 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    {item.items.map((subItem) => (
                      <div key={subItem.title} className="group/sub relative">
                        <Link
                          href={subItem.href}
                          className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors"
                        >
                          <span>{subItem.title}</span>
                          {subItem.subItems && <span className="text-xs text-gray-400">›</span>}
                        </Link>

                        {/* Second Level Dropdown */}
                        {subItem.subItems && (
                          <div className="absolute left-full top-0 ml-1 w-56 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                            <div className="p-2">
                              {subItem.subItems.map((childItem) => (
                                <Link
                                  key={childItem.title}
                                  href={childItem.href}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors"
                                >
                                  {childItem.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Static Menu Items */}
            <Link
              href="/sim"
              className="flex h-12 items-center px-4 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              SIM
            </Link>
            <Link
              href="/events"
              className="flex h-12 items-center px-4 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Events
            </Link>
            <Link
              href="/import-apps"
              className="flex h-12 items-center px-4 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Import Apps
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
