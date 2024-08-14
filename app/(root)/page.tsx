import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const HomePage = () => {
  const loggedIn = {
    firstName: "Adarsh",
    lastName: "Chhetri",
    email: "chhetriadarsh912@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transctions  "
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={9945.65}
          />
        </header>
        Recent transaction
      </div>

      <RightSidebar
        user={loggedIn}
        transctions={[]}
        banks={[{ currentBalance: 8300.42 }, { currentBalance: 4999.99 }]}
      ></RightSidebar>
    </section>
  );
};

export default HomePage;
