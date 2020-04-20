import React from 'react';
import Episodes from './Episodes';
import * as rtl from '@testing-library/react';

const ep = [
    {
    "id": 49288,
    "url": "http://www.tvmaze.com/episodes/49288/futurama-1x01-space-pilot-3000",
    "name": "Space Pilot 3000",
    "season": 1,
    "number": 1,
    "airdate": "1999-03-28",
    "airtime": "22:00",
    "airstamp": "1999-03-29T03:00:00+00:00",
    "runtime": 30,
    "image": {
    "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143950.jpg",
    "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/143950.jpg"
    },
    "summary": "<p>A delivery boy frozen in the year 1999 awakens in the year 3000. Phillip J. Fry delivers a pizza to a Cryogenics lab on New Years eve, only to discover that it is a prank delivery and then accidentally falls into a open cryogenics chamber, is put to sleep and wakes up in the far future.</p>",
    "_links": {
    "self": {
    "href": "http://api.tvmaze.com/episodes/49288"
    }
    }
    }
];

    describe('Episode', () => {
        let wrapper;
        afterEach(rtl.cleanup);

        beforeEach(() => {
            wrapper = rtl.render(<Episodes episodes={ep} />);

        });

        it('it displays without crashing', async () => {
            const episodesDiv = await wrapper.findByText(
                "Space Pilot 3000"
            );
            expect(episodesDiv).toBeVisible();
        });
    });