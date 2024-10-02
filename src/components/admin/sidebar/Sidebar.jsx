import { useState } from "react";
import SidebarButton from "../../buttons/SidebarButton";
import {
  AiOutlineBell,
  AiOutlineAppstore,
  AiOutlineShop,
  AiOutlineRead,
} from "react-icons/ai";

const Sidebar = () => {
  const [selected, setSelected] = useState("dashboard");
  return (
    <aside className="h-screen w-64 mt-16 pt-6 fixed top-0 left-0 border-r">
      <SidebarButton
        content={{ text: "Panel", icon: <AiOutlineAppstore size={23} /> }}
        selected={selected === "dashboard"}
        handleSelect={() => setSelected("dashboard")}
      />
      <SidebarButton
        content={{ text: "Publicaciónes", icon: <AiOutlineRead size={23} /> }}
        selected={selected === "posts"}
        handleSelect={() => setSelected("posts")}
      />
      <SidebarButton
        content={{ text: "Tienda", icon: <AiOutlineShop size={23} /> }}
        selected={selected === "store"}
        handleSelect={() => setSelected("store")}
      />
      <SidebarButton
        content={{ text: "Notificaciones", icon: <AiOutlineBell size={23} /> }}
        selected={selected === "notif"}
        handleSelect={() => setSelected("notif")}
      />
    </aside>
  );
};

export default Sidebar;
