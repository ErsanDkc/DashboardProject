import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: "/dashboard.svg", path: "/dashboard" },
  { name: "Transactions", icon: "/transactions.svg", path: "dashboard" },
  { name: "Invoices", icon: "/invoices.svg", path: "dashboard" },
  { name: "My Wallets", icon: "/my-wallets.svg", path: "dashboard" },
  { name: "Settings", icon: "/settings.svg", path: "dashboard" },
];
const bottomItems = [
  { name: "Help", icon: "/help.svg", path: "dashboard" },
  { name: "Logout", icon: "/logout.svg", path: "/signin" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 h-screen bg-[#FAFAFA] shadow flex flex-col justify-between">
      <div className="h-full">
        <div className="px-6 py-4 text-2xl font-bold">Maglo.</div>
        <nav className="mt-6 flex h-[90%] flex-col justify-between ">
          <div className="space-y-2">

            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 text-[#929EAE] rounded-lg  ${isActive ? "bg-[#C8EE44] text-black font-bold hover:bg-[#C8EE44]" : "hover:bg-lime-100"
                  }`
                }
              >
                <img src={item.icon} className={`h-5 w-5 mr-3`} />
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="space-y-2">
            {bottomItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 text-[#929EAE] rounded-lg  ${isActive ? "bg-[#C8EE44] text-black font-bold hover:bg-[#C8EE44]" : "hover:bg-lime-100"
                  }`
                }
              >
                <img src={item.icon} className={`h-5 w-5 mr-3`} />
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>


    </aside>
  );
}
