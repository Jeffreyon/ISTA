import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>ISTA</title>
                <meta
                    name="description"
                    content="Give your child the Best Education"
                />
                <link rel="icon" type="image/x-icon" href="/favicon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
