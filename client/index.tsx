import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BasketProvider } from '@context/basket-context'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.querySelector('#app') as HTMLElement).render(
    <Auth0Provider
      domain="manaia-aleksei.au.auth0.com"
      clientId="cOk2hoTx4Lx37MsxauP7G1rw5OwcRcBL"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://toys/api',
      }}
    >
      <BasketProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={router}
            future={{ v7_startTransition: true }}
          />
        </QueryClientProvider>
      </BasketProvider>
    </Auth0Provider>,
  )
})
