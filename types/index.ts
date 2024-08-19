export interface fetchRealtyOptions {
    city?: string;
    price_max?: string;
    limit?: string;
    offset?: string;
    sort?: string;
}
export interface ButtonProps {
    title: string;
    style?: string;
    type?: string;
    onClick?: () => void;
}

export interface DisplayHouseProps {
  item: listingProps
}

export interface listingProps {
    Identifier?: string;
    Availability?: string;
    ItemOffered?: listingDetailsProps;
    Price?: number;
    PriceCurrency?: string;
    OfferedBy?: agentsProps;
}
export interface listingDetailsProps {
    Address?: address;
    Name?: string;
    NumberOfBathroomsTotal?: number;
    NumberOfBedrooms?: number;
    NumberOfFullBathrooms?: number;
    Photo?: photo[];
}
export interface agentsProps {
    Email?: string;
    JobTitle?: string;
    Name?: string;
    WorksFor?: organization;
}
interface address {
    AddressCountry?: string;
    AddressLocality?: string;
    AddressRegion?: string;
    Description?: string;
    Name?: string;
    PostalCode?: string;
    StreetAddress?: string;
}

interface organization {
    Name?: string;
}

interface photo {
    Url?: string;
}


