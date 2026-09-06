import Markdown from "react-markdown";

export function DescriptionMarkdown({description}: { description: string }) {
    return <Markdown
        components={{
            h1: ({children}) => <h1 className="text-xl md:text-3xl font-bold mb-4 mt-2 text-black dark:text-white">{children}</h1>,
            h2: ({children}) => <h2 className="text-lg md:text-xl font-bold mb-3 mt-2 text-black dark:text-white">{children}</h2>,
            h3: ({children}) => <h3 className="text-md md:text-lg font-bold mb-2 mt-2 text-black dark:text-white">{children}</h3>,
            p: ({children}) => <p className="mb-4 leading-relaxed text-black dark:text-slate-100">{children}</p>,
            ul: ({children}) => <ul className="list-disc mb-4 space-y-2 text-black dark:text-slate-100">{children}</ul>,
            ol: ({children}) => <ol
                className="list-decimal mb-4 space-y-2 text-black dark:text-slate-100">{children}</ol>,
            li: ({children}) => <li className="leading-relaxed">{children}</li>,
            strong: ({children}) => <strong className="font-bold text-black dark:text-white">{children}</strong>,
            em: ({children}) => <em className="italic text-black dark:text-slate-200">{children}</em>,
            a: ({href, children}) => (
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 underline decoration-cyan-400 underline-offset-4 hover:text-cyan-200"
                >
                    {children}
                </a>
            ),
            blockquote: ({children}) => (
                <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-slate-200 my-4">
                    {children}
                </blockquote>
            ),
            code: ({children}) => (
                <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm text-cyan-200">
                    {children}
                </code>
            ),
            pre: ({children}) => (
                <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 my-4 text-sm text-cyan-100">
                                   {children}
                               </pre>
            ),
        }}
    >
        {description}
    </Markdown>;
}