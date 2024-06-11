import { doLogout } from "@/app/actions/authAction";
import React from "react";

const Logout = () => {
  return (
    <div>
      <form action={doLogout}>
        <button type="submit" className="text-yellow-900 font-semibold text-sm">
          Log Out
        </button>
      </form>
    </div>
  );
};

export default Logout;
