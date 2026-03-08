-- Seed site settings
INSERT INTO site_settings (key, value, type, group_name, label) VALUES
    ('brand_name', 'MidAid', 'text', 'brand', 'Brand Name'),
    ('tagline', 'Compassionate In-Home Senior Care', 'text', 'brand', 'Tagline'),
    ('phone', '489 987 299', 'text', 'contact', 'Phone Number'),
    ('email', 'info.help@midaid.com', 'text', 'contact', 'Email Address'),
    ('address', '97-99 Bathurst St, Sydney NSW 2000, Australia', 'text', 'contact', 'Address'),
    ('facebook_url', '#', 'text', 'social', 'Facebook URL'),
    ('instagram_url', '#', 'text', 'social', 'Instagram URL'),
    ('twitter_url', '#', 'text', 'social', 'Twitter/X URL'),
    ('youtube_url', '#', 'text', 'social', 'YouTube URL'),
    ('linkedin_url', '#', 'text', 'social', 'LinkedIn URL'),
    ('stat_years', '25+', 'text', 'stats', 'Years of Service'),
    ('stat_offices', '600+', 'text', 'stats', 'Local Offices'),
    ('stat_rating', '4.8', 'text', 'stats', 'Google Review Rating'),
    ('footer_disclaimer', 'Each MidAid agency is independently owned and operated.', 'textarea', 'brand', 'Footer Disclaimer')
ON CONFLICT (key) DO NOTHING;

-- Seed services
INSERT INTO services (name, slug, short_description, icon_name, sort_order, published) VALUES
    ('Companion Care', 'elderly-companion-care', 'Our companion care services provide meaningful social interaction and daily assistance for seniors who need a helping hand.', 'heart', 1, true),
    ('Personal Care', 'personal-care', 'Our personal care services provide hands-on assistance with daily activities like bathing, dressing, and grooming.', 'user', 2, true),
    ('Respite Care', 'respite-care', 'Our respite care services give family caregivers a well-deserved break while ensuring your loved one receives quality care.', 'refresh-cw', 3, true),
    ('Hospital Transition Care', 'transition-home-care', 'Our transition care services help seniors safely move from hospital to home while reducing the risk of readmission.', 'home', 4, true),
    ('Dementia Care', 'dementia-care', 'Our dementia care services provide specialized support for seniors living with dementia and related conditions.', 'brain', 5, true),
    ('Alzheimer''s Care', 'alzheimers-care', 'Our Alzheimer''s care services are designed to provide compassionate, specialized support for those living with Alzheimer''s disease.', 'shield', 6, true),
    ('24-Hour Home Care', '24-hour-home-care', 'Round-the-clock care for seniors who need continuous assistance and supervision.', 'clock', 7, true),
    ('End of Life Care', 'end-of-life-care', 'Compassionate end-of-life care that provides comfort and dignity during this important time.', 'heart', 8, true),
    ('Live-In Care', 'live-in-care', 'Dedicated live-in caregivers who provide continuous care and companionship.', 'home', 9, true),
    ('Palliative Care', 'palliative-care', 'Specialized palliative care focused on comfort and quality of life.', 'shield', 10, true),
    ('Parkinson''s Care', 'parkinsons-care', 'Expert care for seniors managing Parkinson''s disease.', 'brain', 11, true),
    ('Veterans In-Home Care', 'veterans-care', 'Dedicated in-home care services for our nation''s veterans.', 'shield', 12, true)
ON CONFLICT (slug) DO NOTHING;

