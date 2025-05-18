const { useState } = React;

function WorkGrid() {
  const topVideos = [
    {
      h1: "Mumbai - Malshej Ghat 📍 ",
      url: "https://www.instagram.com/reel/DCJlZgPNnFj/?igsh=aTE1OTRkZzR4Nndj",
      image: "giganigga.png",
    },
    {
      h1: "Aankhon (advedh flip)",
      url: "https://www.instagram.com/reel/DIRLwvNs38U/?igsh=MTNjNGt3M3V3cGcydQ==",
      image: "aankhon.png",
    },
  ];

  const initialClientWorkVideos = [
    {
      url: "https://www.instagram.com/reel/DJlnln2v0_N/?igsh=Y2NrMjg4ejN5NW05",
      image: "bhandhardara.png",
      h1: "Bhandardara",
    },
    {
      url: "https://www.instagram.com/reel/DJkGh-xMMNl/?igsh=MXYxbmoxdXQ0bmw4MQ==",
      image: "ambient.png",
      h1: "Night ambience",
    },
    {
      url: "https://www.instagram.com/reel/DIvfJ0hSnDX/?igsh=dmE2ZXR0M21od3Jq",
      image: "blender.png",
      h1: "Blender work archive",
    },
    {
      url: "https://www.instagram.com/reel/DDG1MYCNPoT/?igsh=OHAwMGZjdmJkbDRw",
      image: "tamhini.png",
      h1: "Tamhini ghat mini vlog 📍",
    },
    {
      url: "https://shrivastavsensei.github.io/Businness-card-web-viewer/",
      image: "parallax.png",
      h1: "Upcoming Work 🔥",
    },
  ];

  const [clientWorkVideos, setClientWorkVideos] = useState(initialClientWorkVideos);

  function handleImageChange(e, i) {
    const newImage = e.target.value;
    setClientWorkVideos((prev) => {
      const updated = [...prev];
      updated[i].image = newImage;
      return updated;
    });
  }

  return (
    <div className="container">
      <h1>Our Work</h1>

      <h2>Top Videos</h2>
      <div className="grid">
        {topVideos.map((item, i) => {
          const cardContent = (
            <div
              className="card"
              key={`top-video-${i}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="cover"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="text-space">
                <p className="caption">{item.h1}</p>
              </div>
              <div className="cutout"></div>
            </div>
          );

          return item.url ? (
            <a
              key={`top-video-link-${i}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {cardContent}
            </a>
          ) : (
            cardContent
          );
        })}
      </div>

      <h2>Client Work</h2>
      <div className="grid">
       {clientWorkVideos.map((item, i) => (
  <div
    className="card"
    key={`client-work-${i}`}
    style={{ animationDelay: `${(i + topVideos.length) * 0.1}s` }}
  >
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        className="cover"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="text-space">
        <p className="caption">{item.h1}</p>
      </div>
      <div className="cutout"></div>
    </a>
  </div>
))}

      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WorkGrid />);
