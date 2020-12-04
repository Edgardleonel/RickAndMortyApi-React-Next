import { PaginationStyle } from './styles'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Dropdown({pagePrev, pageNext,pageDefault, allPages}) {
    const [page, setPage] = useState(pageDefault)
    const router = useRouter()
    const { query } = useRouter()

    const handlePage = (pageValue) => {
        setPage(pageValue)
        router.push(`../page/${pageValue}`)
    }
  
    const handlePageChange = (event) => {
      event.preventDefault()
      const update = event.target.value
      if(update <= 0 || pageDefault >= allPages || update >= allPages) {
        return false
      } 
      router.push(`../page/${update}`)
    }
  
    useEffect(() => {
      const updatePage = query.page
      setPage(Number(updatePage))
    }, [router])


    return (
      <PaginationStyle>
          <div className="pagination">
          {!pagePrev ? false : <button onClick={() => handlePage(pagePrev)}>Prev</button>}
          {pageDefault === 1 ? false : <form><input type="text"  onChange={handlePageChange} value={page} maxLength={2} /></form>}
          {!pageNext || pageDefault >= allPages ? false : <button onClick={() => handlePage(pageNext)}>Next</button>}
          </div>
      </PaginationStyle>
    )
}

export default Dropdown