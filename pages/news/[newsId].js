// our-domain.com/news/something-important
import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a reqquest to the backend API
  // to fetch the item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