-- Seed FAQs (general)
INSERT INTO faqs (question, answer, category, sort_order) VALUES
    ('What Services Do MidAid Caregivers Provide?', 'MidAid caregivers provide a wide range of non-medical home care services including companion care, personal care, respite care, and specialized care for conditions like Alzheimer''s and dementia. Services can include help with bathing, dressing, meal preparation, light housekeeping, medication reminders, transportation, and more.', 'general', 1),
    ('What Are The Benefits Of In-Home Personal Care?', 'In-home personal care allows seniors to age in the comfort of their own home while receiving the assistance they need. Benefits include maintaining independence, familiar surroundings, one-on-one attention, flexible scheduling, and often lower costs compared to facility-based care.', 'general', 2),
    ('How Is In-Home Personal Care Different From Home Health Care?', 'In-home personal care focuses on non-medical assistance like help with daily activities, companionship, and household tasks. Home health care involves medical services provided by licensed professionals such as nurses or therapists. Both can work together to provide comprehensive care.', 'general', 3),
    ('Does MidAid Provide Services In Assisted Living Facilities?', 'Yes, MidAid can provide supplemental care services in assisted living facilities, nursing homes, and other care facilities. This additional one-on-one attention can enhance the level of care your loved one receives.', 'general', 4),
    ('Can I Change The Home Care Schedule?', 'Absolutely! We understand that care needs can change over time. You can adjust your care schedule at any time by contacting your local MidAid office. We offer flexible scheduling to accommodate your needs.', 'general', 5),
    ('Does MidAid Care For People With Alzheimer''s or Other Medical Conditions?', 'Yes, MidAid caregivers are trained to provide specialized care for individuals with Alzheimer''s, dementia, Parkinson''s, and other conditions. Our caregivers receive ongoing training to provide the best possible care.', 'general', 6),
    ('Can I Choose Which Caregiver Will Work With My Loved One?', 'Yes! At MidAid, we believe the relationship between a caregiver and client is essential to quality care. We work with you to find a caregiver whose personality, skills, and experience are the best match for your loved one.', 'general', 7),
    ('What If I Would Like to Select a New Caregiver?', 'If you would like to change caregivers for any reason, simply contact your local MidAid office. We will work with you to find a better match. Your satisfaction and your loved one''s comfort are our top priorities.', 'general', 8),
    ('What If I No Longer Need Services?', 'You can discontinue services at any time. Simply contact your local MidAid office and we will work with you to ensure a smooth transition. There are no long-term contracts required.', 'general', 9),
    ('How Do I Start Home Care Services With MidAid?', 'Getting started is easy! Simply call your local MidAid office or fill out our online contact form. We''ll schedule a free in-home consultation to assess your needs and develop a personalized care plan.', 'general', 10)
ON CONFLICT DO NOTHING;

-- Seed reviews
INSERT INTO reviews (author_name, location, review_text, rating, color_theme, featured) VALUES
    ('Margaret S.', 'Sydney, NSW', 'The caregiver that was assigned to my mother was absolutely wonderful. She was patient, kind, and went above and beyond. My mother looked forward to her visits every day.', 5, 'teal', true),
    ('Robert H.', 'Sydney, NSW', 'We were hesitant about home care at first, but MidAid made the transition so smooth. The care coordinator took the time to understand our needs and matched us with the perfect caregiver.', 5, 'purple', true),
    ('Susan K.', 'Parramatta, NSW', 'After my father''s surgery, we needed help with his recovery at home. MidAid provided exceptional care. The caregiver was professional, compassionate, and truly cared about my father''s well-being.', 5, 'blue', true),
    ('James T.', 'Bondi, NSW', 'I can''t say enough good things about MidAid. They have been caring for my wife who has Alzheimer''s and the caregivers are specifically trained for memory care. It gives me peace of mind.', 5, 'rose', true),
    ('Patricia M.', 'Manly, NSW', 'The team at MidAid is wonderful. They are responsive, flexible, and truly care about their clients. Our caregiver has become like family to us.', 5, 'brown', true),
    ('David L.', 'Chatswood, NSW', 'Outstanding service from start to finish. The initial assessment was thorough, and they matched us with a caregiver who was perfect for my mother''s needs. Highly recommend!', 5, 'dark-teal', true)
ON CONFLICT DO NOTHING;

