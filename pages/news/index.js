// our-domain.com/news

import { Fragment } from "react";
// Fragment allows us to use adjacent jsx elements

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <li>
          {/* This is an HTML link construction */}
          <a href="/news/nextjs-is-a-great-framework">NextJS Is A Great Framework</a>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
