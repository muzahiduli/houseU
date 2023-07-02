import Map from './components/Map'
import Header from './components/Header'
import PropertyCard from './components/PropertyCard'

export default function Home() {
  return <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-6 border-right border border-primary">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            </div>
            <div className="col-md-6 border-left border border-danger">
            <Map />
            </div>
        </div>
    </div>
    
    </>
}
