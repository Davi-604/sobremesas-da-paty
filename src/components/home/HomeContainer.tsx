'use client';

import { ApresentationArea } from './ApresentationArea';
import { BannerArea } from './BannerArea';
import { ClientsAvaliations } from './ClientsAvaliations';
import { ShowcaseArea } from './ShowcaseArea';
import { StandOutsArea } from './StandoutsArea';

export const HomeContainer = () => {
    return (
        <section className="overflow-hidden">
            <BannerArea />
            <ApresentationArea />
            <StandOutsArea />
            <ShowcaseArea />
            <ClientsAvaliations />
        </section>
    );
};
