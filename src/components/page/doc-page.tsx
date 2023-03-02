import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Codebox } from "../codebox/codebox";
import { Footer } from "../footer/footer";
import { SearchInput } from "../form/search-input";

import { Header } from "../header/header";
import { Link } from "../link/link";
import { List, ListItem } from "../list/list";
import { MobileNav } from "../mobile-nav/mobile-nav";
import { PageTOC } from "../page-toc/page-toc";
import { SearchBox } from "../search-box/search-box";
import { SidebarNav } from "../sidebar-nav/sidebar-nav";
import { Spacer } from "../spacer/spacer";
import { Heading } from "../typography/heading";
import { Label } from "../typography/label";
import { Paragraph } from "../typography/paragraph";

const pythonExample = `<pre class="shiki " style="background-color: transparent" tabindex="0"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> strawberry</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-function)">@strawberry</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">type</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">class</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">User</span><span style="color: var(--shiki-color-text)">:</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    name</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">str</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">@strawberry</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">field</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">def</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">is_admin</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-parameter)">self</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-punctuation)">-&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">bool</span><span style="color: var(--shiki-color-text)">:</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> self</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">name </span><span style="color: var(--shiki-token-keyword)">==</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Patrick&quot;</span></span>
<span class="line"></span></code></pre>`;

const sections = [
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
];

export const DocumentationPage: React.FC = () => {
  return (
    <>
      <Header
        version={{
          name: "v1.0",
          href: "/",
        }}
      />

      <Spacer size={80} />

      <div className="md:hidden">
        <MobileNav sections={sections} />
      </div>

      <div className="md:grid grid-cols-[320px_1fr]">
        <div className="w-[320px] hidden md:block px-40">
          <Spacer size={16} />
          <SearchInput placeholder="Search" />
          <Spacer size={40} />
          <SidebarNav sections={sections} />
        </div>

        <div className="max-w-[1600px] 2xl:mx-auto 2xl:relative 2xl:-left-[160px] 2lx:bg-pink md:grid grid-cols-[minmax(0,1fr)_200px]">
          <div className="px-16 sm:px-40 space-y-8">
            <Heading>Getting started with Strawberry</Heading>
            <Paragraph>This tutorial will help you:</Paragraph>

            <List>
              <ListItem>
                Obtain a basic understanding of GraphQL principles
              </ListItem>
              <ListItem>Define a GraphQL schema using Strawberry</ListItem>
              <ListItem>
                Run the Strawberry server that lets you execute queries against
                your schema
              </ListItem>
            </List>

            <Paragraph>
              This tutorial assumes that you are familiar with the command line
              and Python, and that you have a recent version of Python (3.7+)
              installed.
            </Paragraph>

            <Paragraph>
              Strawberry is built on top of{" "}
              <Link href="/">Python’s dataclasses</Link> and{" "}
              <Link href="/">type hints</Link> functionality.
            </Paragraph>

            <Heading level={2} className="!mt-48">
              Step 1: Create a new project and install Strawberry
            </Heading>

            <Paragraph>Let’s create a new folder:</Paragraph>

            <Codebox>
              <pre className="overflow-x-auto p-6">
                <code className="language-bash">
                  <div data-line="1" className="">
                    <span>
                      <span className="token function">mkdir</span>{" "}
                      strawberry-demo
                    </span>
                  </div>
                  <div data-line="2" className="">
                    <span>
                      <span className="token builtin class-name">cd</span>{" "}
                      strawberry-demo
                    </span>
                  </div>
                </code>
              </pre>
            </Codebox>

            <Paragraph>After that we need a new virtualenv:</Paragraph>

            <Paragraph>
              Activate the virtualenv and then install strawberry plus the debug
              server.
            </Paragraph>

            <Heading level={2} className="!mt-48">
              Step 2: Define your schema
            </Heading>

            <Paragraph>
              Every GraphQL server uses a <strong>schema</strong> to define the
              structure of the data that clients can query. In this example, we
              will create a server for querying a collection of books by title
              and author.
            </Paragraph>

            <Paragraph>
              In your favorite editor create a file called{" "}
              <code>schema.py</code>, with the following contents:
            </Paragraph>

            <Paragraph>
              This will create a GraphQL schema where clients will be able to
              execute a query named <code>books</code> that will return a list
              of zero or more books.
            </Paragraph>

            <Image
              src="https://github.com/strawberry-graphql/strawberry/raw/main/docs/images/index-server.png"
              width={1692}
              height={1269}
              alt=""
            />
          </div>

          <PageTOC items={[]} />
        </div>
      </div>

      <Spacer size={80} />

      <Footer />
    </>
  );
};
