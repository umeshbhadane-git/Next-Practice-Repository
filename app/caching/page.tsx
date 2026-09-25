import { revalidateProducts } from "./actions";

export const fetchCache = "default-cache";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ??
  "http://localhost:3000";

async function getDefaultData() {
  console.log("DEFAULT CACHE: fetch() started");

  const response = await fetch(
    `${BASE_URL}/api/cache-source?type=default`
  );

  return response.json();
}

async function getTaggedData() {
  console.log("TAGGED CACHE: fetch() started");

  const response = await fetch(
    `${BASE_URL}/api/cache-source?type=tagged`,
    {
      next: {
        tags: ["products"],
      },
    }
  );

  return response.json();
}

async function getISRData() {
  console.log("ISR: fetch() started");

  const response = await fetch(
    `${BASE_URL}/api/cache-source?type=isr`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  return response.json();
}

async function getNoStoreData() {
  console.log("NO STORE: fetch() started");

  const response = await fetch(
    `${BASE_URL}/api/cache-source?type=no-store`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function CachingPage() {
  const [
    defaultData,
    taggedData,
    isrData,
    noStoreData,
  ] = await Promise.all([
    getDefaultData(),
    getTaggedData(),
    getISRData(),
    getNoStoreData(),
  ]);

  return (
    <main className="caching-container">
      <h1>Next.js Caching Playground</h1>

      <p className="intro">
        Compare four different Data Cache strategies.
      </p>

      {/* DEFAULT */}

      <section className="cache-card">
        <h2>1. Default Cache</h2>

        <p>
          Uses <code>fetch()</code> without a cache option.
        </p>

        <div className="data">
          <p>
            Source call count:{" "}
            <strong>
              {defaultData.callCount}
            </strong>
          </p>

          <p>
            Source timestamp:{" "}
            <strong>
              {defaultData.timestamp}
            </strong>
          </p>
        </div>

        <p className="explanation">
          This page uses{" "}
          <code>fetchCache = "default-cache"</code>,
          so an unspecified fetch cache option is treated
          as cached.
        </p>
      </section>

      {/* TAGGED */}

      <section className="cache-card">
        <h2>2. Tagged Cache</h2>

        <p>
          Uses{" "}
          <code>
            next: &#123; tags: ["products"] &#125;
          </code>
        </p>

        <div className="data">
          <p>
            Source call count:{" "}
            <strong>
              {taggedData.callCount}
            </strong>
          </p>

          <p>
            Source timestamp:{" "}
            <strong>
              {taggedData.timestamp}
            </strong>
          </p>
        </div>

        <form action={revalidateProducts}>
          <button type="submit">
            Revalidate Products
          </button>
        </form>

        <p className="explanation">
          Clicking the button invalidates all cached
          data associated with the "products" tag.
        </p>
      </section>

      {/* ISR */}

      <section className="cache-card">
        <h2>3. ISR — 10 seconds</h2>

        <p>
          Uses{" "}
          <code>
            next: &#123; revalidate: 10 &#125;
          </code>
        </p>

        <div className="data">
          <p>
            Source call count:{" "}
            <strong>
              {isrData.callCount}
            </strong>
          </p>

          <p>
            Source timestamp:{" "}
            <strong>
              {isrData.timestamp}
            </strong>
          </p>
        </div>

        <p className="explanation">
          The cached value can be reused for up to
          10 seconds before Next.js revalidates it.
        </p>
      </section>

      {/* NO STORE */}

      <section className="cache-card">
        <h2>4. No Store</h2>

        <p>
          Uses{" "}
          <code>
            cache: "no-store"
          </code>
        </p>

        <div className="data">
          <p>
            Source call count:{" "}
            <strong>
              {noStoreData.callCount}
            </strong>
          </p>

          <p>
            Source timestamp:{" "}
            <strong>
              {noStoreData.timestamp}
            </strong>
          </p>
        </div>

        <p className="explanation">
          The request is fetched again for each
          server request.
        </p>
      </section>
    </main>
  );
}