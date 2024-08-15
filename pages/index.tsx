import React from 'react'
import { NextPage } from 'next'
import classNames from 'classnames'
import Link from 'next/link'

const Page: NextPage = () => (
  <>
    <header
      className={classNames(
        'p-8',
        'flex',
        'justify-between',
        'items-baseline',
        'sticky',
        'top-0'
      )}
    >
      <Link href="/">
        <a>
          <h1
            className={classNames(
              'text-4xl',
              'font-bold',
              'font-sans',
              'text-gray-300',
              'hover:opacity-75'
            )}
          >
            netspencer
          </h1>
        </a>
      </Link>
      <a
        className={classNames('hover:opacity-75')}
        target="_blank"
        href="https://github.com/netspencer/netspencer.com"
      >
        <img
          src="/static/github-white.png"
          alt="Github"
          className={classNames('w-8')}
        />
      </a>
    </header>
    <div
      className={classNames(
        'flex',
        'justify-between',
        'p-8',
        'pt-0',
        'flex-wrap'
      )}
    >
      <main
        className={classNames(
          'w-full',
          'md:w-1/2',
          'lg:max-w-md',
          'flex-grow-0'
        )}
      >
        <p
          className={classNames(
            'font-serif',
            'mb-8',
            'text-gray-300',
            'text-xl',
            'leading-relaxed'
          )}
        >
          My name is <b>Spencer Schoeben</b>. I am a product guy. I've been
          teaching myself to code since middle school. I love building stuff,
          learning things, exploring my surroundings, and making people's lives
          simpler and more enjoyable through the products I build and the
          stories I tell.
        </p>
        <p
          className={classNames(
            'font-serif',
            'mb-8',
            'text-gray-300',
            'text-xl',
            'leading-relaxed'
          )}
        >
          Currently building tools for founders at{' '}
          <a
            className={classNames('font-bold', 'hover:underline')}
            target="_blank"
            href="https://capital.xyz"
          >
            Capital
          </a>
          . Previously, wrote software at {' '}
          <a
            className={classNames('font-bold', 'hover:underline')}
            target="_blank"
            href="https://untapped.io"
          >
            Untapped
          </a> and <a
            className={classNames('font-bold', 'hover:underline')}
            target="_blank"
            href="https://magmanow.com"
          >Magma</a>
          . Co-founded{' '}
          <a
            className={classNames('font-bold', 'hover:underline')}
            target="_blank"
            href="https://integral.studio"
          >
            Integral Studio
          </a>{' '}
          prior to that.
        </p>
        <p
          className={classNames(
            'font-serif',
            'mb-8',
            'text-gray-300',
            'text-xl',
            'leading-relaxed'
          )}
        >
          I am passionate about simplistic user experiences and using technology
          to create sanity as opposed to chaos.
        </p>
        <p
          className={classNames(
            'font-serif',
            'mb-8',
            'text-gray-300',
            'text-xl',
            'leading-relaxed'
          )}
        >
          I am a designer who writes code, a developer who crafts pixels. I
          think a lot about psychology and how to create products that are a
          natural extension of the human experience.
        </p>
        <p
          className={classNames(
            'font-serif',
            'mb-8',
            'text-gray-300',
            'text-xl',
            'leading-relaxed'
          )}
        >
          Trying to make the world a better place in my own, small way.
        </p>
      </main>
    </div>

        <script dangerouslySetInnerHTML={{__html: `  window.delphi = {
    config: "8bbf71fd-d47b-4705-a44f-28773432b8e2",
    type: "bubble"
  };`}} />


<script dangerouslySetInnerHTML={{__html: `!function(){var e=window,t=document,n=function(){if(!e.delphi||"page"!==e.delphi.type&&"bubble"!==e.delphi.type)throw new Error("Invalid or missing delphi type. Must be 'page' or 'bubble'.");var n=t.createElement("script");n.type="text/javascript",n.async=!0,n.defer=!0,n.src="page"===e.delphi.type?"https://embed.delphi.ai/bundle.js":"https://embed.delphi.ai/widget.js",e.delphi&&e.delphi.config&&n.setAttribute("data-config",e.delphi.config);var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)};"complete"===t.readyState?n():e.attachEvent?e.attachEvent("onload",n):e.addEventListener("load",n,!1)}();
`}} />

  </>
)

export default Page
