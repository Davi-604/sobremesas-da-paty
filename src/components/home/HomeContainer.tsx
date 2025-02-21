'use client';

import { Footer } from '../default/Footer';
import { ColorsGrid } from '../tmp/ColorsGrid';
import { ApresentationArea } from './ApresentationArea';
import { BannerArea } from './BannerArea';
import { ShowcaseArea } from './ShowcaseArea';
import { StandOutsArea } from './StandoutsArea';

export const HomeContainer = () => {
    return (
        <section className="overflow-hidden">
            <BannerArea />
            <ApresentationArea />
            <ShowcaseArea />
            <StandOutsArea />
            {/* <ColorsGrid /> */}
        </section>
    );
};
