import { AuthProvider } from 'hooks/useAuth';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/index';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthProvider>
                <GlobalStyles />
                <Component {...pageProps} />
            </AuthProvider>
        </>
    );
}

export default MyApp;
