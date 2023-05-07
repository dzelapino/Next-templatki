import Layout from "@/components/layout";
import "@/styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <div className="HTMLWrapper">
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </div>
  );
}

export default App;