-- Seed navigation items
INSERT INTO navigation_items (menu_group, label, href, sort_order) VALUES
    ('header', 'Find Care', '/office-locator', 1),
    ('header', 'About Us', '/about-us', 2),
    ('header', 'Types of Care', '/home-care-services', 3),
    ('header', 'Home Care Info', '#', 4),
    ('header', 'Articles', '/articles', 5),
    ('header', 'Caregiver Jobs', '/employment', 6),
    ('header', 'Contact Us', '/contact-us', 7),
    ('types_of_care', 'Companion Care', '/elderly-companion-care', 1),
    ('types_of_care', 'Personal Care', '/personal-care', 2),
    ('types_of_care', 'Respite Care', '/respite-care', 3),
    ('types_of_care', 'Transition to Home Care', '/transition-home-care', 4),
    ('types_of_care', 'Dementia Care', '/dementia-care', 5),
    ('types_of_care', 'Alzheimer''s Care', '/alzheimers-care', 6),
    ('types_of_care', '24-Hour Care', '/24-hour-home-care', 7),
    ('types_of_care', 'End of Life Care', '/end-of-life-care', 8),
    ('types_of_care', 'Live-In Care', '/live-in-care', 9),
    ('types_of_care', 'Palliative Care', '/palliative-care', 10),
    ('types_of_care', 'Parkinson''s Care', '/parkinsons-care', 11),
    ('types_of_care', 'Veterans Care', '/veterans-care', 12),
    ('home_care_info', 'Caregivers', '/caregivers', 1),
    ('home_care_info', 'Fall Prevention', '/fall-prevention', 2),
    ('home_care_info', 'Give Us A Review', '/give-us-a-review', 3),
    ('home_care_info', 'GUIDE Model Program', '/guide-model-program', 4),
    ('home_care_info', 'Home Care Costs', '/home-care-costs', 5),
    ('home_care_info', 'Home Care FAQs', '/home-care-faqs', 6),
    ('home_care_info', 'How To Get Started', '/how-to-get-started', 7),
    ('home_care_info', 'How We Assist', '/how-we-assist', 8),
    ('home_care_info', 'Long Distance Care Giving', '/long-distance-care-giving', 9),
    ('home_care_info', 'Our Reviews', '/our-reviews', 10),
    ('home_care_info', 'Veterans Benefits', '/veterans-benefits', 11)
ON CONFLICT DO NOTHING;

