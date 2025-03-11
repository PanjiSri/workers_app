// worker-configuration.d.ts
interface Env {
	BOOK_CATALOG: DurableObjectNamespace<BookCatalogDO>;
	ASSETS: { fetch: typeof fetch };
  }
  
  interface Book {
	id?: number;
	title: string;
	author: string;
  }
  
  // Add this for SQLite API types
  interface SqlStorageValue {
	// SQLite value types
  }