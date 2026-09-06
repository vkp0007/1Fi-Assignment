import { Search } from "lucide-react"; 
 
import { BottomNavigation } from "../components/shop/BottomNavigation"; 
import { ShopHero } from "../components/shop/ShopHero"; 
import { ShopTabs } from "../components/shop/ShopTabs"; 
 
export function Shop() { 
  return ( 
    <div className="app-shell"> 
 
      <ShopHero /> 
 
      <main className="shop-content"> 
 
        {/* Shop navigation */} 
        <ShopTabs /> 
 
        {/* Search */} 
        <div className="search-box"> 
          <Search size={24} /> 
 
          <span> 
            Search online stores... 
          </span> 
        </div> 
 
        {/* Top Brands */} 
        <section> 
          <h2>Top Brands</h2> 
 
          <div className="placeholder-list"> 
 
            <div className="brand-placeholder"> 
              <span>AI</span> 
 
              <div> 
                <b>Air India</b> 
 
                <small> 
                  No-cost EMIs up to 18 months 
                </small> 
              </div> 
            </div> 
 
            <div className="brand-placeholder"> 
              <span></span> 
 
              <div> 
                <b>Apple Premium Reseller</b> 
 
                <small> 
                  No-cost EMIs up to 24 months 
                </small> 
              </div> 
            </div> 
 
            <div className="brand-placeholder"> 
              <span>CL</span> 
 
              <div> 
                <b>CaratLane</b> 
 
                <small> 
                  No-cost EMIs up to 6 months 
                </small> 
              </div> 
            </div> 
 
          </div> 
        </section> 
 
      </main> 
 
      <BottomNavigation /> 
 
    </div> 
  ); 
} 