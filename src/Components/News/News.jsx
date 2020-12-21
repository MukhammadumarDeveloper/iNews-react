import NewsData from '../../data'

function News({newsType}) {
  return (
    <>
      {
        (newsType ? NewsData.filter(t => {
          return t.newsType === newsType
        }) : NewsData).map((news) => {
          return (
            <li key={news.id}>{news.content}</li>
          )
        })
      }
    </>
  )
}

export default News
