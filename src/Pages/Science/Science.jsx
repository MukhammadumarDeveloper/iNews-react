import { useParams } from 'react-router-dom'
import NewsData from '../../data'

function Science () {
  const type = "science";
  const params = useParams()
  const page = params.page || 1;
  const newsArray = NewsData.filter(t => {
    return t.newsType === type
  })

  console.log(params);
	return (
		<>

			{
        newsArray.slice((page*2-2), page*2).map((news) => {
          return (
            <li key={news.id}>{news.content}</li>
          )
        })
      }

		</>
	)
}

export default Science