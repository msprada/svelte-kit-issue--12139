# svelte-kit-issue--12139

tldr; if vite.config.ts preserveSymLinks: true => redirect does not work if  preserveSymLinks: false => redirect does work but the shared lib cannot be used

## Steps to Reproduce

### Running Shared Lib Import

- change "preserveSymlinks" to true
- comment out the  PageServerLoad function in routes/page.server.ts file
- comment in  script part in routes/page.svelte


### Running Redirect
- change "preserveSymlinks" to false
- comment in the  PageServerLoad function in routes/page.server.ts file
- comment out script part in routes/page.svelte