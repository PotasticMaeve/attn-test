import axios from "axios";
import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
    const [userContent, setUserContent] = useState([])
    const [userContentAll, setUserContentAll] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchresult, setSearchResult] = useState([])
    const [imgIndex, setImgIndex] = useState(13)

    const getUserContent = () => {
        const baseURL = "http://localhost:5000/data"
        axios.get(baseURL, {
            params: {
                _limit: imgIndex
            }
        })
            .then(res => {
                if (res.status === 200) {
                    // const sorted = res.data.sort(function(a, b) {
                    //     return a.name.localeCompare(b.name.toLowerCase());
                    // });
                    setUserContent(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getUserContentAll = () => {
        const baseURL = "http://localhost:5000/data"
        axios.get(baseURL)
            .then(res => {
                if (res.status === 200) {
                    setUserContentAll(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <MainContext.Provider value={{
            user_content: [userContent, setUserContent],
            user_content_all: [userContentAll, setUserContentAll],
            search_term: [searchTerm, setSearchTerm],
            search_result: [searchresult, setSearchResult],
            img_index: [imgIndex, setImgIndex],

            getUserContent: getUserContent,
            getUserContentAll: getUserContentAll
        }}>
            {children}
        </MainContext.Provider>
    )
}