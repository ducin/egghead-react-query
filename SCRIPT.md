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
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}