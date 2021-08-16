import Head from "next/head";

export const HeadTag = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

            {/* Google Roboto Font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
    );
};
