# svelte-kit-issue--12139
This Repo deals with following related issue:  https://github.com/sveltejs/kit/issues/12139


tldr; 
if vite.config.ts preserveSymLinks: true the shared lib can be used but the redirect does not work 
otherwise if preserveSymLinks: false => redirect does work but the shared lib cannot be used

## Steps to Reproduce

### Running Shared Lib Import (currently implememented)

- change "preserveSymlinks" to true in vite.config.ts
- comment out the  PageServerLoad function in routes/page.server.ts file
- comment in  script part in routes/page.svelte


### Running Redirect 
- change "preserveSymlinks" to false in vite.config.ts
- comment in the  PageServerLoad function in routes/page.server.ts file
- comment out script part in routes/page.svelte


# Running and Building

- First navigate to route folder and execute `pnpm install`
- You can start the demo by running `pnpm run example.ui:dev`
