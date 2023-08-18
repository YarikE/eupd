import './globals.scss'

import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import {Providers} from "@/redux/provider";
import {Metadata} from "next";
import type {AppProps} from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
export const metadata: Metadata = {
    title: 'EcoUrban — Pulse',
    description: 'Лучший проект хакатона <3',
}
// deleted props: pageProps
// d props: on Providers
export default function RootLayout({
                                       children, pageProps
                                   }: {
    children: React.ReactNode,
    pageProps: any
}) {
    return (
        <html lang="ru">
        <body>
        <Providers  {...pageProps}>
            {children}
        </Providers>
        </body>
        </html>
    )
}
