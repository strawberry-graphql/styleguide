import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Codebox } from "../codebox/codebox";
import { Footer } from "../footer/footer";

import { Header } from "../header/header";
import { Link } from "../link/link";
import { List, ListItem } from "../list/list";
import { Spacer } from "../spacer/spacer";
import { Heading } from "../typography/heading";
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

const PageNavItem = ({ active }: { active?: boolean }) => {
  return (
    <li
      className={clsx(
        "typography-paragraph-2 font-bold text-g-500 pl-24 pr-12 my-16",
        {
          "text-strawberry relative": active,
        }
      )}
    >
      {active && (
        <span className="-left-2 rounded-[3px] top-0 bottom-0 w-3 bg-gradient-to-b from-magenta to-orange block absolute" />
      )}
      <a href="#" className="hover:text-strawberry">
      Step 1: Create a new project and install Strawberry
      </a>
    </li>
  );
};

export const PageNav = () => {
  return (
    <nav className="">
      <ul className="sticky top-24 border-l border-g-100">
        <PageNavItem active />
        <PageNavItem />
        <PageNavItem />
      </ul>
    </nav>
  );
};

export const DocumentationPage: React.FC = () => {
  return (
    <>
      <Header
        version={{
          name: "1.0",
          href: "/",
        }}
      />

      <Spacer size={80} />

      <div className="md:grid grid-cols-[320px_1fr]">
        <div className="w-[320px] hidden md:block bg-strawberry">
          this it the sidebar
        </div>

        <div className="max-w-[1600px] 2xl:mx-auto 2xl:relative 2xl:-left-[160px] 2lx:bg-pink md:grid grid-cols-[1fr_140px]">
          <div className="px-40 space-y-8">
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

            <Codebox
              html={`<pre class="overflow-x-auto p-6"><code class="language-bash"><div data-line="1" class=""><span><span class="token function">mkdir</span> strawberry-demo</span></div><div data-line="2" class=""><span><span class="token builtin class-name">cd</span> strawberry-demo</span></div></code></pre>`}
            />

            <Paragraph>After that we need a new virtualenv:</Paragraph>

            <Codebox
              html={`<pre class="overflow-x-auto p-6"><code class="language-bash"><div data-line="1" class=""><span><span class="token function">python3</span> -m venv venv</span></div><div data-line="2" class=""><span><span class="token builtin class-name">source</span> venv/bin/activate</span></div></code></pre>`}
            />

            <Paragraph>
              Activate the virtualenv and then install strawberry plus the debug
              server.
            </Paragraph>

            <Codebox
              html={`<pre class="overflow-x-auto p-6"><code class="language-bash"><div data-line="1" class=""><span><span class="token builtin class-name">pip</span> install strawberry</span></div><div data-line="2" class=""><span><span class="token builtin class-name">pip</span> install strawberry-graphql[debug-server]</span></div></code></pre>`}
            />

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

            <Codebox html={pythonExample} />

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

          <PageNav />
        </div>
      </div>

      <Spacer size={80} />

      <Footer />
    </>
  );
};
