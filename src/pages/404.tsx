import Layout from '@/app/Layout';
import Link from 'next/link';
import { useRouter } from "next/router";

const NotFoundPage: React.FC = () => {
    const rounter = useRouter();

    return (
        <Layout>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center">
                        <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">That’s a 404</p>
                        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">Page not found</h1>

                        <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

                        <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Go home</a>
                    </div>
                </div>
            </div>
            <div>{rounter.asPath} 4044notpagefound</div>
            <Link href="/">ホームに戻る</Link>
        </Layout>
    );
};

export default NotFoundPage;