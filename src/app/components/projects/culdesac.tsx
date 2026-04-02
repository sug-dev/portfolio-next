import Image from "next/image"

import logo from '../../../../public/project-icons/culdesac.png'

const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <Image src={logo} width={75} alt="Cul De Sac Logo" className="rounded-lg" />
                    <a href="https://theculdesac.club" target="_blank" rel="noopener noreferrer" className="underline text-neutral-700 hover:text-blue-500"><h1 className="font-bold text-4xl">The<br />Cul-De-Sac</h1></a>
                </div>
                <div className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>First real project built with Next.js. Largely a sandbox for various programming ideas including real-time applications, video games, study tools, and image tools.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    <b>The Cul-De-Sac</b> is my personal blog/coding playground of sorts.<br /><br />Whether I&#39;m writing a blog post, prototyping other applications, or trying my hand at recreating games, it will likely be on <b>The Cul-De-Sac</b>.<br /><br />This project was my first real foray into <b>Next.js</b> and <b>TypeScript</b>.<br /><br />Previously, I hosted some video games on the site but they are hidden for the time being as I focus on some other things.<br /><br />You can find a constantly-updating <b>flashcard system</b>, a Japanese <b>kana study tool</b>, and an <b>image pointillization tool</b>.
                </div>
            </div>
        </div>
    )
}

export default Page