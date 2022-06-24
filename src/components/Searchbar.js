import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

const Searchbar = () => {
    const { user_content_all, search_term, search_result, user_content } = useContext(MainContext)
    const [userContentAll] = user_content_all
    const [userContent] = user_content
    const [searchTerm, setSearchTerm] = search_term
    const [searchresult, setSearchResult] = search_result

    const handleChangeSearch = (search_key) => {
        setSearchTerm(search_key)
        if (search_key !== "") {
            const data = userContentAll.filter((el) => {                
                if(el.name.toLowerCase().includes(search_key.toLowerCase())){
                    return el
                }
                // return Object.values(el).join("").toLowerCase().includes(search_key.toLowerCase())
            })
            setSearchResult(data);
        } else {
            setSearchResult(userContent);
        }
    }

    return (
        <div className="search_wrap">
            <i className="ri-search-line"></i>
            <input name="search" value={searchTerm} onChange={(e) => handleChangeSearch(e.target.value)} />
        </div>
    )
}

export default Searchbar