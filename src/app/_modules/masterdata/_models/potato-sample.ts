import { Plot } from './plot';
import { PotatoPhoto } from './potato-photo';

export class PotatoSample {
    id: string;
    plot?: Plot;
    timestamp: string;
    photos: PotatoPhoto [];
}
