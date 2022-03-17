import React, { FC } from 'react'

const Meta: FC = () => {
  return (
    <>
      <meta charSet="utf-8"></meta>
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
        content="Nzoa's personal blog about programming, Japanese,
        music, and movies. Made in NextJS and integrated with GraphCMS"
        key="ogdesc"
      />
    </>
  )
}

export default Meta
