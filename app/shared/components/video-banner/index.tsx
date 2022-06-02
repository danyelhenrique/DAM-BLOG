import ReactPlayer from "react-player";

export function CustomVideo() {
  return (
    <div className="custom-video-container">
      <div className="custom-video-container-header flex items-center p-[20px_12.6%_0_6.3%]">
        <h2>Taika Waititi Answers the Web’s Most Searched Questions</h2>
        <button className="custom-video-shared">
          <svg width="100%" height="100%" viewBox="0 0 28 30" focusable="false">
            <use xlinkHref="#svg-share"></use>
            <use xlinkHref="#svg-share" className="shadow"></use>
          </svg>
        </button>
      </div>

      <div className="custom-video-container-body">
        <picture className="summary-item__image responsive-image">
          <source
            media="(max-width: 767px)"
            srcSet="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_768%2Cq_80%2Cw_768/v1653663427/wired_wac-stranger-things.jpg 768w"
            sizes="100vw"
          />
          <source
            media="(min-width: 768px)"
            srcSet="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_432%2Cq_80%2Cw_768/v1653663427/wired_wac-stranger-things.jpg 768w"
            sizes="100vw"
          />
          <img
            alt="Sadie Sink, Noah Schnapp &amp; Gaten Matarazzo Answer the Web’s Most Searched Questions"
            className="responsive-image__image"
            src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_432%2Cq_80%2Cw_768/v1653663427/wired_wac-stranger-things.jpg"
          />
        </picture>

        <div className="custom-video-container-body-controlls">
          <div className="play-pause-duration">
            <button className="play-pause-bnt">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 37.5 30"
                focusable="false"
              >
                <use xlinkHref="#svg-muted" className="svg-muted"></use>
                <use xlinkHref="#svg-muted" className="shadow svg-muted"></use>
                <use xlinkHref="#svg-speaker" className="svg-speaker"></use>
                <use
                  xlinkHref="#svg-speaker"
                  className="shadow svg-speaker"
                ></use>
                <use
                  xlinkHref="#svg-volume-high"
                  className="svg-volume-high"
                ></use>
                <use
                  xlinkHref="#svg-volume-high"
                  className="shadow svg-volume-high"
                ></use>
                <use
                  xlinkHref="#svg-volume-low"
                  className="svg-volume-low"
                ></use>
                <use
                  xlinkHref="#svg-volume-low"
                  className="shadow svg-volume-low"
                ></use>
              </svg>
            </button>
            <div className="duration">
              <span className="time">-8:07</span>
            </div>
          </div>

          <div className="custom-video-progress-bar"></div>

          <div className="others-controlls">
            <button className="caption">
              <svg width="20" height="16" viewBox="0 0 20 16" focusable="false">
                <use xlinkHref="#svg-cc-on" className="svg-cc-on"></use>
                <use xlinkHref="#svg-cc-on" className="shadow svg-cc-on"></use>
                <use xlinkHref="#svg-cc-off" className="svg-cc-off"></use>
                <use
                  xlinkHref="#svg-cc-off"
                  className="shadow svg-cc-off"
                ></use>
                <use
                  xlinkHref="#svg-cc-disabled"
                  className="svg-cc-disabled"
                ></use>
                <use
                  xlinkHref="#svg-cc-disabled"
                  className="shadow svg-cc-disabled"
                ></use>
              </svg>
            </button>

            <button className="toogle-full-screen">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 38.2999992 30"
                focusable="false"
              >
                <use
                  xlinkHref="#svg-full-screen"
                  className="svg-full-screen"
                ></use>
                <use
                  xlinkHref="#svg-full-screen"
                  className="shadow svg-full-screen"
                ></use>

                <use
                  xlinkHref="#svg-full-screen-exit"
                  className="svg-full-screen-exit"
                ></use>
                <use
                  xlinkHref="#svg-full-screen-exit"
                  className="shadow svg-full-screen-exit"
                ></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VideoBanner() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      controls
      light={true}
    />
  );
}
