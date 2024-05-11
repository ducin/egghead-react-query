npm i @tanstack/react-query @tanstack/react-query-devtools

const queryClient = new QueryClient()

<QueryClientProvider client={queryClient}>
    <Todos />
</QueryClientProvider>

LINTER
npm i -D @tanstack/eslint-plugin-query

DEVTOOLS
https://tanstack.com/query/latest/docs/framework/react/devtools#devtools-in-production

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
return (
<QueryClientProvider client={queryClient}>
{/_ The rest of your application _/}
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
)
}

====

IMPL TODO:

- project listing - styles...
- project details view/ui

CONTENT TODO:

- różne opcje typowania `useQuery` (https://tkdodo.eu/blog/react-query-and-type-script)
  - (!!!) https://www.typescriptlang.org/play/?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ4A0cAjjvgPJgzAQB2qR2ueAwgDbDq3wC+cAZlAgg4AcgACMAIb1pAYwDWAeijopcmAFpSzUQCg9MPGHRwAKhAAmEOAF5EeuE7jBLALji1kIAEa49PHqW6HJsUqoCyLQaNLQC6DByABYW1qgAFACUHgAKQiDAGAA8AIJQUFJ4RakQAHy1BnJ0qPA6+Oyc3Hae6ADucEztHFwwWY3N8DBWEKiDeN1teJTUzekIjiRkeADS6HgeANqiU2miALoEG4sAYrQe-AnJNQwbLVJs6Gag6B4ArAAMgMuPEy41kcBOMwWWw6IwAdABzBJzAAiUmk6Uhsy2cMWuzwoKUSmccAAegB+IA
- perf? (https://tkdodo.eu/blog/react-query-render-optimizations)
  - maybe something on structural sharing? (https://tkdodo.eu/blog/react-query-render-optimizations#structural-sharing)
