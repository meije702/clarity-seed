import { Farm } from './farm-filter';
import { PotatoSample } from './potato-sample';

export class Plot {
    id: string;
    farm?: Farm;

    name: string;
    surface: number;
    latitude: number;
    longitude: number;
    year: number;
    breed: string;
    row_width: number;
    plant_spacing: number;
    samples: PotatoSample[]
}