-- Seed articles
INSERT INTO articles (title, slug, image_url, category, published, featured) VALUES
    ('How to Talk to Your Parents About Home Care', 'how-to-talk-to-parents-about-home-care', '/images/Whisk_05c25109353fe2d88f1437b47bfffa90dr.jpeg', 'getting-started', true, true),
    ('Signs Your Parent May Need Home Care', 'signs-parent-may-need-home-care', '/images/Whisk_296661e1eecd735af5f4729a6c9cbca6dr.jpeg', 'getting-started', true, true),
    ('Understanding the Cost of Home Care', 'understanding-cost-of-home-care', '/images/Whisk_357ee580e5147ee96a948b18c1f186b4dr.jpeg', 'costs', true, true),
    ('Benefits of In-Home Care vs. Assisted Living', 'benefits-in-home-care-vs-assisted-living', '/images/Whisk_8d4f37c2eb7ea69bb8f4fb907c9e48bcdr.jpeg', 'comparison', true, false),
    ('Caregiver Self-Care Tips', 'caregiver-self-care-tips', '/images/Whisk_9a4e3ebdd3487db89524e7243e977484dr.jpeg', 'caregiver-tips', true, false),
    ('How to Choose the Right Home Care Provider', 'how-to-choose-right-home-care-provider', '/images/Whisk_a3d984fda8bcedab84547240fb7fe039dr.jpeg', 'getting-started', true, false),
    ('Fall Prevention Tips for Seniors', 'fall-prevention-tips-seniors', '/images/Whisk_c2670ee002fd25a81154e7e65c207a5edr.jpeg', 'safety', true, false),
    ('Managing Medications at Home', 'managing-medications-at-home', '/images/Whisk_d19aa31616742ff887b4b96855587ca2dr.jpeg', 'health', true, false),
    ('Nutrition Tips for Seniors', 'nutrition-tips-seniors', '/images/Whisk_dc819a47cb89f0188774c9cd59ee07c6dr.jpeg', 'health', true, false),
    ('Activities to Keep Seniors Engaged', 'activities-keep-seniors-engaged', '/images/Whisk_e207405be600b63a2dc43de0cf928121dr.jpeg', 'lifestyle', true, false),
    ('Understanding Alzheimer''s Disease', 'understanding-alzheimers-disease', '/images/Whisk_f029a24e84f42a089c94d1b4480b12c2dr.jpeg', 'conditions', true, false),
    ('Dementia Care at Home: What to Expect', 'dementia-care-at-home-what-to-expect', '/images/Whisk_f0a87ab0a29ab2a8c744f2c6fa28ebe4dr.jpeg', 'conditions', true, false),
    ('Veterans Home Care Benefits Guide', 'veterans-home-care-benefits-guide', '/images/Whisk_f29e0d402cf1db29f70409659d4d38aedr.jpeg', 'veterans', true, false),
    ('How to Create a Safe Home for Seniors', 'how-to-create-safe-home-seniors', '/images/Whisk_f36ef42afea13b69336405f5f2060c63dr.jpeg', 'safety', true, false),
    ('The Importance of Social Connection for Seniors', 'importance-social-connection-seniors', '/images/Whisk_f53ca7ad4f5ee33a1e647572a8f18f52dr.jpeg', 'lifestyle', true, false),
    ('End of Life Care: Supporting Your Loved One', 'end-of-life-care-supporting-loved-one', '/images/Whisk_f8f465a7bb557c59f804378bb6733816dr.jpeg', 'conditions', true, false),
    ('Respite Care: A Break for Family Caregivers', 'respite-care-break-family-caregivers', '/images/Whisk_fddb8040a753d1d89864120852f4bbb8dr.jpeg', 'caregiver-tips', true, false),
    ('Transitioning from Hospital to Home Care', 'transitioning-hospital-to-home-care', '/images/Whisk_1289de0f33e0f35b43e46954a2af094edr.jpeg', 'getting-started', true, false),
    ('Long-Distance Caregiving Tips', 'long-distance-caregiving-tips', '/images/Whisk_26ee8be5350b2eebdfc405a349224c2adr.jpeg', 'caregiver-tips', true, false),
    ('Parkinson''s Care: What Families Need to Know', 'parkinsons-care-what-families-need-to-know', '/images/Whisk_2992d8bd434722fba3b489fdba36ccfbdr.jpeg', 'conditions', true, false),
    ('How Technology Can Help Seniors Age in Place', 'how-technology-can-help-seniors-age-in-place', '/images/Whisk_5859cf451db6c3193d1494a443e0d5fddr.jpeg', 'lifestyle', true, false),
    ('Companion Care: More Than Just Companionship', 'companion-care-more-than-just-companionship', '/images/Whisk_a1da17d1f188b9f83574c0385b2d1ed2dr.jpeg', 'services', true, false),
    ('Seasonal Safety Tips for Seniors', 'seasonal-safety-tips-seniors', '/images/Whisk_a55593f4eae680baed24c3588d43a769dr.jpeg', 'safety', true, false),
    ('Understanding Palliative Care', 'understanding-palliative-care', '/images/Whisk_b6a603f7825005bbef04d2682078e1dadr.jpeg', 'conditions', true, false),
    ('Healthy Aging: Tips for a Fulfilling Life', 'healthy-aging-tips-fulfilling-life', '/images/Whisk_c5faabb9e52a3ccab5d4b76b9c26bf9ddr.jpeg', 'lifestyle', true, false),
    ('How to Handle Sundowning in Dementia', 'how-to-handle-sundowning-dementia', '/images/Whisk_e32bc940bc8e40cbbbb4f2faff8d6c40dr.jpeg', 'conditions', true, false),
    ('Financial Planning for Senior Care', 'financial-planning-senior-care', '/images/Whisk_e52f1882674f17c98224937c1a4defb9dr.jpeg', 'costs', true, false),
    ('Exercises for Seniors: Staying Active at Home', 'exercises-seniors-staying-active-home', '/images/Whisk_8e2337f3d2e7aa385fd491b1b03a33eddr.jpeg', 'health', true, false),
    ('Choosing Between Live-In Care and Hourly Care', 'choosing-between-live-in-care-hourly-care', '/images/Whisk_00dc63d6413722fa54242c75b9901c48dr.jpeg', 'comparison', true, false),
    ('Mental Health and Aging: What to Watch For', 'mental-health-aging-what-to-watch-for', '/images/Whisk_914806e89940474aca940ad32d6321f2dr.jpeg', 'health', true, false)
ON CONFLICT (slug) DO NOTHING;
