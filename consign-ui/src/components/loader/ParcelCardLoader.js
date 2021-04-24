import React from "react"
import ContentLoader from "react-content-loader"


const ParcelCardLoader  = (props)  => {
    return (
        <div className="admin-box-content">
        <ContentLoader backgroundColor="#9ad4c4" foregroundColor="#ecebeb" viewBox="0 0 100% 650" height={650} width={"100%"} {...props}>
        <rect x="0" y="0" rx="5" ry="5" width="70%" height="30" />
        <rect x="0" y="38" rx="5" ry="5" width="100%" height="180" />
      </ContentLoader>
      </div>
    )
}


export default ParcelCardLoader