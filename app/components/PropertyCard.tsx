interface PropertyCardProps {
    rent: number;
    address: string;
    description: string;
    landlord: string;
    image: string;
}

export default function PropertyCard({
    rent,
    address,
    description,
    landlord,
    image,
  } : PropertyCardProps) {
    return (
        <>
        <div className="card text-bg-info mb-3" style={{width: '75%'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">$XXXX/mo </h5>
                        <p className="card-text">100 Nicolls Rd, Stony Brook, NY 11794</p>
                        <p className="card-text">One bed one bath. Friendly PHD roommates with renovated kitchen and new house items.  Looking for a student with good living habit, polite, and kind. </p>
                        <p className="card-text"><small className="text-body-secondary">Anna Chen | Phone #: (xxx)-xxx-xxxx   </small></p>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
}