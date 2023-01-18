# svelteKit issue REPO

This is a repo to reproduce an example with svelteKit, for Netlify svelteKit addapter.

`routes/api/test/+server.ts`  ( imports https module breaks the build by throwing `ERR_UNSUPPORTED_ESM_URL_SCHEME`)

`routes/(index)/+page.server.ts` imports local node module still wokrs on edge Deno ( some node modules will not work )
