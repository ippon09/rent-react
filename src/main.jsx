import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Topphoto from './components/Top_photo/Top_photo.jsx'
import OfferTitle from './components/OfferTitle/OfferTitle.jsx'
import OffersItems from './components/OffersItems/OffersItems.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Topphoto/>
    <OfferTitle/>
    <OffersItems/>
    <App />
  </>,
)
