"use client";
import { BACKGROUND_OPTIONS } from "@/components/background";
import Playground from "@/components/playground";
import { useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // const resetBg = () => {
  //   setPreview(null);
  //   setTheme("light");
  // };

  return (
    <div className={theme}>
      <div className="fixed font-inter left-0 top-0 -z-10 h-full w-full">
        {preview}
      </div>
      <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="pt-8 mt-16 flex items-center justify-center">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
              Collection of modern,{" "}
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                background snippets
              </span>
            </h2>
            <p className="mt-6 text-center w-full text-lg leading-6 text-gray-600 dark:text-gray-200">
              Ready-to-use, simply copy and paste into your next project. All
              snippets crafted with Tailwind CSS and{" "}
              <span className="cursor-wait opacity-70">Vanilla CSS</span>.
            </p>
            
          </div>
        </div>
        <div className="overflow-hidden px-4 pb-20 mt-20 md:px-10">
          <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
            {BACKGROUND_OPTIONS.map((background, index) => (
              <Playground
                key={index}
                setPreview={setPreview}
                theme={background.theme}
                setTheme={setTheme}
              >
                {background.component}
              </Playground>
            ))}
          </div>
          <div className="inline-flex max-w-2xl rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-900 dark:border-neutral-900 dark:bg-black dark:text-neutral-200">
            These backgrounds are made for a full page background. The preview
            can be different from the actual result. Click on preview to test
            it. And don&apos;t forget to tweak it to your needs.
          </div>
        </div>
        <footer>
          <div className="flex items-center justify-center py-8">
            <span className="text-sm text-neutral-800 dark:text-neutral-200">
              Made by
              <a
                href="https://twitter.com/Ibelick"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-neutral-950 dark:text-neutral-100"
              >
                @Ibelick
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
