import React from 'react'

const Meta = () => {
  return (
    <>
      {/* Twitter */}
      <meta
        name="twitter:card"
        content="Nzoa's personal blog about programming, Japanese and more."
        key="twcard"
      />
      <meta name="twitter:creator" content="@nzoadiego" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:image" content="/preview.jpg" key="ogimage" />
      <meta property="og:site_name" content="Arukeyo" key="ogsitename" />
      <meta property="og:title" content="Arukeyo" key="ogtitle" />
      <meta
        property="og:description"
        content="Nzoa's personal blog about programming, Japanese and more."
        key="ogdesc"
      />
    </>
  )
}

export default Meta
