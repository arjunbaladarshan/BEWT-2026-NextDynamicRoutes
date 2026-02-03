import React from "react";

function MobileLayout({
  children,
  iphone,
  android,
}: {
  children: React.ReactNode;
  iphone: React.ReactNode;
  android: React.ReactNode;
}) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">{children}</div>
        </div>
        <div className="row">
          <div className="col border border-primary">{android}</div>
          <div className="col border border-info">{iphone}</div>
        </div>
      </div>
    </div>
  );
}

export default MobileLayout;
