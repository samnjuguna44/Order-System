import React from "react";
import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456">+254740233279</Typography.Link>
      <Typography.Link
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Typography.Link>
      <Typography.Link
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms of Use
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
