import "../styles/global.css";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import Layout from "../components/layout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // injext vercel analytics
  inject();
  injectSpeedInsights();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
