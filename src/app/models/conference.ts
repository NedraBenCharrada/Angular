export class Conference {
    id: number;
    title: string;
    description: string;
    date: Date;
    address: string;
    nbrMax: number;
    nbrReservation: number;
    picture: string;

    constructor(
        id: number,
        title: string,
        description: string,
        date: Date,
        address: string,
        nbrMax: number,
        nbrReservation: number,
        picture: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.address = address;
        this.nbrMax = nbrMax;
        this.nbrReservation = nbrReservation;
        this.picture = picture;
    }

    // calculated automatically: no need to store it
    get availablePlaces(): number {
        return this.nbrMax - this.nbrReservation;
    }
}