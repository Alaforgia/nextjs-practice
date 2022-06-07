// our-domain.com/news
// Link is a sub-package that replaces <a> tag. Expects href.
import Link from "next/link";
// Fragment allows us to use adjacent jsx elements
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* This is an HTML link construction */}
          <Link href="/news/nextjs-is-a-great-framework">NextJS Is A Great Framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
