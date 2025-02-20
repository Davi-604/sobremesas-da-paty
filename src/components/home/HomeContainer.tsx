'use client';

import { ColorsGrid } from '../tmp/ColorsGrid';
import { ApresentationArea } from './ApresentationArea';
import { BannerArea } from './BannerArea';
import { ShowcaseArea } from './ShowcaseArea';

export const HomeContainer = () => {
    return (
        <section className="overflow-hidden">
            <BannerArea />
            <ApresentationArea />
            <ShowcaseArea />
            {/* <ColorsGrid /> */}
        </section>
    );
};
