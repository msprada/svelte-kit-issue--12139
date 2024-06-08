# svelte-kit-issue--12139
This Repo deals with following related issue:  https://github.com/sveltejs/kit/issues/12139


tl;dr
if vite.config.ts preserveSymLinks: true the shared lib can be used but the redirect does not work 
otherwise if preserveSymLinks: false => redirect does work but the shared lib cannot be used

## Steps to Run either Shared Lib Import or Redirect

### Running Shared Lib Import (currently implememented)

- change "preserveSymlinks" to true in vite.config.ts
- comment out the  PageServerLoad function in routes/page.server.ts file
- comment in  script part in routes/page.svelte


### Running Redirect 
- change "preserveSymlinks" to false in vite.config.ts
- comment in the  PageServerLoad function in routes/page.server.ts file
- comment out script part (line 1 to line 5) and comment our referencing code (line 8 and line 9) in routes/page.svelte


## Steps to Reproduce the issue
- change "preserveSymlinks" to true in vite.config.ts
- comment in the  PageServerLoad function in routes/page.server.ts file
- comment out script part (line 1 to line 5) and comment our referencing code (line 8 and line 9) in routes/page.svelte
- start the application 
- the redirect will be automatically triggered and the 500 page will be shown
- the console will shown following error:
    - redirect triggered!
    - Redirect { status: 302, location: '/signin' }


# Running and Building

## Prerequisites:
- install pnpn on your machine

## Start Application
- First navigate to route folder and execute `pnpm install`
- You can start the demo by running `pnpm run example.ui:dev`
