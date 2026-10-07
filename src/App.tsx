import { Link } from 'react-router-dom'
import { CartProvider } from './cart'
import { Layout } from './components/Layout'
import { Account } from './pages/Account'
import { Article, Blog } from './pages/Blog'
import { Bulk } from './pages/Bulk'
import { CartPage } from './pages/Cart'
import { Checkout, OrderConfirmed } from './pages/Checkout'
import { Farms } from './pages/Farms'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Partner } from './pages/Partner'
import { PartnerDashboard } from './pages/PartnerDashboard'
import { PartnerJoin } from './pages/PartnerJoin'
import { ProductPage } from './pages/Product'
import { Referral } from './pages/Referral'
import { Shop } from './pages/Shop'
import { Why } from './pages/Why'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTitle } from './useTitle'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:slug" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmed" element={<OrderConfirmed />} />
            <Route path="farms" element={<Farms />} />
            <Route path="why-okat" element={<Why />} />
            <Route path="partner" element={<Partner />} />
            <Route path="partner/join" element={<PartnerJoin />} />
            <Route path="partner/dashboard" element={<PartnerDashboard />} />
            <Route path="r/:code" element={<Referral />} />
            <Route path="contact" element={<Contact />} />
            <Route path="bulk" element={<Bulk />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<Article />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

function NotFound() {
  useTitle('Not found · Okat')
  return (
    <div className="container page-miss">
      <p className="eyebrow dark">404</p>
      <h1>This path doesn’t lead to the farm.</h1>
      <Link to="/" className="btn btn-forest">
        Back home
      </Link>
    </div>
  )
}
