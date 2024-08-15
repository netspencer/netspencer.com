import '../styles/main.css'

import React, { FunctionComponent } from 'react'
import App from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const Analytics: FunctionComponent<{ id: string }> = ({ id }) => (
  <Head>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', '${id}', 'auto');
            ga('send', 'pageview');
          `,
      }}
    />
    <script async src="https://www.google-analytics.com/analytics.js" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        // Insert Twitter Pixel ID and Standard Event data below
        twq('init','o3i9b');
        twq('track','PageView');
    `,
      }}
    />

    <script dangerouslySetInnerHTML={{__html: `  window.delphi = {
    config: "8bbf71fd-d47b-4705-a44f-28773432b8e2", // embed id
    type: "page" // or "bubble"
  };`}} />


<script dangerouslySetInnerHTML={{__html: `!function(){var e=window,t=document,n=function(){if(!e.delphi||"page"!==e.delphi.type&&"bubble"!==e.delphi.type)throw new Error("Invalid or missing delphi type. Must be 'page' or 'bubble'.");var n=t.createElement("script");n.type="text/javascript",n.async=!0,n.defer=!0,n.src="page"===e.delphi.type?"https://embed.delphi.ai/bundle.js":"https://embed.delphi.ai/widget.js",e.delphi&&e.delphi.config&&n.setAttribute("data-config",e.delphi.config);var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)};"complete"===t.readyState?n():e.attachEvent?e.attachEvent("onload",n):e.addEventListener("load",n,!1)}();
`}} />
  </Head>
)

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Analytics id="UA-158956650-2" />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    )
  }
}
