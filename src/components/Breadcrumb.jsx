import React from "react";
import { Link, useLocation } from "react-router-dom";

// Breadcrumb Component
const Breadcrumb = () => {
  const location = useLocation(); // Get the current location (route)
  console.log(location.pathname.split("/"), "new path");

  // Split pathname into array and filter out empty values
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames, "path");

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex gap-2 mt-[10px] text-color-3 text-xl font-normal">
        {/* Home breadcrumb always visible */}
        <li>
          <Link to="/">{`Home >`}</Link>
        </li>
        {/* Map over pathnames and create breadcrumb items */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={to}
              className={`flex items-center gap-4 last:text-color-4 ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                value.charAt(0).toUpperCase() + value.slice(1) // Last item, no link
              ) : (
                <Link to={to}>
                  {`${value.charAt(0).toUpperCase() + value.slice(1)} > `}
                </Link> // Link for previous breadcrumbs
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
