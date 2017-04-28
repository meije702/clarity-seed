import { PotatoYield } from './potato-yield';
import { Plot } from './plot';
import { PotatoPhoto } from './potato-photo';

export class PotatoSample {
    id: string;
    plot?: Plot;
    potatoYield?: PotatoYield;
    timestamp: string;
    photos: PotatoPhoto [];
}
