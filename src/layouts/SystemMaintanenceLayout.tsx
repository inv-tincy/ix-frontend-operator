"use client";

import React from "react";
// import SystemMaintenance from "@/components/page-elements/system-maintenance/SystemMaintenance";
// import { maintenanceDataSelector } from "@/stores/error/selector";
import { useSelector } from "react-redux";

function SystemMaintenanceLayout({ children }: { children: React.ReactNode }) {
  const maintenanceMode = false; // 🔹 Replace with Redux or env-based flag later

  return (
    <>
      {maintenanceMode ? (
        <p>Maintenance Page</p>
        // <SystemMaintenance data={maintenanceDate} />
      ) : (
        children
      )}
    </>
  );
}

export default SystemMaintenanceLayout;
