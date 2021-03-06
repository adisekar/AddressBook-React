export interface Contact {
    gender: string;
    name: Name;
    picture: Picture;
    email: string;
    phone: string;
    cell: string;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}