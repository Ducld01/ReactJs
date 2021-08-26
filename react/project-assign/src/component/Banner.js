import React from 'react'

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://s3.amazonaws.com/nikeinc/assets/101296/NikeNews_JordanBrand_PSG_2021_1_native_1600.jpg?1611596837" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.footyheadlines.com/account/api/image.php?post_id=7865273086515597927&url=https://3.bp.blogspot.com/-ai4ghI-dwH0/XRJEQn2XaAI/AAAAAAAB_Kg/fsoZ9pSFgMc-fWsaT3UxZe7K_wVaVqk1wCLcBGAs/s1600/-new-collection-jordan-paris-saint-germain-psg-2019-2020%2B%25281%2529.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://s3.amazonaws.com/nikeinc/assets/102285/NikeNews_JordanBrand_ParisSaintGermain_2021-22_16_9_HUITEMA_KATOTO_GEYORO_hd_1600.jpg?1620776432" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </a>
        </div>


    )
}

export default Banner
