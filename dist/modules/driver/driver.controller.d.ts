export declare class DriverController {
    create(createDriverDto: any): string;
    findAll(): {
        id: string;
        name: string;
        pickupTime: string;
        location: string;
        distance: string;
        eta: string;
        avatar: string;
    }[];
    getActivity(): {
        id: string;
        title: string;
        date: string;
        reward: string;
        description: string;
        iconType: string;
        color: string;
    }[];
    findOne(id: string): string;
}
