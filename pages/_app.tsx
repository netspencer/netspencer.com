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
	<script src="https://www.delphi.ai/chatWidgetBundle.js"
		id="chat-widget" 
		data-secret1="35f7a2c6-fcec-4968-8c49-96113476a2a0">
	</script>
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
