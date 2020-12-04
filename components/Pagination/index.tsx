import { PaginationStyle } from './styles'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FiSearch } from 'react-icons/fi'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

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
      setTimeout(() => {
        const update = event.target.value
        if(update <= 0 || pageDefault > allPages || update > allPages) {
          return false
        } 
        router.push(`../page/${update}`)
      }, 500)
    }
  
    useEffect(() => {
      const updatePage = query.page
      setPage(Number(updatePage))
    }, [router])


    return (
      <PaginationStyle>
          <div className="pagination">
          {!pagePrev ? false : <button onClick={() => handlePage(pagePrev)}><FaAngleLeft size={16} /></button>}
          {pageDefault === 1 ? false : 
          <form>
            <input type="text" disabled value={page} maxLength={2} />
            <span>
              <FiSearch size={20} color="#eaeaea" />
              <input type="search" className="search" onChange={handlePageChange} maxLength={2} />
            </span>
          </form>}
          {!pageNext || pageDefault >= allPages ? false : <button onClick={() => handlePage(pageNext)}><FaAngleRight size={16} /></button>}
          </div>
      </PaginationStyle>
    )
}

export default Dropdown