import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456">+254740233279</Typography.Link>
      <Typography.Link
        href="https://policies.google.com/privacy"
        target={"_blank"}
      >
        Privacy Policy
      </Typography.Link>
      <Typography.Link
        href="https://policies.google.com/terms"
        target={"_blank"}
      >
        Terms of Use
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
