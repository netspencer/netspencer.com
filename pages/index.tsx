import React from 'react'
import { NextPage } from 'next'
import classNames from 'classnames'
import Link from 'next/link'

const Page: NextPage = () => (
  <>
    <header
      className={classNames('p-8', 'flex', 'justify-between', 'items-baseline')}
    >
      <Link href="/">
        <a>
          <h1
            className={classNames(
              'text-4xl',
              'font-bold',
              'font-sans',
              'text-gray-800',
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
          src="/static/github.png"
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
      <aside
        className={classNames(
          'w-full',
          'md:w-1/2',
          'lg:max-w-md',
          'flex-grow-0',
          'pr-16'
        )}
      >
        <p
          className={classNames(
            'font-serif',
            'mb-8',
            'text-gray-800',
            'text-xl'
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
            'text-gray-800',
            'text-xl'
          )}
        >
          I am passionate about simplistic user experiences and using technology
          to create sanity as opposed to chaos.
        </p>
        <p
          className={classNames(
            'font-serif',
            'mb-8',
            'text-gray-800',
            'text-xl'
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
            'text-gray-800',
            'text-xl'
          )}
        >
          Trying to make the world a better place in my own, small way.
        </p>
      </aside>
      <main className={classNames('flex-grow')}>
        {/* <h2>coming soon</h2> */}
      </main>
    </div>
  </>
)

export default Page
