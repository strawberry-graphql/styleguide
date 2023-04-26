"use client";

import clsx from "clsx";
import { SearchIcon } from "../icons/search";
import { Paragraph } from "../typography/paragraph";

import { Combobox } from "@headlessui/react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  useSearchBox,
  Configure,
} from "react-instantsearch-hooks-web";

import { useGroupedResults } from "./use-grouped-results";
import { Result } from "./result";

const searchClient = algoliasearch(
  "HTUQW2U430",
  "bccc4f8ec45c035730f43b9443f099a6"
);

const AlgoliaLogo = () => (
  <svg
    width="106"
    height="25"
    viewBox="0 0 106 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_347_7670)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M51.276 13.2756V0.37064C51.276 0.196748 51.1208 0.0645319 50.9493 0.0913582L48.532 0.471718C48.3945 0.493275 48.293 0.612078 48.293 0.751479L48.3011 13.8399C48.3011 14.4588 48.3011 18.2806 52.8985 18.4142C53.058 18.419 53.1902 18.2906 53.1902 18.1311V16.1776C53.1902 16.0358 53.0853 15.9136 52.9449 15.8978C51.2755 15.7057 51.2755 13.619 51.2755 13.2765L51.276 13.2756Z"
        className="fill-current"
      />
      <path
        d="M91.141 5.10498H88.7084C88.5522 5.10498 88.4258 5.23154 88.4258 5.38762V18.1349C88.4258 18.291 88.5522 18.4176 88.7084 18.4176H91.141C91.2967 18.4176 91.4236 18.291 91.4236 18.1349V5.38762C91.4236 5.23154 91.2967 5.10498 91.141 5.10498Z"
        className="fill-current"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M88.7089 3.50692H91.141C91.2972 3.50692 91.4236 3.38045 91.4236 3.22428V0.370631C91.4236 0.197217 91.2684 0.0645219 91.0969 0.0913483L88.6648 0.472187C88.5273 0.493744 88.4258 0.612066 88.4258 0.751468V3.22428C88.4258 3.38045 88.5522 3.50692 88.7084 3.50692H88.7089Z"
        className="fill-current"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M84.5045 13.2756V0.37064C84.5045 0.196748 84.3493 0.0645319 84.1778 0.0913582L81.7605 0.471718C81.623 0.493275 81.5215 0.612078 81.5215 0.751479L81.5296 13.8399C81.5296 14.4588 81.5296 18.2806 86.127 18.4142C86.2865 18.419 86.4187 18.2906 86.4187 18.1311V16.1776C86.4187 16.0358 86.3138 15.9136 86.1735 15.8978C84.504 15.7057 84.504 13.619 84.504 13.2765L84.5045 13.2756Z"
        className="fill-current"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M78.1767 6.92519C77.643 6.33837 76.9872 5.88807 76.2231 5.56902C75.4605 5.25621 74.6298 5.09717 73.7288 5.09717C72.8291 5.09717 71.997 5.24902 71.2416 5.56902C70.4948 5.88807 69.8385 6.33789 69.289 6.92519C68.7395 7.51106 68.3127 8.21238 68.0071 9.03441C67.7015 9.85693 67.5645 10.8246 67.5645 11.8301C67.5645 12.8356 67.7173 13.5963 68.0219 14.427C68.3276 15.2567 68.7472 15.9652 69.289 16.552C69.8298 17.1379 70.4785 17.5877 71.2339 17.9154C71.9894 18.2426 73.1558 18.4102 73.7441 18.4174C74.3309 18.4174 75.506 18.2344 76.2686 17.9154C77.0313 17.5954 77.6799 17.1379 78.2222 16.552C78.763 15.9652 79.1827 15.2567 79.4797 14.427C79.7776 13.5963 79.9223 12.8356 79.9223 11.8301C79.9223 10.8246 79.7623 9.85693 79.4418 9.03441C79.1362 8.2119 78.7165 7.51106 78.1757 6.92519H78.1767ZM76.0483 14.7695C75.4988 15.524 74.728 15.9048 73.7446 15.9048C72.7601 15.9048 71.9898 15.5312 71.4404 14.7695C70.8909 14.015 70.6159 13.1403 70.6159 11.8378C70.6159 10.5496 70.8837 9.48375 71.4332 8.73022C71.9817 7.97573 72.7525 7.60352 73.7359 7.60352C74.7204 7.60352 75.4907 7.97621 76.0397 8.73022C76.5891 9.47609 76.8713 10.5496 76.8713 11.8378C76.8713 13.1403 76.5973 14.0078 76.0478 14.7695H76.0483Z"
        className="fill-current"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.8472 5.10498H40.4841C38.1675 5.10498 36.1291 6.32558 34.9392 8.17564C34.2436 9.25732 33.8379 10.5531 33.8379 11.9471C33.8379 14.0976 34.8022 16.0152 36.3093 17.2693C36.4496 17.3938 36.5991 17.5079 36.7553 17.6113C37.3713 18.018 38.1018 18.2566 38.8879 18.2566C38.9469 18.2566 39.0058 18.2552 39.0642 18.2523C39.0815 18.2513 39.0982 18.2499 39.1155 18.2489C39.1572 18.2465 39.1993 18.2437 39.241 18.2394C39.2573 18.2379 39.2736 18.2355 39.2899 18.2336C39.3335 18.2288 39.3771 18.2235 39.4206 18.2173C39.4307 18.2159 39.4408 18.214 39.4508 18.2125C41.0264 17.9697 42.3998 16.7361 42.8472 15.2037V17.974C42.8472 18.1301 42.9737 18.2566 43.1299 18.2566H45.5452C45.7014 18.2566 45.8278 18.1301 45.8278 17.974V5.38762C45.8278 5.23145 45.7014 5.10498 45.5452 5.10498H42.8472ZM42.8472 15.0173C42.2628 15.504 41.5074 15.687 40.6992 15.7416C40.6915 15.7421 40.6834 15.7431 40.6757 15.7435C40.6221 15.7469 40.5684 15.7483 40.5148 15.7483C38.4913 15.7483 36.8204 14.0291 36.8204 11.9462C36.8204 11.4552 36.9143 10.9876 37.08 10.5579C37.6175 9.16294 38.9373 8.17516 40.4841 8.17516H42.8472V15.0173Z"
        className="fill-current"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M102.226 5.10498H99.863C97.5464 5.10498 95.5081 6.32558 94.3181 8.17564C93.6225 9.25732 93.2168 10.5531 93.2168 11.9471C93.2168 14.0976 94.1811 16.0152 95.6882 17.2693C95.8285 17.3938 95.978 17.5079 96.1342 17.6113C96.7502 18.018 97.4808 18.2566 98.2669 18.2566C98.3258 18.2566 98.3847 18.2552 98.4431 18.2523C98.4604 18.2513 98.4772 18.2499 98.4944 18.2489C98.5361 18.2465 98.5782 18.2437 98.6199 18.2394C98.6362 18.2379 98.6525 18.2355 98.6688 18.2336C98.7124 18.2288 98.756 18.2235 98.7995 18.2173C98.8096 18.2159 98.8197 18.214 98.8297 18.2125C100.405 17.9697 101.779 16.7361 102.226 15.2037V17.974C102.226 18.1301 102.353 18.2566 102.509 18.2566H104.924C105.08 18.2566 105.207 18.1301 105.207 17.974V5.38762C105.207 5.23145 105.08 5.10498 104.924 5.10498H102.226ZM102.226 15.0173C101.642 15.504 100.886 15.687 100.078 15.7416C100.07 15.7421 100.062 15.7431 100.055 15.7435C100.001 15.7469 99.9473 15.7483 99.8937 15.7483C97.8702 15.7483 96.1993 14.0291 96.1993 11.9462C96.1993 11.4552 96.2932 10.9876 96.4589 10.5579C96.9964 9.16294 98.3162 8.17516 99.863 8.17516H102.226V15.0173Z"
        className="fill-current"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M62.9488 5.10498H60.5857C58.269 5.10498 56.2307 6.32558 55.0408 8.17564C54.476 9.0542 54.1018 10.0746 53.9816 11.174C53.9538 11.4279 53.9395 11.6856 53.9395 11.9471C53.9395 12.2087 53.9543 12.4813 53.984 12.7419C54.189 14.5665 55.0925 16.1723 56.4108 17.2698C56.5512 17.3943 56.7007 17.5083 56.8568 17.6118C57.4729 18.0185 58.2034 18.2571 58.9895 18.2571C59.8513 18.2571 60.6475 17.973 61.2966 17.492C62.0769 16.9373 62.6801 16.1249 62.9483 15.2046V17.6123H62.943V18.1431C62.943 19.1893 62.6695 19.9764 62.1124 20.5076C61.5562 21.0384 60.6254 21.3043 59.322 21.3043C58.7893 21.3043 57.9428 21.276 57.0896 21.1888C56.9541 21.1749 56.8281 21.2607 56.7893 21.391L56.1771 23.4561C56.1282 23.6219 56.2379 23.7924 56.4084 23.8168C57.4393 23.9644 58.4453 24.041 59.0264 24.041C61.3694 24.041 63.1059 23.5261 64.2427 22.498C65.2717 21.5682 65.8307 20.156 65.9289 18.2576V5.38857C65.9289 5.23241 65.8024 5.10594 65.6463 5.10594H62.9483L62.9488 5.10498ZM62.9488 8.17564C62.9488 8.17564 62.9799 14.8405 62.9488 15.0432C62.3701 15.5112 61.6501 15.6942 60.8654 15.7474C60.8578 15.7479 60.8496 15.7488 60.842 15.7493C60.7883 15.7526 60.7347 15.7541 60.681 15.7541C60.6178 15.7541 60.555 15.7526 60.4923 15.7493C58.5565 15.6482 56.9224 13.9644 56.9224 11.9467C56.9224 11.4556 57.0163 10.9881 57.1821 10.5584C57.7196 9.16342 59.0393 8.17564 60.5862 8.17564H62.9493H62.9488Z"
        className="fill-current"
      />
      <path
        d="M11.9677 0.0883613C5.42735 0.0883613 0.0956335 5.36165 0.00126216 11.88C-0.0945461 18.4999 5.27645 23.9854 11.8973 24.0237C13.9418 24.0357 15.9112 23.5355 17.6602 22.5851C17.8307 22.4927 17.8571 22.2579 17.7119 22.1296L16.5919 21.137C16.3644 20.9353 16.0405 20.8783 15.7603 20.9971C14.5397 21.5164 13.2132 21.7818 11.846 21.765C6.4961 21.6994 2.17372 17.2481 2.25898 11.8987C2.3433 6.61674 6.66616 2.34608 11.9677 2.34608H21.6774V19.6045L16.1684 14.7097C15.9902 14.5511 15.7172 14.5823 15.5735 14.7724C14.6891 15.9432 13.2487 16.6714 11.6487 16.5612C9.42927 16.4079 7.63095 14.6211 7.46472 12.4026C7.26592 9.75638 9.36316 7.53938 11.9677 7.53938C14.3236 7.53938 16.2638 9.35255 16.4664 11.6567C16.4846 11.8618 16.5771 12.0529 16.7308 12.1894L18.1656 13.4613C18.3284 13.6055 18.5866 13.5173 18.6269 13.3032C18.7303 12.7499 18.7668 12.1736 18.726 11.5825C18.4951 8.21291 15.7656 5.50201 12.3945 5.29459C8.52963 5.0565 5.29849 8.07974 5.19598 11.8694C5.09586 15.5629 8.12196 18.7466 11.8159 18.828C13.3579 18.862 14.7874 18.3772 15.9423 17.537L23.1404 23.9178C23.4489 24.1914 23.9361 23.9724 23.9361 23.56V0.541533C23.9361 0.290515 23.733 0.0874023 23.482 0.0874023H11.9677V0.0883613Z"
        className="fill-current"
      />
    </g>
    <defs>
      <clipPath id="clip0_347_7670">
        <rect
          width="105.246"
          height="24"
          fill="white"
          transform="translate(0 0.074707)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Inner = ({
  onChange,
  onActiveOptionChange,
}: {
  onChange?: (url: string) => void;
  onActiveOptionChange?: (url: string | null) => void;
}) => {
  const { refine } = useSearchBox();

  const { groups } = useGroupedResults();

  return (
    <Combobox onChange={onChange}>
      {({ ...props }) => {
        if (onActiveOptionChange) {
          onActiveOptionChange(props.activeOption);
        }

        return (
          <div
            className={clsx(
              "min-w-[320px] sm:min-w-[500px] md:min-w-[600px] border border-g-100 rounded-[16px]",
              "bg-white bg-opacity-75 backdrop-blur-md",
              "dark:bg-footer-dark dark:border-transparency-light dark:backdrop-blur-md"
            )}
          >
            <header className="flex items-center px-24">
              <SearchIcon />

              <Combobox.Input
                type="search"
                className="ml-16 flex-1 py-24 typography-paragraph-2 placeholder:text-g-500 text-g-900 dark:text-g-50 outline-none bg-transparent placeholder:dark:text-g-700"
                placeholder="Search documentation"
                autoFocus
                onChange={(event) => refine(event.target.value)}
              />
            </header>

            <div className="flex justify-center items-center text-g-700 border-t border-b border-g-100 dark:border-transparency-light">
              <div className="flex-1 py-32 px-24 min-h-[140px] max-h-[65vh] overflow-auto">
                <Combobox.Options static>
                  {groups.map((group) => {
                    return (
                      <div key={group.name} className="mb-32">
                        <Paragraph className="font-bold mb-16 dark:text-white">
                          {group.name}
                        </Paragraph>

                        <ul className="space-y-8">
                          {group.results.map((result) => {
                            return (
                              <Combobox.Option
                                key={result.id}
                                value={result.url}
                                onFocus={() => {
                                  console.log(result.url);
                                }}
                              >
                                {({ active, selected }) => (
                                  <Result
                                    active={active}
                                    selected={selected}
                                    result={result}
                                  />
                                )}
                              </Combobox.Option>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </Combobox.Options>
              </div>
            </div>

            <footer className="p-24 flex justify-end items-center space-x-16">
              <Paragraph variant="small">Search by</Paragraph>
              <a href="/todo">
                <AlgoliaLogo />
              </a>
            </footer>
          </div>
        );
      }}
    </Combobox>
  );
};

export const SearchBox = ({
  onChange,
  onActiveOptionChange,
}: {
  onChange?: (url: string) => void;
  onActiveOptionChange?: (url: string | null) => void;
}) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="strawberry">
      <Configure hitsPerPage={10} distinct />

      <Inner onChange={onChange} onActiveOptionChange={onActiveOptionChange} />
    </InstantSearch>
  );
};
