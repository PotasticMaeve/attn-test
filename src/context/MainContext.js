import axios from "axios";
import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
    const [userContent, setUserContent] = useState([])
    const [userContentAll, setUserContentAll] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchresult, setSearchResult] = useState([])
    const [imgIndex, setImgIndex] = useState(20)
    const [baseURL] = useState("http://json.claudiafelicia.com/data")

    const getUserContent = () => {
        axios.get(baseURL, {
            params: {
                _limit: imgIndex
            }
        })
            .then(res => {
                if (res.status === 200) {
                    if(imgIndex === 13){
                        const sorted = res.data.sort(function(a, b) {
                            return a.name.localeCompare(b.name.toLowerCase());
                        });
                        setUserContent(sorted);
                    }else{
                        setUserContent(res.data);
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getUserContentAll = () => {
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