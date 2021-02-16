BEGIN;

INSERT INTO blogful_articles
    (title, date_published, content)
VALUES
    ('Flourish', now() - '20 days'::INTERVAL, 'He stomped on his fruit loops and thus became a cereal killer.'),
    ('Initial', now() - '20 days'::INTERVAL, 'He uses onomatopoeia as a weapon of mental destruction.'),
    ('Calculation', now() - '18 days'::INTERVAL, 'If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.'),
    ('Hurl', now() - '18 days'::INTERVAL, 'So long and thanks for the fish.'),
    ('Damage', now() - '17 days'::INTERVAL, 'I met an interesting turtle while the song on the radio blasted away.'),
    ('Empire', now() - '17 days'::INTERVAL, 'Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over.'),
    ('Read', now() - '16 days'::INTERVAL, 'The best key lime pie is still up for debate.'),
    ('Charm', now() - '15 days'::INTERVAL, 'Charles ate the french fries knowing they would be his last meal.'),
    ('Deer', now() - '14 days'::INTERVAL, 'She moved forward only because she trusted that the ending she now was going through must be followed by a new beginning.'),
    ('Fail', now() - '13 days'::INTERVAL, 'I caught my squirrel rustling through my gym bag.'),
    ('Rabbit', now() - '12 days'::INTERVAL, 'Pink horses galloped across the sea.'),
    ('Body', now() - '12 days'::INTERVAL, 'I purchased a baby clown from the Russian black market.'),
    ('Flood', now() - '11 days'::INTERVAL, 'Car safety systems have come a long way, but he was out to prove they could be outsmarted.'),
    ('Iron', now() - '10 days'::INTERVAL, 'She wore green lipstick like a fashion icon.'),
    ('Prove', now() - '9 days'::INTERVAL, 'Green should have smelled more tranquil, but somehow it just tasted rotten.'),
    ('Hold', now() - '8 days'::INTERVAL, 'The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup.'),
    ('Reflect', now() - '6 days'::INTERVAL, 'The sign said there was road work ahead so he decided to speed up.'),
    ('Crouch', now() - '5 days'::INTERVAL, 'She used her own hair in the soup to give it more flavor.'),
    ('Motorist', now() - '4 days'::INTERVAL, 'The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.'),
    ('Earthwax', now() - '3 hours'::INTERVAL, 'She had some amazing news to share but nobody to share it with.');

COMMIT;