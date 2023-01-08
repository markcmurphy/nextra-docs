import { useTheme } from 'nextra-theme-docs';
import { useEffect, useState } from 'react';

const RapidocViewer = ({ renderStyle = 'view' }) => {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    import('rapidoc').then(() => {
      setComponentLoaded(true);
    });
  }, []);

  return (
    componentLoaded && (
      <rapi-doc
        spec-url="https://raw.githubusercontent.com/bigcommerce/api-specs/master/reference/pages.v3.yml"
        render-style={renderStyle}
        font-size="large"
        class="bg-white"
        show-header="false"
        // server-url="/api/try-it/"
        // default-api-server="/api/try-it/"
        api-key-name="X-Auth-Token"
        api-key-location="header"
        api-key-value="r7752l82dg66kadytd52p2t06rd42k5"
        fetch-credentials="include"
        id="rapidoc"
        // server-url="/api/try-it"
        // allow-search="false"
        // allow-advanced-search="false"
        theme={resolvedTheme}
        onLoaded={() => {
          console.log('loaded');
          const rapidocEl = document.getElementById('rapidoc');
          rapidocEl.addEventListener('before-try', (e) => {
            console.log('try');
            if (e.detail.request.method === 'POST') {
              e.detail.request.headers.append('custom-token', 'AAA.BBB.CCC');
            }
          });
        }}
        // onLoaded={() => {
        //   const hash = window.location.hash;
        //   if (hash !== '') {
        //     scroller.scrollTo(hash.slice(1), { offset: -100 });
        //   }
        // }}
        suppressHydrationWarning
      />
    )
  );
};

export default RapidocViewer;
