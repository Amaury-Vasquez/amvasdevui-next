import { Breadcrumbs } from "amvasdev-ui";
import Link from "next/link";

const BreadcrumbsStory = () => (
  <div className="w-full flex items-center flex-wrap">
    <Breadcrumbs
      options={[
        <Link key="home" href="/">
          Home
        </Link>,
        "Components",
        "Breadcrumbs",
      ]}
    />
  </div>
);

export default BreadcrumbsStory;
