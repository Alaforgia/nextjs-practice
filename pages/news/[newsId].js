// useRouter is a custom hook created by the Next.js team
import { useRouter } from "next/router";

// our-domain.com/news/something-important
// This is a dynamic page. The brackets [newsId] tells Next this is dynamic
// A dynamic page means that anything after /news, will bring the user to this page
function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
