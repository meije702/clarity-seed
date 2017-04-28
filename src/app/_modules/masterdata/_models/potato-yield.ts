import { PotatoSample } from './potato-sample';

export class PotatoYield {
    public id: string;
    public sample: PotatoSample;
    public totalYield: number;
    private totalCount: number;
    // ['0/28', '28/35', '35/50', '50/55', '55/+']
    public yieldPerSize: number[] = new Array<number>(5);
    private countPerSize: number[] = new Array<number>(5);

    public calculateYield(): void {
        if (this.sample != null) {
            this.totalYield = 0;
            for (let i = 0; i <= 5; i++) {
                this.yieldPerSize[i] = 0;
                this.countPerSize[i] = 0;
            }

            for (let photo of this.sample.photos) {
                for (let potato of photo.potatoes) {
                    this.totalCount++;
                    this.totalYield += potato.weight;
                    if (potato.width <= 28) {
                        this.yieldPerSize[0] += potato.weight;
                        this.countPerSize[0]++;
                    } else if (potato.width <= 35) {
                        this.yieldPerSize[1] += potato.weight;
                        this.countPerSize[1]++;
                    } else if (potato.width <= 50) {
                        this.yieldPerSize[2] += potato.weight;
                        this.countPerSize[2]++;
                    } else if (potato.width <= 55) {
                        this.yieldPerSize[3] += potato.weight;
                        this.countPerSize[3]++;
                    } else {
                        this.yieldPerSize[4] += potato.weight;
                        this.countPerSize[4]++;
                    }
                }
            }
            this.totalYield = this.totalYield / this.totalCount;

            for (let i = 0; i <= 5; i++) {
                this.yieldPerSize[i] = this.yieldPerSize[i] / this.countPerSize[i];
            }
        }
    }
}
