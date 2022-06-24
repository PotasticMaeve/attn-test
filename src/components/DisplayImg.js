import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import Lottie from "lottie-react";
import NoData from "../animations/no_data.json";

const DisplayImg = () => {
    const { user_content, search_result, search_term } = useContext(MainContext)
    const [userContent] = user_content
    const [searchResult] = search_result
    const [searchTerm] = search_term

    const commonDisplay = userContent.map((el, i) => {
        return <img key={i} src={el.src} alt={`user-content-${i}`} />
    })
    
    const searchDisplay = searchResult.map((el, i) => {
        return <img key={i} src={el.src} alt={`user-content-${i}`} />
    })

    return (
        <div className="img_wrap">
            {userContent.length > 0 ?
                searchTerm !== "" ?
                    searchResult.length > 0 ?
                        searchDisplay :
                        <div className="nodata_wrap">
                            <Lottie
                                animationData={NoData}
                                autoPlay={true}
                                loop={true}
                                className="animation_lottie"
                            />
                            <p>Data Tidak Ditemukan</p>
                        </div>
                    : commonDisplay
                : (
                    <></>
                )}
        </div>
    )
}

export default DisplayImg