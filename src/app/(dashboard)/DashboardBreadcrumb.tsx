"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/src/components/parts/breadcrumb";
import Link from "next/link";

// Define a mapping of routes to breadcrumb titles
const breadcrumbMap: Record<string, string> = {
  "/customer": "Products",
  "/customer/orders": "Orders",
  "/customer/profile": "Profile",
  "/admin": "Admin Panel",
  "/admin/users": "Manage Users",
};

export default function BreadcrumbClient() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.length > 0 && <BreadcrumbSeparator />} {/* Ensure only one separator */}

        {pathSegments.map((segment, index) => {
          const fullPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const title = breadcrumbMap[fullPath] || segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <BreadcrumbItem key={fullPath}>
              {index === pathSegments.length - 1 ? (
                <BreadcrumbPage>{title}</BreadcrumbPage> // Last item is bold and non-clickable
              ) : (
                <>
                  <BreadcrumbLink asChild>
                    <Link href={fullPath}>{title}</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator /> {/* Ensures a separator between items */}
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
